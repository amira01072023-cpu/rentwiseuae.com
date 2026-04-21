import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EU Compliance Notice',
  description: 'EU Compliance Notice for RentWise UAE.',
};

export default function EuComplianceNoticePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">EU Compliance Notice</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">This notice provides high-level information about content handling, user support, transparency, and legal-contact routes relevant to users who may access the service from the European Union.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Service Description</h2>
          <p className="mt-3">RentWise UAE is a UAE-focused room and bedspace listing platform. It allows posters to submit listings and allows renters to browse approved listings and contact posters directly.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Listings and Payments</h2>
          <div className="mt-3 space-y-3">
            <p>Listings are free to submit.</p>
            <p>We do not accept payment for standard listings and do not operate a paid listing checkout flow through the site.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. Content Review and Moderation</h2>
          <p className="mt-3">Listings may be reviewed before publication and may be rejected, unpublished, or removed where necessary for policy, safety, legal, quality, or anti-fraud reasons.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">4. User Rights and Reporting</h2>
          <div className="mt-3 space-y-3">
            <p>Users may use the legal and support routes linked in the footer to raise privacy requests, accessibility issues, illegal content reports, or other platform concerns.</p>
            <p>Reports should include enough information for review, including the relevant page or listing URL where possible.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">5. Transparency</h2>
          <p className="mt-3">We aim to keep key platform information clear, including how listings work, the absence of listing payment processing, and the routes available for legal, support, and reporting matters.</p>
        </section>
      </div>
    </main>
  );
}
