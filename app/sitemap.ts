import type { MetadataRoute } from 'next';
import { getApprovedListings } from '@/lib/listingQueries';

const SITE_URL = 'https://rentwiseuae.com';

const staticRoutes = [
  '/',
  '/accessibility-statement',
  '/area-comparison',
  '/areas/al-majaz-3',
  '/areas/al-nahda-dubai',
  '/areas/al-nahda-sharjah',
  '/areas/al-reem-island',
  '/areas/al-taawun',
  '/areas/arjan',
  '/areas/business-bay',
  '/areas/dubai-marina',
  '/areas/dubai-south',
  '/areas/jlt',
  '/areas/jvc',
  '/areas/khalifa-city',
  '/areas/mirdif',
  '/areas/muwaileh-commercial',
  '/browse',
  '/business-information',
  '/compare/al-nahda-sharjah-vs-al-nahda-dubai',
  '/compare/al-nahda-sharjah-vs-al-taawun',
  '/compare/al-taawun-vs-al-majaz-3',
  '/compare/al-taawun-vs-al-nahda-dubai',
  '/compare/dubai-marina-vs-jlt',
  '/compare/jvc-vs-arjan',
  '/compare/khalifa-city-vs-al-reem-island',
  '/compare/muwaileh-commercial-vs-al-nahda-dubai',
  '/compare/muwaileh-commercial-vs-al-nahda-sharjah',
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
  '/move-in-calculator',
  '/notice-period-pay-calculator',
  '/post-listing',
  '/privacy-policy',
  '/rent-decision',
  '/report-illegal-content',
  '/salary-safety-calculator',
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
