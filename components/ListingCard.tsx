import Link from 'next/link';
import type { AppListing } from '@/lib/listingQueries';
import SurfaceCard from '@/components/SurfaceCard';

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-AE').format(value);
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v7h3.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M20 11.9c0 4.4-3.6 8-8 8-1.4 0-2.8-.4-4-1.1L4 20l1.2-3.9C4.4 14.9 4 13.4 4 11.9c0-4.4 3.6-8 8-8s8 3.6 8 8Zm-8-6.7c-3.7 0-6.7 3-6.7 6.7 0 1.4.4 2.7 1.2 3.8l-.7 2.2 2.3-.7c1 .7 2.3 1.1 3.6 1.1 3.7 0 6.7-3 6.7-6.7s-3-6.4-6.4-6.7Zm3.9 8.5c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.4.1-.1.2-.6.7-.7.9-.1.1-.2.1-.4 0-1-.5-1.8-1.1-2.5-2-.2-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3s-.4-1.1-.6-1.5c-.2-.4-.3-.3-.4-.3h-.3c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.3s.5 1.5.6 1.6c.1.1 1.1 1.8 2.8 2.5 1.7.7 1.7.5 2 .5.3 0 1-.4 1.1-.8.1-.4.1-.7.1-.8 0-.2-.1-.2-.3-.3Z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ListingCard({ listing, compact = false }: { listing: AppListing; compact?: boolean }) {
  const fallbackArea = listing.area === 'Area not specified' ? '' : listing.area;
  const fallbackAvailability = listing.availability === 'Available now' ? '' : listing.availability;
  const hasQuotedPrice = listing.priceMonthly > 0;

  return (
    <SurfaceCard className={`h-full border border-slate-200/80 transition-shadow hover:shadow-md ${compact ? 'p-4' : 'p-5'}`}>
      <div className={`flex h-full flex-col justify-between ${compact ? 'gap-4' : 'gap-5'}`}>
        <div>
          <div className="text-brand flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em]">
            <span>{listing.type}</span>
            <span className="text-slate-300">•</span>
            <span>{listing.city}</span>
            {fallbackArea ? (
              <>
                <span className="text-slate-300">•</span>
                <span>{fallbackArea}</span>
              </>
            ) : null}
          </div>

          <div className={`flex items-start justify-between gap-4 ${compact ? 'mt-3' : 'mt-4'}`}>
            <div>
              <h3 className={`${compact ? 'text-lg leading-6' : 'text-xl leading-7'} font-semibold text-slate-900`}>
                <Link href={`/listings/${listing.slug}`} className="hover:text-brand">
                  {listing.title}
                </Link>
              </h3>
              <p className={`text-sm text-slate-600 ${compact ? 'mt-1.5 line-clamp-3 leading-5' : 'mt-2 leading-6'}`}>{listing.summary}</p>
            </div>
            <div className={`shrink-0 rounded-2xl bg-brand/5 ${compact ? 'max-w-[140px] px-3 py-2' : 'max-w-[180px] px-4 py-3'} text-right`}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Monthly rent</div>
              {hasQuotedPrice ? (
                <>
                  <div className={`mt-1 font-bold text-slate-900 ${compact ? 'text-lg' : 'text-xl'}`}>AED {formatPrice(listing.priceMonthly)}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-amber-700">Confirm with lister</div>
                </>
              ) : (
                <>
                  <div className="mt-1 text-sm font-semibold leading-5 text-slate-900 break-words">Rate not mentioned</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.05em] leading-4 text-amber-700">Ask the lister directly</div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={compact ? 'space-y-3' : 'space-y-4'}>
          <div className="flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1.5">{fallbackAvailability || 'Check source'}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5">{listing.furnished ? 'Furnished' : 'Furnishing not specified'}</span>
            {!compact ? <span className="rounded-full bg-slate-100 px-3 py-1.5">{listing.bathroom} bathroom</span> : null}
            <span className="rounded-full bg-slate-100 px-3 py-1.5">{listing.billsIncluded ? 'Bills included' : 'Bills separate'}</span>
          </div>

          <div className={`flex flex-wrap gap-2.5 ${compact ? '' : 'pt-1'}`}>
            <Link
              href={`/listings/${listing.slug}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowRightIcon />
              <span>View details</span>
            </Link>
            {listing.facebookPostUrl ? (
              <a
                href={listing.facebookPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            ) : (
              <a
                href={listing.contactMethod === 'whatsapp' ? `https://wa.me/${listing.contactValue.replace(/\D/g, '')}` : `tel:${listing.contactValue}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500"
              >
                <WhatsAppIcon />
                <span>{listing.contactMethod === 'whatsapp' ? 'WhatsApp' : 'Call lister'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}
