import type { Metadata } from 'next';
import SurfaceCard from '@/components/SurfaceCard';

export const dynamic = 'force-dynamic';
import { getPendingListings } from '@/lib/listingQueries';
import { approveListing, rejectListing } from '@/lib/listingForm';
import type { AppListing } from '@/lib/listingQueries';

export const metadata: Metadata = {
  title: 'Admin listing moderation',
  description: 'Review pending room and bedspace listing submissions before they go live.',
};

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-AE').format(value);
}

export default async function AdminListingsPage() {
  const listings = await getPendingListings();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-sm font-medium uppercase tracking-[0.18em] text-brand">Admin</div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Pending listing moderation</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Review newly submitted room and bedspace listings before they become visible on the public site.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {listings.length === 0 ? (
          <SurfaceCard>
            <div className="text-lg font-semibold text-slate-900">No pending listings</div>
            <p className="mt-2 text-sm text-slate-600">Everything currently submitted has already been reviewed.</p>
          </SurfaceCard>
        ) : (
          listings.map((listing: AppListing) => (
            <SurfaceCard key={listing.id}>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-brand">
                    <span>{listing.type}</span>
                    <span className="text-slate-300">•</span>
                    <span>{listing.city} emirate</span>
                    <span className="text-slate-300">•</span>
                    <span>{listing.area}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">{listing.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{listing.description}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Monthly rent</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">AED {formatPrice(listing.priceMonthly)}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Contact</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">{listing.contactName} • {listing.contactValue}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Availability</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">{listing.availability}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 sm:col-span-2 lg:col-span-3">
                      <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Facebook post</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900 break-all">{listing.facebookPostUrl || 'Not provided'}</div>
                    </div>
                  </div>
                </div>

                <div className="flex min-w-[220px] flex-col gap-3">
                  <form action={approveListing}>
                    <input type="hidden" name="id" value={listing.id} />
                    <button type="submit" className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-500">
                      Approve listing
                    </button>
                  </form>
                  <form action={rejectListing}>
                    <input type="hidden" name="id" value={listing.id} />
                    <button type="submit" className="w-full rounded-2xl bg-rose-600 px-4 py-3 text-sm font-medium text-white hover:bg-rose-500">
                      Reject listing
                    </button>
                  </form>
                </div>
              </div>
            </SurfaceCard>
          ))
        )}
      </div>
    </main>
  );
}
