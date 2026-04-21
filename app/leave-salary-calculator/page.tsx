import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import LeaveSalaryCalculator from '@/components/LeaveSalaryCalculator';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'UAE Leave Salary Calculator | RentWise UAE',
  description:
    'Estimate UAE leave salary using monthly basic salary and leave days as a planning guide.',
  alternates: {
    canonical: 'https://rentwiseuae.com/leave-salary-calculator',
  },
};

export default function LeaveSalaryCalculatorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Tool"
        title="UAE leave salary calculator"
        description="Estimate leave salary in the UAE using monthly basic salary and leave days as a planning guide."
      />

      <div className="mt-6 max-w-4xl text-sm leading-7 text-slate-600">
        This UAE leave salary calculator is designed for quick planning. Enter your monthly basic salary and the number of leave days to estimate the salary value for that period, then confirm the final figure with HR or your employer.
      </div>

      <div className="mt-10">
        <LeaveSalaryCalculator />
      </div>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">What this leave salary tool is useful for</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
            <li>Quick planning before discussing leave salary with HR</li>
            <li>Checking whether a payroll number feels roughly right</li>
            <li>Understanding how monthly basic salary changes the estimate</li>
          </ul>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Important note</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This page is meant for guidance only. Final leave salary treatment can depend on company policy, payroll methods, applicable labor rules, and your employment contract.
          </p>
        </SurfaceCard>
      </section>
    </main>
  );
}
