import AreaGuide from '@/components/AreaGuide';

export default function JvcAreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">Area guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Renting in Jumeirah Village Circle: true cost guide
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A starter planning guide for renters considering Jumeirah Village Circle, with typical rent bands, move-in cash, monthly cost estimates, and nearby comparison options.
        </p>
      </div>
      <div className="mt-10">
        <AreaGuide areaId="jvc" propertyType="1br" relatedCompareHref="/browsejvc-vs-arjan" relatedCompareLabel="Compare Jumeirah Village Circle vs Arjan" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="/emirates/dubai" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Back to Dubai hub</a>
        <a href="/browsejvc-vs-arjan" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Open dedicated comparison</a>
      </div>
    </main>
  );
}
