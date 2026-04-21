import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'How UAE Gratuity Is Calculated | RentWise UAE',
  description:
    'Learn how UAE gratuity is calculated, what salary figure matters, and what can affect your end-of-service estimate.',
  alternates: {
    canonical: 'https://rentwiseuae.com/guides/how-uae-gratuity-is-calculated',
  },
};

export default function HowUaeGratuityIsCalculatedPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Guide"
        title="How UAE gratuity is calculated"
        description="A practical guide to understanding UAE end-of-service gratuity, the role of basic salary, and why your final amount may differ from a simple estimate."
      />

      <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
        <SurfaceCard>
          <p>
            UAE gratuity is often discussed as a simple formula, but in real life many employees are unsure what salary figure to use, how service length should be counted, and why their final HR calculation may not match a quick online estimate exactly.
          </p>
          <p className="mt-4">
            The simplest planning model starts with monthly basic salary, converts that into a daily wage basis, then applies a gratuity formula based on years of service. For planning purposes, many people estimate 21 days per year for the first five years and 30 days per year after that.
          </p>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">What salary should be used?</h2>
          <p className="mt-4">
            In many cases, the most important figure is the <strong>monthly basic salary</strong>, not the total package. Employees often confuse total salary with basic salary, but allowances and other package components do not always play the same role in gratuity calculations.
          </p>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Why your final amount may differ</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5">
            <li>Contract details and employment classification</li>
            <li>Free zone or employer-specific practices</li>
            <li>Unpaid leave or interrupted service periods</li>
            <li>Legal changes over time</li>
            <li>Internal HR calculation methods</li>
          </ul>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Use the calculator as a planning tool</h2>
          <p className="mt-4">
            If you want a fast estimate, the easiest next step is to use the RentWise UAE gratuity calculator with your first working day, last working day, and monthly basic salary.
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
