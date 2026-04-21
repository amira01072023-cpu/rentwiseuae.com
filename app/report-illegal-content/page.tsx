import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Report Illegal Content',
  description: 'Report illegal or abusive content on RentWise UAE.',
};

export default function ReportIllegalContentPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Report Illegal Content</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">If you believe a listing or other content on the site is illegal, fraudulent, abusive, deceptive, or otherwise unlawful, you may report it for review.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. What to Include</h2>
          <p className="mt-3">Please include the listing URL, title, and a clear explanation of the issue. If relevant, include supporting context that helps identify the concern quickly.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Review Process</h2>
          <p className="mt-3">Reported content may be reviewed, restricted, unpublished, or removed where appropriate. Additional information may be requested where needed.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. Good-Faith Reporting</h2>
          <p className="mt-3">Reports should be made in good faith and should not be used to harass, suppress, or unfairly target lawful users or listings.</p>
        </section>
      </div>
    </main>
  );
}
