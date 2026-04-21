import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for RentWise UAE.',
};

export default function TermsOfUsePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Terms of Use</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">These Terms of Use govern access to and use of RentWise UAE, including listing submission, browsing, moderation, and related site functionality.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Platform Purpose</h2>
          <p className="mt-3">RentWise UAE is a listing platform for rooms and bedspaces. The site is intended to help users discover listings and contact posters directly.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. User Responsibility</h2>
          <div className="mt-3 space-y-3">
            <p>Users are responsible for reviewing listings carefully and independently confirming suitability, accuracy, availability, poster identity, and property details before making decisions.</p>
            <p>RentWise UAE does not guarantee the accuracy, legality, quality, or suitability of any listing or poster communication.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. Listing Rules</h2>
          <div className="mt-3 space-y-3">
            <p>Users must not submit false, misleading, duplicate, abusive, unlawful, or infringing listings.</p>
            <p>Listings may be reviewed, approved, rejected, edited for clarity, unpublished, or removed at our discretion.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">4. Free Listings</h2>
          <div className="mt-3 space-y-3">
            <p>Listings are free to submit on the site.</p>
            <p>We do not accept payment for standard listings and do not provide a paid listing checkout flow through the site.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">5. Moderation and Enforcement</h2>
          <p className="mt-3">We may restrict, suspend, reject, or remove content or access where necessary for platform integrity, legal compliance, fraud prevention, safety, or abuse handling.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">6. Limitation of Responsibility</h2>
          <p className="mt-3">Use of the site is at the user’s own risk. RentWise UAE provides listings and related information on an informational basis and does not act as landlord, broker, legal advisor, or payment processor for listings.</p>
        </section>
      </div>
    </main>
  );
}
