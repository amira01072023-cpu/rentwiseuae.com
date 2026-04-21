import 'dotenv/config';
import fs from 'node:fs';
import { PrismaClient, BathroomType, ContactMethod, GenderPreference, ListingStatus, ListingType } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const csvPath = process.argv[2] || '/home/pgc/.openclaw/media/inbound/rentwiseuae_abu_dhabi_facebook_batch_2026-04-20---1b07cd5f-93ac-4612-b25f-b1f7c3445055.csv';

function parseCsv(input: string) {
  const rows: string[][] = [];
  let current = '';
  let row: string[] = [];
  let inQuotes = false;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const next = input[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(current);
      current = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i++;
      row.push(current);
      current = '';
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      continue;
    }

    current += char;
  }

  if (current.length > 0 || row.length > 0) {
    row.push(current);
    rows.push(row);
  }

  const [header, ...data] = rows;
  return data.map((values) => Object.fromEntries(header.map((key, index) => [key, values[index] ?? ''])));
}

function parseBool(value: string) {
  if (!value) return false;
  return value.trim().toLowerCase() === 'true';
}

function clean(value: string) {
  const v = (value ?? '').trim();
  return v === '' ? null : v;
}

function cleanDate(value: string) {
  const v = (value ?? '').trim();
  if (!v) return undefined;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

function parseIntOrNull(value: string) {
  const v = (value ?? '').trim();
  if (!v) return null;
  const n = Number(v.replace(/,/g, ''));
  return Number.isFinite(n) ? Math.round(n) : null;
}

function parseBathroom(value: string): BathroomType {
  return value === 'private' ? BathroomType.private : BathroomType.shared;
}

function parseGender(value: string): GenderPreference {
  if (value === 'male') return GenderPreference.male;
  if (value === 'female') return GenderPreference.female;
  return GenderPreference.any;
}

function parseContactMethod(value: string): ContactMethod {
  if (value === 'phone') return ContactMethod.phone;
  return ContactMethod.whatsapp;
}

function parseStatus(value: string): ListingStatus {
  if (value === 'rejected') return ListingStatus.rejected;
  if (value === 'pending') return ListingStatus.pending;
  if (value === 'draft') return ListingStatus.draft;
  return ListingStatus.approved;
}

async function main() {
  const raw = fs.readFileSync(csvPath, 'utf8');
  const records = parseCsv(raw);

  let imported = 0;

  for (const row of records) {
    const slug = String(row.slug || '').trim();
    const title = String(row.title || '').trim();
    const city = String(row.city || '').trim();
    const area = String(row.area || '').trim() || 'Area not specified';
    const type = String(row.type || '').trim() === 'bedspace' ? ListingType.bedspace : ListingType.room;
    const priceMonthly = parseIntOrNull(String(row.priceMonthly || '')) ?? 0;

    if (!slug || !title || !city) {
      continue;
    }

    const rawContactMethod = String(row.contactMethod || '').trim().toLowerCase();
    const rawFacebookPostUrl = clean(String(row.facebookPostUrl || ''));
    const rawSummary = clean(String(row.summary || ''));
    const rawDescription = clean(String(row.description || ''));
    const rawTags = clean(String(row.tags || ''));

    const facebookPostUrl = rawFacebookPostUrl && rawFacebookPostUrl.startsWith('http')
      ? rawFacebookPostUrl
      : null;

    const summary = rawSummary && !rawSummary.startsWith('http') ? rawSummary : (rawDescription ?? title);
    const description = rawDescription && !rawDescription.startsWith('[') ? rawDescription : (summary ?? title);
    const tags = rawTags && (rawTags.startsWith('[') || rawTags === '[]') ? rawTags : '[]';

    const contactMethod = rawContactMethod === 'facebook'
      ? ContactMethod.whatsapp
      : parseContactMethod(String(row.contactMethod || ''));

    const data = {
      slug,
      type,
      title,
      city,
      area,
      priceMonthly,
      deposit: parseIntOrNull(String(row.deposit || '')),
      billsIncluded: parseBool(String(row.billsIncluded || '')),
      furnished: parseBool(String(row.furnished || '')),
      bathroom: parseBathroom(String(row.bathroom || '')),
      genderPreference: parseGender(String(row.genderPreference || '')),
      nationalityPreference: clean(String(row.nationalityPreference || '')),
      availability: clean(String(row.availability || '')) ?? 'Available now',
      contactName: clean(String(row.contactName || '')) ?? 'Lister',
      contactMethod,
      contactValue: clean(String(row.contactValue || '')) ?? 'Facebook inbox',
      facebookPostUrl,
      summary,
      description,
      tags,
      status: parseStatus(String(row.status || '')),
      createdAt: cleanDate(String(row.createdAt || '')),
    };

    await prisma.listing.upsert({
      where: { slug },
      update: data,
      create: data,
    });

    imported++;
  }

  console.log(`Imported ${imported} listings from CSV: ${csvPath}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
