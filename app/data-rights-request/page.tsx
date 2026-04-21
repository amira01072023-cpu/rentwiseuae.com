import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Rights Request',
  description: 'Data Rights Request information for RentWise UAE.',
};

export default function DataRightsRequestPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Data Rights Request</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">Users may request access, correction, or deletion of personal data submitted through RentWise UAE, subject to verification, legal obligations, and legitimate platform requirements.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Available Requests</h2>
          <p className="mt-3">Where applicable, requests may include access to personal data, correction of inaccurate information, or deletion of submitted data that is no longer required.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Verification</h2>
          <p className="mt-3">We may request enough information to verify identity or confirm authority before acting on a request.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. Submission Details</h2>
          <p className="mt-3">To help process a request, include the relevant listing URL, submission details, and sufficient identifying information to locate the record safely.</p>
        </section>
      </div>
    </main>
  );
}
