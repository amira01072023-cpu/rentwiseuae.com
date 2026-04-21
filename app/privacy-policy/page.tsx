import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for RentWise UAE.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">This Privacy Policy explains how RentWise UAE handles personal data submitted through the site, including listing information, contact details, and limited technical data.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Scope</h2>
          <p className="mt-3">This policy applies to information submitted through RentWise UAE in connection with room and bedspace listings, contact requests, moderation, legal requests, and related site operation.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Information We May Collect</h2>
          <div className="mt-3 space-y-3">
            <p>We may collect listing details, poster contact information, submission content, and limited technical data needed to operate and secure the service.</p>
            <p>This may include names, phone or WhatsApp numbers, listing descriptions, area and price information, moderation notes, and standard technical logs.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. How We Use Information</h2>
          <div className="mt-3 space-y-3">
            <p>Information may be used to review listings, publish approved listings, respond to reports, handle support or legal requests, maintain site security, and improve service quality.</p>
            <p>We may also use submitted information to identify duplicate, misleading, abusive, or fraudulent content.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">4. Listings and Payments</h2>
          <div className="mt-3 space-y-3">
            <p>Listings on RentWise UAE are free to submit.</p>
            <p>We do not accept payment for standard listings through the site and do not operate a listing checkout or paid listing payment flow.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">5. Data Sharing</h2>
          <p className="mt-3">Approved listing information may be displayed publicly on the site. We may also disclose information where reasonably required for legal compliance, platform integrity, fraud prevention, abuse handling, or protection of users and the service.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">6. Data Retention</h2>
          <p className="mt-3">We may retain listing submissions, moderation records, and related operational information for as long as reasonably necessary for service operation, dispute handling, legal compliance, and abuse prevention.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">7. Data Rights</h2>
          <p className="mt-3">Where applicable, users may request access, correction, or deletion of personal data, subject to verification, legal requirements, and legitimate operational needs.</p>
        </section>
      </div>
    </main>
  );
}
