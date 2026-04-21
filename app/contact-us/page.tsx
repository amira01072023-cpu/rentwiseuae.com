import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact information for RentWise UAE.',
};

export default function ContactUsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Support</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Contact Us</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">For support, listing review issues, legal requests, accessibility concerns, or content reports, please contact the RentWise UAE team through the support channel used for this hobby project.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">What to Include</h2>
          <p className="mt-3">Please include the relevant page, listing URL, submission details, and a clear description of your request or issue.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Scope</h2>
          <p className="mt-3">This route may be used for general support, moderation concerns, privacy requests, data-rights matters, and reporting issues connected to site content.</p>
        </section>
      </div>
    </main>
  );
}
