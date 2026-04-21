import type { MetadataRoute } from 'next';
import { getApprovedListings } from '@/lib/listingQueries';

const SITE_URL = 'https://rentwiseuae.com';

const staticRoutes = [
  '/',
  '/accessibility-statement',
  '/browse',
  '/contact-us',
  '/cookie-policy',
  '/data-rights-request',
  '/disclaimer',
  '/dubai/rooms-for-rent',
  '/emirates/abu-dhabi',
  '/emirates/dubai',
  '/emirates/sharjah',
  '/eu-compliance-notice',
  '/gratuity-calculator',
  '/guides/basic-salary-vs-total-salary-uae',
  '/guides/how-uae-gratuity-is-calculated',
  '/guides/uae-end-of-service-explained',
  '/leave-salary-calculator',
  '/monthly-cost-calculator',
  '/notice-period-pay-calculator',
  '/post-listing',
  '/privacy-policy',
  '/report-illegal-content',
  '/sharjah/bedspace-for-rent',
  '/terms-of-use',
  '/work-tools',
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
  }));

  let listingEntries: MetadataRoute.Sitemap = [];

  try {
    const listings = await getApprovedListings({ sort: 'newest' });

    listingEntries = listings.map((listing) => ({
      url: `${SITE_URL}/listings/${listing.slug}`,
      lastModified: new Date(listing.updatedAt || listing.createdAt),
    }));
  } catch {
    listingEntries = [];
  }

  return [...staticEntries, ...listingEntries];
}
