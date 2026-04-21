import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';
import { submitListing } from '@/lib/listingForm';

export const metadata: Metadata = {
  title: 'Post a free room or bedspace listing',
  description:
    'Post a simple free room or bedspace listing for Dubai, Abu Dhabi, or Sharjah. Share the key details and let renters contact you directly for photos and viewings.',
};

export default async function PostListingPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const params = await searchParams;
  const submitted = params.submitted === '1';

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-6 py-10 ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Post Free Listing"
          title="Post a room or bedspace listing in a few simple steps"
          description="This listing form focuses on the essential rental details only. Interested renters can contact you directly for photos, location, and viewing information."
        />
      </section>

      {submitted ? (
        <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
          Your listing was submitted successfully and is now waiting for review.
        </div>
      ) : null}

      <div className="mt-8">
        <SurfaceCard>
          <h2 className="text-xl font-semibold text-slate-900">Submit listing</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Keep it simple and practical. Listings submitted here will be stored in the local database with pending status until reviewed.
          </p>

          <form action={submitListing} className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-900">Listing type</span>
              <select name="type" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0">
                <option value="room">Room</option>
                <option value="bedspace">Bedspace</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Emirate</span>
              <select name="city" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0">
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
              <span className="text-sm font-medium text-slate-900">Area</span>
              <input name="area" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Al Nahda, Deira, Muwaileh..." />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Monthly rent (AED)</span>
              <input name="priceMonthly" type="number" min="1" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="1200" />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Deposit</span>
              <input name="deposit" type="number" min="0" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Optional" />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Availability</span>
              <input name="availability" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Available now / from 1 May" />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-900">Title</span>
              <input name="title" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Furnished room in Al Nahda near metro" />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-900">Short summary</span>
              <input name="summary" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="One-line practical summary for browse cards" />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-900">Description</span>
              <textarea name="description" required rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Describe the setup, who it suits, and what renters should ask you for." />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Bathroom</span>
              <select name="bathroom" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
                <option value="shared">Shared</option>
                <option value="private">Private</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Preferred tenant</span>
              <select name="genderPreference" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
                <option value="any">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Contact method</span>
              <select name="contactMethod" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
                <option value="whatsapp">WhatsApp</option>
                <option value="phone">Phone</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Contact number</span>
              <input name="contactValue" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="+9715..." />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Contact name</span>
              <input name="contactName" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Lister name" />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-900">Facebook post link</span>
              <input name="facebookPostUrl" type="url" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="https://www.facebook.com/..." />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-900">Nationality preference</span>
              <input name="nationalityPreference" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Optional" />
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <input type="checkbox" name="furnished" value="yes" className="h-4 w-4" />
              Furnished
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <input type="checkbox" name="billsIncluded" value="yes" className="h-4 w-4" />
              Bills included
            </label>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-brand rounded-2xl px-5 py-3 text-sm font-medium">
                Submit for review
              </button>
            </div>
          </form>
        </SurfaceCard>
      </div>
    </main>
  );
}
