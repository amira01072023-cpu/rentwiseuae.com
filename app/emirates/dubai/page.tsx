import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import HomePreviewCard from '@/components/HomePreviewCard';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'Rooms and Bedspaces for Rent in Dubai',
  description: 'Browse rooms and bedspaces for rent in Dubai, explore practical areas, and contact listers directly for photos, location, and viewing details.',
};

export default function DubaiLandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-cyan-50 px-6 py-10 ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Dubai"
          title="Rooms and bedspaces for rent in Dubai"
          description="Browse Dubai room rentals and bedspace listings across practical areas, compare location and budget more easily, and contact listers directly for photos and viewing details."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/browse?city=Dubai" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Browse Dubai listings</Link>
          <Link href="/post-listing" className="rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-cyan-500">Post free listing</Link>
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <SurfaceCard><div className="text-sm text-slate-500">Popular use case</div><div className="mt-1 font-semibold text-slate-900">Rooms for working professionals</div><div className="mt-2 text-sm text-slate-600">Dubai room rentals are useful when privacy matters more than the lowest monthly cost.</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">Popular use case</div><div className="mt-1 font-semibold text-slate-900">Bedspaces for lower-cost access</div><div className="mt-2 text-sm text-slate-600">Bedspaces help renters stay in Dubai at a lower monthly price point while keeping access to key areas.</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">How this works</div><div className="mt-1 font-semibold text-slate-900">Text-first, direct contact</div><div className="mt-2 text-sm text-slate-600">This site does not host photos. Renters contact listers directly to request photos, exact location, and viewing details.</div></SurfaceCard>
      </div>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6">
        <div>
          <div className="text-brand text-sm font-semibold uppercase tracking-[0.18em]">Featured now</div>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Popular Dubai area pages</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Explore key Dubai area guides to compare lifestyle, convenience, and budget before you browse listings in more detail.</p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          <HomePreviewCard title="Dubai area" value="JVC" description="Useful for renters checking practical apartment-heavy Dubai areas." href="/areas/jvc" cta="Open area page" />
          <HomePreviewCard title="Dubai area" value="Arjan" description="A practical Dubai area page for renters balancing budget and access." href="/areas/arjan" cta="Open area page" />
          <HomePreviewCard title="Dubai area" value="Dubai Marina" description="Useful for renters looking at premium shared options and strong access." href="/areas/dubai-marina" cta="Open area page" />
          <HomePreviewCard title="Dubai area" value="Al Nahda Dubai" description="A strong border-area page for renters comparing convenience and value." href="/areas/al-nahda-dubai" cta="Open area page" />
        </div>
      </div>
    </main>
  );
}
