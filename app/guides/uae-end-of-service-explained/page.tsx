import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'UAE End of Service Explained | RentWise UAE',
  description:
    'A practical guide to understanding UAE end-of-service pay, gratuity expectations, and why final employer calculations can differ from estimates.',
  alternates: {
    canonical: 'https://rentwiseuae.com/guides/uae-end-of-service-explained',
  },
};

export default function UaeEndOfServiceExplainedPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Guide"
        title="UAE end of service explained"
        description="A practical overview of end-of-service expectations, gratuity planning, and why the final number should always be verified."
      />

      <div className="mt-8 grid gap-6">
        <SurfaceCard>
          <p className="text-sm leading-7 text-slate-700">
            End-of-service discussions in the UAE often create confusion because employees may hear different things from colleagues, HR teams, and online calculators. A quick estimate can help with planning, but it is not always the final answer.
          </p>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">What can affect the final number?</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
            <li>Your employment contract and classification</li>
            <li>Basic salary versus package confusion</li>
            <li>Unpaid leave or service interruptions</li>
            <li>Company HR calculations</li>
            <li>Applicable labor rules or free zone rules</li>
          </ul>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Use a calculator first, verify second</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            A good calculator is useful for planning, comparing scenarios, or checking whether an HR figure is in the right range. But the final amount should still be verified with official and employer-specific context.
          </p>
          <div className="mt-6">
            <Link href="/gratuity-calculator" className="btn-brand rounded-xl px-5 py-3 text-sm font-medium text-white">
              Use the gratuity calculator
            </Link>
          </div>
        </SurfaceCard>
      </div>
    </main>
  );
}
