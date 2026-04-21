import AreaGuide from '@/components/AreaGuide';

export default function ArjanAreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">Area guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Renting in Arjan: true cost guide
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A starter planning guide for renters considering Arjan, including cost estimates, area fit, and a direct comparison path against Jumeirah Village Circle.
        </p>
      </div>
      <div className="mt-10">
        <AreaGuide areaId="arjan" propertyType="1br" relatedCompareHref="/browsejvc-vs-arjan" relatedCompareLabel="Compare Arjan vs Jumeirah Village Circle" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="/emirates/dubai" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Back to Dubai hub</a>
        <a href="/browsejvc-vs-arjan" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Open dedicated comparison</a>
      </div>
    </main>
  );
}
