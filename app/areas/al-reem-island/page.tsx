import AreaGuide from '@/components/AreaGuide';

export default function AlReemIslandAreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">Area guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Renting in Al Reem Island: true cost guide
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A starter planning guide for renters considering Al Reem Island, including typical cost estimates, fit indicators, and a direct comparison path versus Khalifa City.
        </p>
      </div>
      <div className="mt-10">
        <AreaGuide areaId="al-reem-island" propertyType="1br" relatedCompareHref="/browsekhalifa-city-vs-al-reem-island" relatedCompareLabel="Compare Al Reem Island vs Khalifa City" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="/emirates/abu-dhabi" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Back to Abu Dhabi hub</a>
        <a href="/browsekhalifa-city-vs-al-reem-island" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Open dedicated comparison</a>
      </div>
    </main>
  );
}
