import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility Statement for RentWise UAE.',
};

export default function AccessibilityStatementPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Accessibility Statement</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">RentWise UAE aims to keep the website clear, usable, and reasonably accessible across common devices, browsers, and screen sizes.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Commitment</h2>
          <p className="mt-3">We aim to improve readability, structure, navigation clarity, and basic usability across listing, browse, support, and legal pages.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Ongoing Improvements</h2>
          <p className="mt-3">Accessibility work may include improvements to content hierarchy, colour contrast, form clarity, keyboard usability, and overall consistency.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. Reporting Issues</h2>
          <p className="mt-3">If you encounter an accessibility issue, please identify the page, describe the issue clearly, and include any relevant device or browser detail if possible.</p>
        </section>
      </div>
    </main>
  );
}
