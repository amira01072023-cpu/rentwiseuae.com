import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'Basic Salary vs Total Salary in the UAE | RentWise UAE',
  description:
    'Understand the difference between basic salary and total salary in the UAE, and why it matters for gratuity calculations.',
  alternates: {
    canonical: 'https://rentwiseuae.com/guides/basic-salary-vs-total-salary-uae',
  },
};

export default function BasicSalaryVsTotalSalaryUaePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Guide"
        title="Basic salary vs total salary in the UAE"
        description="Why this distinction matters, especially when you are estimating gratuity and other employment-related amounts."
      />

      <div className="mt-8 grid gap-6">
        <SurfaceCard>
          <p className="text-sm leading-7 text-slate-700">
            Many employees in the UAE know their total package but are less certain about their monthly basic salary. That becomes important when using gratuity calculators, because a planning estimate often depends much more on the basic salary than on the full package.
          </p>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Why people get confused</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Total salary can include housing, transport, fixed allowances, and other package components. Basic salary is usually the narrower figure that forms the base for certain employment-related calculations.
          </p>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Why it matters for gratuity</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            If you use the wrong salary number, your gratuity estimate can be materially off. That is why the RentWise UAE gratuity calculator asks for the monthly basic salary rather than the full package.
          </p>
          <div className="mt-6">
            <Link href="/gratuity-calculator" className="btn-brand rounded-xl px-5 py-3 text-sm font-medium text-white">
              Open the UAE gratuity calculator
            </Link>
          </div>
        </SurfaceCard>
      </div>
    </main>
  );
}
