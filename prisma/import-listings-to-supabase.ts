import 'dotenv/config';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Client } from 'pg';

const inputPath = resolve(process.cwd(), 'prisma/listings-export.json');

type ListingRow = {
  id: string;
  slug: string;
  type: string;
  title: string;
  city: string;
  area: string;
  priceMonthly: number;
  deposit: number | null;
  billsIncluded: boolean;
  furnished: boolean;
  bathroom: string;
  genderPreference: string;
  nationalityPreference: string | null;
  availability: string;
  contactName: string;
  contactMethod: string;
  contactValue: string;
  facebookPostUrl: string | null;
  summary: string;
  description: string;
  tags: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is missing');
  }

  const rows = JSON.parse(readFileSync(inputPath, 'utf8')) as ListingRow[];
  const client = new Client({ connectionString });
  await client.connect();

  for (const row of rows) {
    await client.query(
      `INSERT INTO "Listing" (
        "id", "slug", "type", "title", "city", "area", "priceMonthly", "deposit", "billsIncluded", "furnished",
        "bathroom", "genderPreference", "nationalityPreference", "availability", "contactName", "contactMethod",
        "contactValue", "facebookPostUrl", "summary", "description", "tags", "status", "createdAt", "updatedAt"
      ) VALUES (
        $1, $2, $3::"ListingType", $4, $5, $6, $7, $8, $9, $10,
        $11::"BathroomType", $12::"GenderPreference", $13, $14, $15, $16::"ContactMethod",
        $17, $18, $19, $20, $21, $22::"ListingStatus", $23::timestamp, $24::timestamp
      )
      ON CONFLICT ("slug") DO UPDATE SET
        "type" = EXCLUDED."type",
        "title" = EXCLUDED."title",
        "city" = EXCLUDED."city",
        "area" = EXCLUDED."area",
        "priceMonthly" = EXCLUDED."priceMonthly",
        "deposit" = EXCLUDED."deposit",
        "billsIncluded" = EXCLUDED."billsIncluded",
        "furnished" = EXCLUDED."furnished",
        "bathroom" = EXCLUDED."bathroom",
        "genderPreference" = EXCLUDED."genderPreference",
        "nationalityPreference" = EXCLUDED."nationalityPreference",
        "availability" = EXCLUDED."availability",
        "contactName" = EXCLUDED."contactName",
        "contactMethod" = EXCLUDED."contactMethod",
        "contactValue" = EXCLUDED."contactValue",
        "facebookPostUrl" = EXCLUDED."facebookPostUrl",
        "summary" = EXCLUDED."summary",
        "description" = EXCLUDED."description",
        "tags" = EXCLUDED."tags",
        "status" = EXCLUDED."status",
        "createdAt" = EXCLUDED."createdAt",
        "updatedAt" = EXCLUDED."updatedAt"`,
      [
        row.id,
        row.slug,
        row.type,
        row.title,
        row.city,
        row.area,
        row.priceMonthly,
        row.deposit,
        row.billsIncluded,
        row.furnished,
        row.bathroom,
        row.genderPreference,
        row.nationalityPreference,
        row.availability,
        row.contactName,
        row.contactMethod,
        row.contactValue,
        row.facebookPostUrl,
        row.summary,
        row.description,
        row.tags,
        row.status,
        row.createdAt,
        row.updatedAt,
      ],
    );
  }

  await client.end();
  console.log(`Imported ${rows.length} listings into Supabase`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
