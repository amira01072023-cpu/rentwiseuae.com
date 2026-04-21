import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SurfaceCard from '@/components/SurfaceCard';
import { getApprovedListingBySlug } from '@/lib/listingQueries';

export const dynamic = 'force-dynamic';

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-AE').format(value);
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v7h3.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M20 11.9c0 4.4-3.6 8-8 8-1.4 0-2.8-.4-4-1.1L4 20l1.2-3.9C4.4 14.9 4 13.4 4 11.9c0-4.4 3.6-8 8-8s8 3.6 8 8Zm-8-6.7c-3.7 0-6.7 3-6.7 6.7 0 1.4.4 2.7 1.2 3.8l-.7 2.2 2.3-.7c1 .7 2.3 1.1 3.6 1.1 3.7 0 6.7-3 6.7-6.7s-3-6.4-6.4-6.7Zm3.9 8.5c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.4.1-.1.2-.6.7-.7.9-.1.1-.2.1-.4 0-1-.5-1.8-1.1-2.5-2-.2-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3s-.4-1.1-.6-1.5c-.2-.4-.3-.3-.4-.3h-.3c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.3s.5 1.5.6 1.6c.1.1 1.1 1.8 2.8 2.5 1.7.7 1.7.5 2 .5.3 0 1-.4 1.1-.8.1-.4.1-.7.1-.8 0-.2-.1-.2-.3-.3Z" />
    </svg>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getApprovedListingBySlug(slug);

  if (!listing) {
    return {
      title: 'Listing not found',
    };
  }

  return {
    title: `${listing.title} | ${listing.city}`,
    description: `${listing.type} listing in ${listing.area}, ${listing.city} emirate. Contact the lister directly for photos, location pin, and viewing details.`,
  };
}

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = await getApprovedListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const fallbackArea = listing.area === 'Area not specified' ? '' : listing.area;
  const fallbackAvailability = listing.availability === 'Available now' ? '' : listing.availability;
  const fallbackContactName = listing.contactName === 'Lister' ? '' : listing.contactName;
  const fallbackContactValue = listing.contactValue === 'Facebook inbox' ? '' : listing.contactValue;
  const facebookHref = listing.facebookPostUrl?.trim() || null;
  const hasStructuredContact = Boolean(fallbackContactValue);
  const isWhatsApp = hasStructuredContact && listing.contactMethod === 'whatsapp';
  const contactHref = hasStructuredContact
    ? isWhatsApp
      ? `https://wa.me/${listing.contactValue.replace(/\D/g, '')}`
      : `tel:${listing.contactValue}`
    : null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-brand">
        <span>{listing.type}</span>
        <span className="text-slate-300">•</span>
        <span>{listing.city} emirate</span>
        {fallbackArea ? (
          <>
            <span className="text-slate-300">•</span>
            <span>{fallbackArea}</span>
          </>
        ) : null}
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{listing.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{listing.description}</p>

      <div className="mt-8">
        <SurfaceCard className="border border-slate-200/80 shadow-sm">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Listing details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Monthly rent</div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">AED {formatPrice(listing.priceMonthly)}</div>
                </div>
                {listing.deposit ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Deposit</div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">AED {formatPrice(listing.deposit)}</div>
                  </div>
                ) : null}
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Bathroom</div>
                  <div className="mt-1 text-sm font-medium text-slate-900">{listing.bathroom}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Furnishing</div>
                  <div className="mt-1 text-sm font-medium text-slate-900">{listing.furnished ? 'Furnished' : 'Not specified'}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Bills</div>
                  <div className="mt-1 text-sm font-medium text-slate-900">{listing.billsIncluded ? 'Included' : 'Not specified'}</div>
                </div>
                {fallbackAvailability ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Availability</div>
                    <div className="mt-1 text-sm font-medium text-slate-900">{fallbackAvailability}</div>
                  </div>
                ) : null}
                <div className="rounded-2xl bg-slate-50 px-4 py-4 sm:col-span-2 lg:col-span-3">
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Preferred tenant</div>
                  <div className="mt-1 text-sm font-medium text-slate-900">
                    {listing.genderPreference === 'any' ? 'Any' : listing.genderPreference}
                    {listing.nationalityPreference ? ` • ${listing.nationalityPreference}` : ''}
                  </div>
                </div>
              </div>

              {listing.tagsList.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
                  {listing.tagsList.map((tag: string) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">{tag}</span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
                Some details may be limited if the original source did not provide full listing information.
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-semibold text-slate-900">Contact lister</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This site does not host listing photos. Ask the lister directly for photos, exact location, sharing setup, and viewing details.
              </p>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                {fallbackContactName ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Posted by</div>
                    <div className="mt-1 font-medium text-slate-900">{fallbackContactName}</div>
                  </div>
                ) : null}
                {fallbackContactValue ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.12em] text-slate-500">Contact</div>
                    <div className="mt-1 font-medium text-slate-900">{fallbackContactValue}</div>
                  </div>
                ) : null}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {facebookHref ? (
                  <a
                    href={facebookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white hover:bg-blue-500"
                    aria-label="Open Facebook source"
                    title="Open Facebook source"
                  >
                    <FacebookIcon />
                  </a>
                ) : null}
                {contactHref ? (
                  isWhatsApp ? (
                    <a
                      href={contactHref}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500"
                      aria-label="Contact on WhatsApp"
                      title="Contact on WhatsApp"
                    >
                      <WhatsAppIcon />
                    </a>
                  ) : (
                    <a href={contactHref} className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-500">
                      Call lister
                    </a>
                  )
                ) : null}
                <Link href="/browse" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50">
                  Back to listings
                </Link>
              </div>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </main>
  );
}
