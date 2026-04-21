'use client';

import { useMemo, useState } from 'react';
import { calculateNoticePeriodPay } from '@/lib/calculators/noticePeriodPay';
import SurfaceCard from '@/components/SurfaceCard';
import HowToUseTool from '@/components/HowToUseTool';

function formatAed(value: number) {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 2,
  }).format(value);
}

export default function NoticePeriodPayCalculator() {
  const [basicSalaryMonthly, setBasicSalaryMonthly] = useState<number | ''>('');
  const [noticeDays, setNoticeDays] = useState<number | ''>('');
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: string[] = [];
    if (basicSalaryMonthly === '' || Number(basicSalaryMonthly) <= 0) {
      next.push('Please enter a valid monthly basic salary.');
    }
    if (noticeDays === '' || Number(noticeDays) <= 0) {
      next.push('Please enter a valid number of notice period days.');
    }
    return next;
  }, [basicSalaryMonthly, noticeDays]);

  const result = useMemo(() => {
    return calculateNoticePeriodPay({
      basicSalaryMonthly: typeof basicSalaryMonthly === 'number' ? basicSalaryMonthly : 0,
      noticeDays: typeof noticeDays === 'number' ? noticeDays : 0,
    });
  }, [basicSalaryMonthly, noticeDays]);

  const canShowResult = submitted && errors.length === 0;

  return (
    <div className="space-y-10">
      <HowToUseTool
        steps={[
          'Enter your monthly basic salary, not the full package.',
          'Enter the number of notice period days you want to estimate.',
          'Use the result as a planning estimate and verify the final treatment with your employer or HR team.',
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.55fr] lg:items-start">
        <SurfaceCard className="rounded-[2rem] border border-slate-200 px-8 py-10 shadow-none ring-0">
          <div className="grid gap-8 md:grid-cols-2">
            <label className="grid gap-3 text-sm text-slate-500">
              <span className="text-xl font-semibold text-slate-500 sm:text-2xl">Basic Salary (AED) *</span>
              <input
                className="border-0 border-b border-slate-400 bg-transparent px-0 py-3 text-lg text-slate-900 outline-none"
                type="number"
                value={basicSalaryMonthly}
                onChange={(e) => setBasicSalaryMonthly(e.target.value === '' ? '' : Number(e.target.value))}
              />
            </label>

            <label className="grid gap-3 text-sm text-slate-500">
              <span className="text-xl font-semibold text-slate-500 sm:text-2xl">Notice Period Days *</span>
              <input
                className="border-0 border-b border-slate-400 bg-transparent px-0 py-3 text-lg text-slate-900 outline-none"
                type="number"
                value={noticeDays}
                onChange={(e) => setNoticeDays(e.target.value === '' ? '' : Number(e.target.value))}
              />
            </label>
          </div>

          {submitted && errors.length > 0 ? (
            <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
              <div className="font-semibold">Please fix the following before calculating:</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </SurfaceCard>

        <div className="rounded-[2rem] border-l-[6px] border-blue-700 bg-gradient-to-b from-slate-50 to-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="text-lg font-semibold uppercase tracking-[0.14em] text-slate-500">Estimated notice period pay</div>
          <div className="mt-4 text-4xl font-bold text-blue-700 sm:text-5xl">
            {formatAed(canShowResult ? result.noticePeriodPayAmount : 0)}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            This is a planning estimate based on monthly basic salary and notice days. Verify the final treatment with HR or your employer.
          </p>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="rounded-xl bg-blue-700 px-10 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-600 hover:shadow-md"
          onClick={() => setSubmitted(true)}
        >
          Calculate notice pay
        </button>
      </div>

      {canShowResult ? (
        <div className="grid gap-4 md:grid-cols-2">
          <SurfaceCard className="shadow-none">
            <div className="text-sm text-slate-500">Daily basic rate</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{formatAed(result.dailyBasicRate)}</div>
          </SurfaceCard>
          <SurfaceCard className="shadow-none">
            <div className="text-sm text-slate-500">Estimated notice period pay</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{formatAed(result.noticePeriodPayAmount)}</div>
          </SurfaceCard>
        </div>
      ) : null}

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Disclaimer</h3>
        <p className="mt-5 max-w-6xl text-sm leading-7 text-slate-700">
          This notice period pay calculator is provided as a planning and guidance tool only. It is not legal advice and should not be treated as a final employer calculation. Actual outcomes may vary depending on company policy, contract terms, applicable labor rules, salary treatment, payroll practices, settlement terms, and HR calculations. Always verify the final amount with your employer or HR department.
        </p>
      </div>
    </div>
  );
}
