import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import GratuityCalculator from '@/components/GratuityCalculator';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator | RentWise UAE',
  description:
    'Use the RentWise UAE gratuity calculator to estimate UAE end-of-service gratuity using your first working day, last working day, and monthly basic salary.',
  keywords: [
    'UAE gratuity calculator',
    'Dubai gratuity calculator',
    'Abu Dhabi gratuity calculator',
    'end of service calculator UAE',
    'UAE end of service gratuity',
    'gratuity calculation UAE',
  ],
  alternates: {
    canonical: 'https://rentwiseuae.com/gratuity-calculator',
  },
  openGraph: {
    title: 'UAE Gratuity Calculator | RentWise UAE',
    description:
      'Estimate UAE end-of-service gratuity using your employment dates and monthly basic salary.',
    url: 'https://rentwiseuae.com/gratuity-calculator',
    siteName: 'RentWise UAE',
    type: 'website',
  },
};

export default function GratuityCalculatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What salary should I use in the UAE gratuity calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use your monthly basic salary, not your total salary package.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use this gratuity calculator for Dubai and Abu Dhabi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It is intended as a UAE gratuity calculator for planning purposes across Dubai, Abu Dhabi, and the wider UAE.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the gratuity result exact?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. It is a planning estimate and should be verified with your employer, HR department, or a qualified advisor.',
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Tool"
        title="UAE gratuity calculator"
        description="Estimate end-of-service gratuity in the UAE using your first working day, last working day, and monthly basic salary as a planning guide."
      />

      <div className="mt-6 max-w-4xl text-sm leading-7 text-slate-600">
        This UAE gratuity calculator is designed for people searching for a quick estimate of end-of-service gratuity in Dubai, Abu Dhabi, and the wider UAE. Enter your employment dates and monthly basic salary to get a practical planning estimate before checking the final amount with HR or a qualified professional.
      </div>

      <div className="mt-10">
        <GratuityCalculator />
      </div>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Learn more about UAE gratuity</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Read a practical guide on how UAE gratuity is calculated, what salary figure matters, and why your final HR number may differ.
            </p>
          </div>
          <div>
            <Link href="/guides/how-uae-gratuity-is-calculated" className="btn-brand rounded-xl px-5 py-3 text-sm font-medium text-white">
              Read the gratuity guide
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">How this UAE gratuity calculator works</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
            <p>
              This page estimates UAE gratuity by using your monthly basic salary and the time between your first working day and last working day. It then applies a simple gratuity model based on 21 days per year for the first five years and 30 days per year after that.
            </p>
            <p>
              The tool is meant to help you get a planning estimate quickly. It is useful if you are comparing job exits, checking a possible end-of-service amount, or trying to understand how gratuity might change with a different basic salary or service period.
            </p>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <h2 className="text-2xl font-semibold text-slate-900">Important notes before relying on the result</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-700">
            <li>The calculator uses monthly basic salary, not the full salary package.</li>
            <li>The result is a planning estimate, not legal or contractual advice.</li>
            <li>Actual UAE gratuity can vary based on labor rules, contract type, unpaid leave, free zone rules, and HR calculations.</li>
            <li>Always confirm the final amount with your employer, HR department, or a qualified advisor.</li>
          </ul>
        </SurfaceCard>
      </section>

      <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Related guides</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/guides/how-uae-gratuity-is-calculated" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">How UAE gratuity is calculated</Link>
          <Link href="/guides/basic-salary-vs-total-salary-uae" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Basic salary vs total salary in the UAE</Link>
          <Link href="/guides/uae-end-of-service-explained" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">UAE end of service explained</Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
        <div className="mt-6 grid gap-4">
          <SurfaceCard>
            <h3 className="text-xl font-semibold text-slate-900">What salary should I use in the UAE gratuity calculator?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Use your monthly basic salary, not your total salary package. Housing, transport, and other allowances are usually not the same as the basic salary used for gratuity calculations.
            </p>
          </SurfaceCard>

          <SurfaceCard>
            <h3 className="text-xl font-semibold text-slate-900">Can I use this gratuity calculator for Dubai and Abu Dhabi?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Yes. This page is intended as a UAE gratuity calculator, so it can be used as a planning tool for people working in Dubai, Abu Dhabi, and other parts of the UAE. The final result should still be verified against your actual employment situation.
            </p>
          </SurfaceCard>

          <SurfaceCard>
            <h3 className="text-xl font-semibold text-slate-900">Is this result exact?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              No. It is an estimate meant to help you plan. The final gratuity may differ depending on legal changes, company policy, employment type, contract details, and HR calculations.
            </p>
          </SurfaceCard>
        </div>
      </section>
    </main>
  );
}
