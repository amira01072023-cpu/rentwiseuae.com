import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ListingCard from '@/components/ListingCard';
import SurfaceCard from '@/components/SurfaceCard';
import { getApprovedListings } from '@/lib/listingQueries';

export const metadata: Metadata = {
  title: 'Rooms for rent in Dubai',
  description: 'Browse Dubai room listings and contact posters directly for photos, location, and viewing details.',
};

export default async function DubaiRoomsPage() {
  const listings = await getApprovedListings({ city: 'Dubai', type: 'room' });

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-cyan-50 px-6 py-10 ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Dubai Rooms"
          title="Rooms for rent in Dubai"
          description="Browse simple Dubai room listings. Check the essentials quickly, then contact the poster directly to request photos and full details."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/browse?city=Dubai&type=room" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800">Open filtered browse</Link>
          <Link href="/post-listing" className="rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-500">Post Dubai room listing</Link>
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <SurfaceCard><div className="text-sm text-slate-500">Listing focus</div><div className="mt-1 font-semibold text-slate-900">Private and shared rooms</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">Contact flow</div><div className="mt-1 font-semibold text-slate-900">Ask poster for photos directly</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">Results</div><div className="mt-1 font-semibold text-slate-900">{listings.length} Dubai room listings</div></SurfaceCard>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {listings.length > 0 ? listings.map((listing) => <ListingCard key={listing.id} listing={listing} />) : <SurfaceCard className="lg:col-span-2"><div className="text-lg font-semibold text-slate-900">No Dubai room listings yet</div><p className="mt-2 text-sm text-slate-600">Post the first one or check the main browse page.</p></SurfaceCard>}
      </div>
    </main>
  );
}
