import Link from 'next/link';
import type { Metadata } from 'next';
import ListingCard from '@/components/ListingCard';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';
import { getApprovedListings } from '@/lib/listingQueries';

export const metadata: Metadata = {
  title: 'Rooms and Bedspaces for Rent in Dubai, Sharjah, Abu Dhabi and Across the UAE',
  description:
    'Find rooms and bedspaces for rent across Dubai, Sharjah, Abu Dhabi, Ajman, and more. Browse listings by area, compare prices, and contact listers directly.',
};

export default async function HomePage() {
  const featuredListings = (await getApprovedListings()).slice(0, 6);
  const marqueeListings = featuredListings.length > 0 ? [...featuredListings, ...featuredListings] : [];
  const listingCount = featuredListings.length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.10),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.08),_transparent_20%),linear-gradient(135deg,_#fffefc_0%,_#f8fafc_48%,_#eef2ff_100%)] px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Curated rental discovery across the UAE
            </div>

            <div className="mt-6">
              <PageHero
                eyebrow="RentWise UAE"
                title="Find rooms and bedspaces for rent across Dubai, Sharjah, Abu Dhabi and the UAE"
                description="Browse rooms and bedspaces by emirate, area, and budget, compare listing details quickly, and contact listers directly for photos, location, and viewing details."
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/browse" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800">
                Browse listings
              </Link>
              <Link href="/post-listing" className="btn-brand rounded-2xl px-5 py-3 text-sm font-medium shadow-[0_10px_25px_rgba(79,70,229,0.2)] transition hover:-translate-y-0.5">
                Post free listing
              </Link>
              <Link href="/work-tools" className="rounded-2xl bg-white/90 px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white">
                Open work tools
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.35rem] border border-white/80 bg-white/78 px-4 py-4 shadow-sm backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Experience</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">Cleaner search</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Focused listings with less noise and faster contact decisions.</p>
              </div>
              <div className="rounded-[1.35rem] border border-white/80 bg-white/78 px-4 py-4 shadow-sm backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Coverage</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">UAE-wide</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Dubai, Sharjah, Abu Dhabi, Ajman, and more as listings grow.</p>
              </div>
              <div className="rounded-[1.35rem] border border-white/80 bg-white/78 px-4 py-4 shadow-sm backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Contact path</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">Direct to lister</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">Facebook, phone, or WhatsApp—whichever the listing actually provides.</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(135deg,_#0f172a_0%,_#111827_45%,_#172033_100%)] p-6 text-white shadow-[0_34px_90px_rgba(15,23,42,0.22)] sm:p-7">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-emerald-400/15 blur-3xl" />
              <div className="relative space-y-4">
                <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-slate-300">Platform overview</div>
                    <div className="mt-2 text-2xl font-semibold text-white">Built for room and bedspace search</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">Find UAE room rentals and bedspace listings in a cleaner experience built around clarity, speed, and direct contact.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-3 py-2 text-lg">✦</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] uppercase tracking-[0.14em] text-slate-300">Live preview set</div>
                    <div className="mt-2 text-3xl font-semibold text-white">{listingCount}</div>
                    <div className="mt-1 text-sm text-slate-300">featured listings on homepage</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] uppercase tracking-[0.14em] text-slate-300">Core flow</div>
                    <div className="mt-2 text-base font-semibold text-white">Browse → shortlist → contact</div>
                    <div className="mt-1 text-sm text-slate-300">Fast decision path for renters.</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-slate-300">Designed for clarity</div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/5 px-3 py-3 text-sm text-slate-200">Clear pricing</div>
                    <div className="rounded-2xl bg-white/5 px-3 py-3 text-sm text-slate-200">Area-first browsing</div>
                    <div className="rounded-2xl bg-white/5 px-3 py-3 text-sm text-slate-200">Direct contact actions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SurfaceCard className="mt-6 overflow-hidden border border-slate-200/80 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
        <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,_rgba(248,250,252,1)_0%,_rgba(238,242,255,1)_52%,_rgba(255,255,255,1)_100%)] p-[1px]">
          <div className="rounded-[1.7rem] bg-white/95 p-5 sm:p-6 backdrop-blur">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-brand text-xs font-medium uppercase tracking-[0.16em]">Search listings</div>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">Search room and bedspace listings by area, emirate, type, or price</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Explore rental listings across Dubai, Sharjah, Abu Dhabi, Ajman, and more, then contact the lister directly.
                </p>
                <p className="mt-2 text-sm font-semibold text-amber-700">
                  Rates mentioned on listings should be confirmed directly with the lister.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Refined filters for faster shortlisting
              </div>
            </div>

            <form className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-6" action="/browse" method="get">
              <label className="block xl:col-span-2">
                <span className="text-sm font-medium text-slate-900">Search area or keyword</span>
                <input name="q" className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100" placeholder="Deira, Al Nahda, furnished, near metro..." />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-900">Emirate</span>
                <select name="city" defaultValue="" className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100">
                  <option value="">All emirates</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Ajman">Ajman</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Fujairah">Fujairah</option>
                  <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Umm Al Quwain">Umm Al Quwain</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-900">Type</span>
                <select name="type" defaultValue="" className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100">
                  <option value="">Room + bedspace</option>
                  <option value="room">Room</option>
                  <option value="bedspace">Bedspace</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-900">Min price</span>
                <input name="minPrice" type="number" min="0" className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100" placeholder="0" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-900">Max price</span>
                <input name="maxPrice" type="number" min="0" className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100" placeholder="5000" />
              </label>

              <div className="flex items-end xl:col-span-6">
                <button type="submit" className="btn-brand w-full rounded-2xl px-5 py-3 text-sm font-medium md:w-auto md:min-w-[200px]">
                  Search listings
                </button>
              </div>
            </form>
          </div>
        </div>
      </SurfaceCard>


      <div className="mt-14 flex items-end justify-between gap-4">
        <div>
          <div className="text-brand text-xs font-semibold uppercase tracking-[0.18em]">Featured now</div>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">Latest room and bedspace listings across the UAE</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Browse recently added listings and move from search to source faster with clear listing details and direct contact paths.</p>
        </div>
        <Link href="/browse" className="text-brand hover:text-brand text-sm font-medium">
          View all listings
        </Link>
      </div>
      <div className="marquee-group mt-6 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(248,250,252,0.9)_100%)] px-2 pt-3 pb-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:px-3 sm:pt-4 sm:pb-5 lg:px-4">
        <div className="marquee-track flex w-max gap-6 py-2">
          {marqueeListings.map((listing, index) => (
            <div key={`${listing.id}-${index}`} className="marquee-card w-[280px] max-w-[320px] flex-none transition duration-300 hover:-translate-y-1">
              <ListingCard listing={listing} compact />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6">
        <div>
          <div className="text-brand text-sm font-semibold uppercase tracking-[0.18em]">Featured now</div>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Explore room and bedspace listings by emirate</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Browse room and bedspace listings by emirate to compare rental options across Dubai, Sharjah, Abu Dhabi, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <Link href="/browse?city=Dubai" className="font-medium text-slate-900 hover:text-brand">Dubai room and bedspace listings</Link>
          <Link href="/browse?city=Sharjah" className="font-medium text-slate-900 hover:text-brand">Sharjah room and bedspace listings</Link>
          <Link href="/browse?city=Abu%20Dhabi" className="font-medium text-slate-900 hover:text-brand">Abu Dhabi room and bedspace listings</Link>
          <Link href="/browse?city=Ajman" className="font-medium text-slate-900 hover:text-brand">Ajman room and bedspace listings</Link>
          <Link href="/browse?city=Fujairah" className="font-medium text-slate-900 hover:text-brand">Fujairah room and bedspace listings</Link>
          <Link href="/browse?city=Ras%20Al%20Khaimah" className="font-medium text-slate-900 hover:text-brand">Ras Al Khaimah room and bedspace listings</Link>
          <Link href="/browse?city=Umm%20Al%20Quwain" className="font-medium text-slate-900 hover:text-brand">Umm Al Quwain room and bedspace listings</Link>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-[2.2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_20%),linear-gradient(135deg,_#0f172a_0%,_#111827_45%,_#1e293b_100%)] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">UAE work tools</div>
            <h2 className="mt-3 text-xl font-semibold sm:text-2xl">Use UAE work tools for gratuity, leave salary, and notice period calculations</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
              Calculate UAE gratuity, leave salary, and notice period pay with practical work tools built for residents, employees, and job movers across the UAE.
            </p>
          </div>
          <Link href="/work-tools" className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100">
            Open work tools
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link href="/gratuity-calculator" className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/15">Gratuity calculator</Link>
          <Link href="/leave-salary-calculator" className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/15">Leave salary calculator</Link>
          <Link href="/notice-period-pay-calculator" className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/15">Notice period calculator</Link>
        </div>
      </div>
    </main>
  );
}
