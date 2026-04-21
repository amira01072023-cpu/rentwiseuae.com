import AreaGuide from '@/components/AreaGuide';

export default function AlNahdaSharjahAreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">Area guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Renting in Al Nahda, Sharjah: true cost guide
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A starter planning guide for renters considering Al Nahda, Sharjah, with practical cost estimates, commuter tradeoffs, and comparison paths against other Sharjah and Dubai-border options.
        </p>
      </div>
      <div className="mt-10">
        <AreaGuide areaId="al-nahda-sharjah" propertyType="1br" relatedCompareHref="/browseal-nahda-sharjah-vs-al-nahda-dubai" relatedCompareLabel="Compare Al Nahda, Sharjah vs Al Nahda Dubai" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="/emirates/sharjah" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Back to Sharjah hub</a>
        <a href="/browseal-nahda-sharjah-vs-al-taawun" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Compare with Al Taawun</a>
        <a href="/browsemuwaileh-commercial-vs-al-nahda-sharjah" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Compare with Muwaileh Commercial</a>
      </div>
    </main>
  );
}
