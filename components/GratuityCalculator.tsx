'use client';

import { useMemo, useState } from 'react';
import { calculateUaeGratuity } from '@/lib/calculators/gratuity';
import SurfaceCard from '@/components/SurfaceCard';

function formatAed(value: number) {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 2,
  }).format(value);
}

export default function GratuityCalculator() {
  const [firstWorkingDay, setFirstWorkingDay] = useState('');
  const [lastWorkingDay, setLastWorkingDay] = useState('');
  const [basicSalaryMonthly, setBasicSalaryMonthly] = useState<number | ''>('');
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next: string[] = [];
    if (!firstWorkingDay) next.push('Please enter the first working day.');
    if (!lastWorkingDay) next.push('Please enter the last working day.');
    if (basicSalaryMonthly === '' || Number(basicSalaryMonthly) <= 0) {
      next.push('Please enter a valid monthly basic salary.');
    }
    if (firstWorkingDay && lastWorkingDay) {
      const start = new Date(firstWorkingDay);
      const end = new Date(lastWorkingDay);
      if (end <= start) next.push('Last working day must be after the first working day.');
    }
    return next;
  }, [firstWorkingDay, lastWorkingDay, basicSalaryMonthly]);

  const result = useMemo(() => {
    return calculateUaeGratuity({
      basicSalaryMonthly: typeof basicSalaryMonthly === 'number' ? basicSalaryMonthly : 0,
      firstWorkingDay,
      lastWorkingDay,
    });
  }, [basicSalaryMonthly, firstWorkingDay, lastWorkingDay]);

  const canShowResult = submitted && errors.length === 0;

  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Enter your employment details to calculate your gratuity
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Use your actual employment dates and monthly basic salary to generate a planning estimate for UAE end-of-service gratuity.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.5fr] lg:items-start">
        <SurfaceCard className="rounded-[2rem] border border-slate-200 px-8 py-10 shadow-none ring-0">
          <div className="grid gap-8 md:grid-cols-2">
            <label className="grid gap-3 text-sm text-slate-500">
              <span className="text-xl font-semibold text-slate-500 sm:text-2xl">First Working Day *</span>
              <input
                className="border-0 border-b border-slate-400 bg-transparent px-0 py-3 text-lg text-slate-900 outline-none"
                type="date"
                value={firstWorkingDay}
                onChange={(e) => setFirstWorkingDay(e.target.value)}
              />
            </label>

            <label className="grid gap-3 text-sm text-slate-500">
              <span className="text-xl font-semibold text-slate-500 sm:text-2xl">Last Working Day *</span>
              <input
                className="border-0 border-b border-slate-400 bg-transparent px-0 py-3 text-lg text-slate-900 outline-none"
                type="date"
                value={lastWorkingDay}
                onChange={(e) => setLastWorkingDay(e.target.value)}
              />
            </label>
          </div>

          <label className="mt-10 grid gap-3 text-sm text-slate-500">
            <span className="text-xl font-semibold text-slate-500 sm:text-2xl">Basic Salary (AED) *</span>
            <input
              className="border-0 border-b border-slate-400 bg-transparent px-0 py-3 text-lg text-slate-900 outline-none"
              type="number"
              value={basicSalaryMonthly}
              onChange={(e) => setBasicSalaryMonthly(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </label>

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
          <div className="text-lg font-semibold uppercase tracking-[0.14em] text-slate-500">Estimated gratuity</div>
          <div className="mt-4 text-4xl font-bold text-blue-700 sm:text-5xl">
            {formatAed(canShowResult ? result.totalGratuity : 0)}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            This is a planning estimate based on your dates and monthly basic salary. Verify the final value with HR or a qualified advisor.
          </p>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="rounded-xl bg-blue-700 px-10 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-600 hover:shadow-md"
          onClick={() => setSubmitted(true)}
        >
          Calculate gratuity
        </button>
      </div>

      {canShowResult ? (
        <div className="grid gap-4 md:grid-cols-4">
          <SurfaceCard className="shadow-none">
            <div className="text-sm text-slate-500">Years of service</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{result.yearsOfService}</div>
          </SurfaceCard>
          <SurfaceCard className="shadow-none">
            <div className="text-sm text-slate-500">Daily wage basis</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{formatAed(result.dailyWage)}</div>
          </SurfaceCard>
          <SurfaceCard className="shadow-none">
            <div className="text-sm text-slate-500">First 5 years amount</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{formatAed(result.firstFiveYearsAmount)}</div>
          </SurfaceCard>
          <SurfaceCard className="shadow-none">
            <div className="text-sm text-slate-500">Additional years amount</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{formatAed(result.additionalYearsAmount)}</div>
          </SurfaceCard>
        </div>
      ) : null}

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Disclaimer</h3>
        <p className="mt-5 max-w-6xl text-sm leading-7 text-slate-700">
          This gratuity calculator is provided as a planning and guidance tool only. It should not be treated as final,
          binding, or legal advice. Actual gratuity outcomes can vary depending on your employment contract, the nature
          of your employment, applicable UAE labor rules, unpaid leave, HR calculations, free zone rules, and legal
          amendments over time. While care is taken to present a useful estimate, no representation or warranty is made
          that the result is complete, current, or fully accurate for your specific case. Always verify the result with
          your employer, HR department, or a qualified legal professional before relying on it.
        </p>
      </div>
    </div>
  );
}
