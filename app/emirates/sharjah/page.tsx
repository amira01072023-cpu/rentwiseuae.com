import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'Rooms and Bedspaces for Rent in Sharjah',
  description: 'Browse rooms and bedspaces for rent in Sharjah, explore practical commuter-friendly areas, and contact listers directly for photos, location, and viewing details.',
};

export default function SharjahLandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-indigo-50 to-slate-50 px-6 py-10 ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Sharjah"
          title="Rooms and bedspaces for rent in Sharjah"
          description="Browse Sharjah room rentals and bedspace listings across areas like Al Nahda, Al Taawun, Muwaileh Commercial, and Al Majaz, then contact listers directly for full details."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/browse?city=Sharjah" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Browse Sharjah listings</Link>
          <Link href="/post-listing" className="btn-brand rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm">Post free listing</Link>
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <SurfaceCard><div className="text-sm text-slate-500">Good for</div><div className="mt-1 font-semibold text-slate-900">Budget-conscious renters</div><div className="mt-2 text-sm text-slate-600">Sharjah room and bedspace listings often work well for renters trying to stay within a stricter monthly budget.</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">Good for</div><div className="mt-1 font-semibold text-slate-900">Dubai commuters</div><div className="mt-2 text-sm text-slate-600">Sharjah area pages help renters compare border convenience, commuter access, and lower pricing.</div></SurfaceCard>
        <SurfaceCard><div className="text-sm text-slate-500">How this works</div><div className="mt-1 font-semibold text-slate-900">Simple listing, direct contact</div><div className="mt-2 text-sm text-slate-600">Renters browse the essentials here, then contact listers directly for photos, location, and full rental details.</div></SurfaceCard>
      </div>

    </main>
  );
}
