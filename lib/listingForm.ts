import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { BathroomType, ContactMethod, GenderPreference, ListingStatus, ListingType } from '@prisma/client';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function asBoolean(value: FormDataEntryValue | null) {
  return value === 'yes';
}

function normalizeFacebookPostUrl(raw: string) {
  const value = raw.trim();
  if (!value) return null;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error('Facebook post link must be a valid URL.');
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, '');
  const allowedHosts = ['facebook.com', 'm.facebook.com', 'fb.watch'];

  if (!allowedHosts.includes(host)) {
    throw new Error('Only direct Facebook links are allowed for the Facebook post field.');
  }

  const pathname = url.pathname.toLowerCase();
  const isAllowedPath =
    host === 'fb.watch' ||
    pathname.includes('/posts/') ||
    pathname.includes('/permalink/') ||
    pathname.includes('/share/') ||
    pathname.includes('/groups/') ||
    pathname.includes('/reel/') ||
    pathname.includes('/watch/') ||
    pathname === '/story.php';

  if (!isAllowedPath) {
    throw new Error('Please enter a direct Facebook post, reel, group post, or watch link.');
  }

  return url.toString();
}

export async function submitListing(formData: FormData) {
  'use server';

  const title = String(formData.get('title') || '').trim();
  const type = String(formData.get('type') || '').trim() as ListingType;
  const city = String(formData.get('city') || '').trim();
  const area = String(formData.get('area') || '').trim();
  const priceMonthly = Number(formData.get('priceMonthly') || 0);
  const depositRaw = String(formData.get('deposit') || '').trim();
  const availability = String(formData.get('availability') || '').trim();
  const description = String(formData.get('description') || '').trim();
  const summary = String(formData.get('summary') || '').trim();
  const contactName = String(formData.get('contactName') || '').trim();
  const contactValue = String(formData.get('contactValue') || '').trim();
  const facebookPostUrl = normalizeFacebookPostUrl(String(formData.get('facebookPostUrl') || ''));
  const bathroom = String(formData.get('bathroom') || 'shared') as BathroomType;
  const genderPreference = String(formData.get('genderPreference') || 'any') as GenderPreference;
  const contactMethod = String(formData.get('contactMethod') || 'whatsapp') as ContactMethod;
  const nationalityPreference = String(formData.get('nationalityPreference') || '').trim();
  const furnished = asBoolean(formData.get('furnished'));
  const billsIncluded = asBoolean(formData.get('billsIncluded'));

  if (!title || !city || !area || !description || !summary || !contactName || !contactValue || !availability) {
    throw new Error('Missing required listing fields.');
  }

  if (type !== 'room' && type !== 'bedspace') {
    throw new Error('Invalid listing type.');
  }

  if (!Number.isFinite(priceMonthly) || priceMonthly <= 0) {
    throw new Error('Monthly rent must be a valid number.');
  }

  const baseSlug = slugify(`${title}-${area}-${city}`);
  const similarCount = await prisma.listing.count({
    where: {
      slug: {
        startsWith: baseSlug,
      },
    },
  });

  const slug = similarCount === 0 ? baseSlug : `${baseSlug}-${similarCount + 1}`;

  await prisma.listing.create({
    data: {
      slug,
      type,
      title,
      city,
      area,
      priceMonthly,
      deposit: depositRaw ? Number(depositRaw) : null,
      billsIncluded,
      furnished,
      bathroom,
      genderPreference,
      nationalityPreference: nationalityPreference || null,
      availability,
      contactName,
      contactMethod,
      contactValue,
      facebookPostUrl,
      summary,
      description,
      tags: JSON.stringify([]),
      status: ListingStatus.pending,
    },
  });

  revalidatePath('/');
  revalidatePath('/browse');
  revalidatePath('/admin/listings');
  redirect('/post-listing?submitted=1');
}

export async function approveListing(formData: FormData) {
  'use server';

  const id = String(formData.get('id') || '').trim();
  if (!id) {
    throw new Error('Missing listing id.');
  }

  await prisma.listing.update({
    where: { id },
    data: { status: ListingStatus.approved },
  });

  revalidatePath('/');
  revalidatePath('/browse');
  revalidatePath('/admin/listings');
}

export async function rejectListing(formData: FormData) {
  'use server';

  const id = String(formData.get('id') || '').trim();
  if (!id) {
    throw new Error('Missing listing id.');
  }

  await prisma.listing.update({
    where: { id },
    data: { status: ListingStatus.rejected },
  });

  revalidatePath('/');
  revalidatePath('/browse');
  revalidatePath('/admin/listings');
}
