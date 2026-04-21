import type { Metadata } from 'next';
import ListingCard from '@/components/ListingCard';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';
import { getApprovedListings, getListingCities } from '@/lib/listingQueries';
import type { AppListing } from '@/lib/listingQueries';

export const metadata: Metadata = {
  title: 'Browse Rooms and Bedspaces for Rent in Dubai, Sharjah, Abu Dhabi and the UAE',
  description:
    'Browse room and bedspace listings across Dubai, Sharjah, Abu Dhabi, Ajman, and more. Filter by area, type, and price, then contact listers directly.',
};

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{
    city?: string;
    type?: 'room' | 'bedspace';
    minPrice?: string;
    maxPrice?: string;
    q?: string;
    sort?: 'newest' | 'price-low' | 'price-high';
  }>;
}) {
  const params = await searchParams;
  const city = params.city?.trim() || undefined;
  const type = params.type === 'room' || params.type === 'bedspace' ? params.type : undefined;
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;
  const query = params.q?.trim() || undefined;
  const sort = params.sort === 'price-low' || params.sort === 'price-high' || params.sort === 'newest'
    ? params.sort
    : 'newest';

  const listings = await getApprovedListings({
    city,
    type,
    minPrice: Number.isFinite(minPrice) ? minPrice : undefined,
    maxPrice: Number.isFinite(maxPrice) ? maxPrice : undefined,
    query,
    sort,
  });
  const cities = await getListingCities();
  const roomCount = listings.filter((listing: AppListing) => listing.type === 'room').length;
  const bedspaceCount = listings.filter((listing: AppListing) => listing.type === 'bedspace').length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-indigo-50 px-6 py-10 shadow-sm ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Browse Listings"
          title="Browse rooms and bedspaces for rent across the UAE"
          description="Search room rentals and bedspace listings by emirate, area, type, and budget. Compare details quickly, then contact the lister directly for photos, exact location, and viewing details."
        />
      </section>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <SurfaceCard className="border border-slate-200/80 shadow-sm">
          <div className="text-sm text-slate-500">Matching rooms</div>
          <div className="mt-1 text-3xl font-semibold text-slate-900">{roomCount}</div>
        </SurfaceCard>
        <SurfaceCard className="border border-slate-200/80 shadow-sm">
          <div className="text-sm text-slate-500">Matching bedspaces</div>
          <div className="mt-1 text-3xl font-semibold text-slate-900">{bedspaceCount}</div>
        </SurfaceCard>
        <SurfaceCard className="border border-slate-200/80 shadow-sm">
          <div className="text-sm text-slate-500">Results found</div>
          <div className="mt-1 text-3xl font-semibold text-slate-900">{listings.length}</div>
        </SurfaceCard>
      </div>

      <SurfaceCard className="mt-8 border border-slate-200/80 shadow-sm">
        <div className="mb-5 max-w-3xl space-y-2 text-sm leading-6 text-slate-600">
          <p>
            Explore rental listings across Dubai, Sharjah, Abu Dhabi, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain. Use the filters below to narrow by area, listing type, and monthly budget.
          </p>
          <p className="font-semibold text-amber-700">
            Rates mentioned on listings should be confirmed directly with the lister.
          </p>
        </div>
        <form className="grid gap-4 md:grid-cols-2 xl:grid-cols-6" action="/browse" method="get">
          <label className="block xl:col-span-2">
            <span className="text-sm font-medium text-slate-900">Search area or keyword</span>
            <input name="q" defaultValue={query || ''} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Deira, Al Nahda, furnished, near metro..." />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-900">Emirate</span>
            <select name="city" defaultValue={city || ''} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
              <option value="">All emirates</option>
              {cities.map((item: string) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-900">Type</span>
            <select name="type" defaultValue={type || ''} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
              <option value="">Room + bedspace</option>
              <option value="room">Room</option>
              <option value="bedspace">Bedspace</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-900">Min price</span>
            <input name="minPrice" type="number" min="0" defaultValue={params.minPrice || ''} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="0" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-900">Max price</span>
            <input name="maxPrice" type="number" min="0" defaultValue={params.maxPrice || ''} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="5000" />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-900">Sort</span>
            <select name="sort" defaultValue={sort} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
              <option value="newest">Newest</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>

          <div className="flex items-end gap-3 xl:col-span-1">
            <button type="submit" className="btn-brand w-full rounded-2xl px-4 py-3 text-sm font-medium">
              Apply
            </button>
          </div>
        </form>
      </SurfaceCard>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {listings.length > 0 ? (
          listings.map((listing: AppListing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <SurfaceCard className="lg:col-span-2 border border-dashed border-slate-300 bg-slate-50 text-center shadow-none">
            <div className="text-lg font-semibold text-slate-900">No listings match these filters</div>
            <p className="mt-2 text-sm text-slate-600">Try widening the emirate, keyword, listing type, or price range to discover more rooms and bedspaces.</p>
          </SurfaceCard>
        )}
      </div>
    </main>
  );
}
