import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for RentWise UAE.',
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Disclaimer</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">RentWise UAE provides listing and informational content on a general basis only. Users should independently verify any listing, suitability, legal position, financial implications, and poster credibility before acting.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. No Guarantee</h2>
          <p className="mt-3">We do not guarantee the completeness, accuracy, legality, suitability, or continued availability of listings or related information published on the site.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Independent Verification</h2>
          <p className="mt-3">Users are responsible for checking price, location, terms, availability, sharing arrangement, building access, poster identity, and any other material detail before making decisions.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. No Professional Advice</h2>
          <p className="mt-3">Nothing on the site should be treated as legal, financial, tenancy, immigration, or professional advice.</p>
        </section>
      </div>
    </main>
  );
}
