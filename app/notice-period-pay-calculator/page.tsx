import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import NoticePeriodPayCalculator from '@/components/NoticePeriodPayCalculator';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'UAE Notice Period Pay Calculator | RentWise UAE',
  description:
    'Estimate UAE notice period pay using monthly basic salary and notice period days as a planning guide.',
  alternates: {
    canonical: 'https://rentwiseuae.com/notice-period-pay-calculator',
  },
};

export default function NoticePeriodPayCalculatorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Tool"
        title="UAE notice period pay calculator"
        description="Estimate notice period pay in the UAE using monthly basic salary and notice days as a planning guide."
      />

      <div className="mt-6 max-w-4xl text-sm leading-7 text-slate-600">
        This UAE notice period pay calculator is built for quick planning. Enter monthly basic salary and notice period days to estimate the salary value for that period, then verify the final settlement with HR or your employer.
      </div>

      <div className="mt-10">
        <NoticePeriodPayCalculator />
      </div>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">What this notice pay tool is useful for</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
            <li>Quick planning before discussing notice settlement with HR</li>
            <li>Checking whether a settlement amount feels roughly right</li>
            <li>Understanding how monthly basic salary changes the estimate</li>
          </ul>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Important note</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This page is meant for guidance only. Final notice period treatment can depend on company policy, contract terms, payroll methods, applicable labor rules, and settlement arrangements.
          </p>
        </SurfaceCard>
      </section>
    </main>
  );
}
