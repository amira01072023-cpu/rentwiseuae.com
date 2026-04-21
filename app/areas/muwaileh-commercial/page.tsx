import AreaGuide from '@/components/AreaGuide';

export default function MuwailehCommercialAreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">Area guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Renting in Muwaileh Commercial: true cost guide
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A starter planning guide for renters considering Muwaileh Commercial, with cost estimates, family-fit indicators, and practical tradeoffs for budget-focused Sharjah renters.
        </p>
      </div>
      <div className="mt-10">
        <AreaGuide areaId="muwaileh-commercial" propertyType="1br" relatedCompareHref="/browsemuwaileh-commercial-vs-al-nahda-dubai" relatedCompareLabel="Compare Muwaileh Commercial vs Al Nahda Dubai" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="/emirates/sharjah" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Back to Sharjah hub</a>
        <a href="/browsemuwaileh-commercial-vs-al-nahda-sharjah" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Compare with Al Nahda, Sharjah</a>
        <a href="/browsemuwaileh-commercial-vs-al-nahda-dubai" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Compare with Al Nahda Dubai</a>
      </div>
    </main>
  );
}
