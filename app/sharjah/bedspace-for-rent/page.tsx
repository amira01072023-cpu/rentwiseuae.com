import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ListingCard from '@/components/ListingCard';
import SurfaceCard from '@/components/SurfaceCard';
import { getApprovedListings } from '@/lib/listingQueries';
import type { AppListing } from '@/lib/listingQueries';

export const metadata: Metadata = {
  title: 'Bedspace for rent in Sharjah',
  description: 'Browse Sharjah bedspace listings and contact posters directly for photos, location, and viewing details.',
};

export default async function SharjahBedspacePage() {
  const listings = await getApprovedListings({ city: 'Sharjah', type: 'bedspace' });

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-white via-indigo-50 to-slate-50 px-6 py-10 ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Sharjah Bedspaces"
          title="Bedspace for rent in Sharjah"
          description="Browse simple Sharjah bedspace listings and contact posters directly to request photos, location pin, and occupancy details."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/browse?city=Sharjah&type=bedspace" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800">Open filtered browse</Link>
          <Link href="/post-listing" className="btn-brand rounded-2xl px-5 py-3 text-sm font-medium text-white">Post Sharjah bedspace listing</Link>
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <SurfaceCard><div className="text-sm text-slate-500">Listing focus</div><div className="mt-1 font-semibold text-slate-900">Budget bedspace options</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">Contact flow</div><div className="mt-1 font-semibold text-slate-900">Ask poster for full sharing details</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">Results</div><div className="mt-1 font-semibold text-slate-900">{listings.length} Sharjah bedspace listings</div></SurfaceCard>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {listings.length > 0 ? listings.map((listing: AppListing) => <ListingCard key={listing.id} listing={listing} />) : <SurfaceCard className="lg:col-span-2"><div className="text-lg font-semibold text-slate-900">No Sharjah bedspace listings yet</div><p className="mt-2 text-sm text-slate-600">Post the first one or check the main browse page.</p></SurfaceCard>}
      </div>
    </main>
  );
}
