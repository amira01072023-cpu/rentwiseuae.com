import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'Rooms and Bedspaces for Rent in Abu Dhabi',
  description: 'Browse rooms and bedspaces for rent in Abu Dhabi, explore practical areas, and contact listers directly for photos, location, and viewing details.',
};

export default function AbuDhabiLandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-6 py-10 ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Abu Dhabi"
          title="Rooms and bedspaces for rent in Abu Dhabi"
          description="Browse Abu Dhabi room rentals and bedspace listings, compare practical residential areas, and contact listers directly for photos, location, and viewing details."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/browse?city=Abu%20Dhabi" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Browse Abu Dhabi listings</Link>
          <Link href="/post-listing" className="btn-brand rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm">Post free listing</Link>
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <SurfaceCard><div className="text-sm text-slate-500">Good for</div><div className="mt-1 font-semibold text-slate-900">Quiet residential areas</div><div className="mt-2 text-sm text-slate-600">Abu Dhabi room and bedspace listings are useful for renters comparing calmer residential locations and everyday practicality.</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">Good for</div><div className="mt-1 font-semibold text-slate-900">Private room demand</div><div className="mt-2 text-sm text-slate-600">Rooms for rent in Abu Dhabi are especially useful for professionals who want more privacy than a bedspace.</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">How this works</div><div className="mt-1 font-semibold text-slate-900">Text-first listing model</div><div className="mt-2 text-sm text-slate-600">This site keeps Abu Dhabi listings lightweight and leaves photo sharing and exact location details to direct contact with the lister.</div></SurfaceCard>
      </div>

    </main>
  );
}
