import AreaGuide from '@/components/AreaGuide';

export default function AlMajaz3AreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">Area guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Renting in Al Majaz 3: true cost guide
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A starter planning guide for renters considering Al Majaz 3, with practical cost estimates, area-fit indicators, and comparison paths against other Sharjah apartment areas.
        </p>
      </div>
      <div className="mt-10">
        <AreaGuide areaId="al-majaz-3" propertyType="1br" relatedCompareHref="/browseal-taawun-vs-al-majaz-3" relatedCompareLabel="Compare Al Majaz 3 vs Al Taawun" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="/emirates/sharjah" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Back to Sharjah hub</a>
        <a href="/browseal-taawun-vs-al-majaz-3" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Open dedicated comparison</a>
      </div>
    </main>
  );
}
