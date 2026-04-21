import Link from 'next/link';
import { getLiveUaeGoldRates } from '@/lib/goldRates';

const links = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse' },
  { href: '/post-listing', label: 'Post Listing' },
  { href: '/work-tools', label: 'Work Tools' },
];

export default async function SiteHeader() {
  const goldRates = await getLiveUaeGoldRates();

  const goldTicker = goldRates
    ? `Latest gold price in UAE · 24K: AED ${goldRates.perGram24k}/g · 22K: AED ${goldRates.perGram22k}/g · 21K: AED ${goldRates.perGram21k}/g · 18K: AED ${goldRates.perGram18k}/g · Updated ${goldRates.updatedAtLabel}`
    : 'Latest gold price in UAE · Live rates temporarily unavailable';

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#efeff2]/95 backdrop-blur">
      <div className="border-b border-slate-200/80 bg-white/70">
        <div className="mx-auto max-w-6xl overflow-hidden px-4 py-2 sm:px-6 lg:px-8">
          <div className="marquee-group overflow-hidden">
            <div className="marquee-track flex w-max gap-10 py-1 text-xs font-medium text-slate-600">
              <span>
                <strong className="font-semibold text-slate-900">Latest petrol price in UAE</strong> — April 2026 · <strong className="font-semibold text-rose-600">Super 98:</strong> <strong className="font-semibold text-rose-700">AED 3.39/L</strong> · <strong className="font-semibold text-blue-600">Special 95:</strong> <strong className="font-semibold text-blue-700">AED 3.28/L</strong> · <strong className="font-semibold text-emerald-600">E-Plus 91:</strong> <strong className="font-semibold text-emerald-700">AED 3.20/L</strong> · <strong className="font-semibold text-amber-600">Diesel:</strong> <strong className="font-semibold text-amber-700">AED 4.69/L</strong> · {goldRates ? (
                  <>
                    <strong className="font-semibold text-slate-900">Latest gold price in UAE</strong> · <strong className="font-semibold text-yellow-600">24K:</strong> <strong className="font-semibold text-yellow-700">AED {goldRates.perGram24k}/g</strong> · <strong className="font-semibold text-orange-600">22K:</strong> <strong className="font-semibold text-orange-700">AED {goldRates.perGram22k}/g</strong> · <strong className="font-semibold text-pink-600">21K:</strong> <strong className="font-semibold text-pink-700">AED {goldRates.perGram21k}/g</strong> · <strong className="font-semibold text-violet-600">18K:</strong> <strong className="font-semibold text-violet-700">AED {goldRates.perGram18k}/g</strong> · <strong className="font-semibold text-slate-500">Updated {goldRates.updatedAtLabel}</strong>
                  </>
                ) : (
                  <>
                    <strong className="font-semibold text-slate-900">Latest gold price in UAE</strong> · <strong className="font-semibold text-slate-500">Live rates temporarily unavailable</strong>
                  </>
                )}
              </span>
              <span>
                <strong className="font-semibold text-slate-900">Latest petrol price in UAE</strong> — April 2026 · <strong className="font-semibold text-rose-600">Super 98:</strong> <strong className="font-semibold text-rose-700">AED 3.39/L</strong> · <strong className="font-semibold text-blue-600">Special 95:</strong> <strong className="font-semibold text-blue-700">AED 3.28/L</strong> · <strong className="font-semibold text-emerald-600">E-Plus 91:</strong> <strong className="font-semibold text-emerald-700">AED 3.20/L</strong> · <strong className="font-semibold text-amber-600">Diesel:</strong> <strong className="font-semibold text-amber-700">AED 4.69/L</strong> · {goldRates ? (
                  <>
                    <strong className="font-semibold text-slate-900">Latest gold price in UAE</strong> · <strong className="font-semibold text-yellow-600">24K:</strong> <strong className="font-semibold text-yellow-700">AED {goldRates.perGram24k}/g</strong> · <strong className="font-semibold text-orange-600">22K:</strong> <strong className="font-semibold text-orange-700">AED {goldRates.perGram22k}/g</strong> · <strong className="font-semibold text-pink-600">21K:</strong> <strong className="font-semibold text-pink-700">AED {goldRates.perGram21k}/g</strong> · <strong className="font-semibold text-violet-600">18K:</strong> <strong className="font-semibold text-violet-700">AED {goldRates.perGram18k}/g</strong> · <strong className="font-semibold text-slate-500">Updated {goldRates.updatedAtLabel}</strong>
                  </>
                ) : (
                  <>
                    <strong className="font-semibold text-slate-900">Latest gold price in UAE</strong> · <strong className="font-semibold text-slate-500">Live rates temporarily unavailable</strong>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-1">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
            RentWise UAE
          </Link>
          <p className="text-sm text-slate-500">Rooms and bedspaces across the UAE.</p>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
