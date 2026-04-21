import AreaGuide from '@/components/AreaGuide';

export default function JltAreaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">Area guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Renting in Jumeirah Lake Towers: true cost guide
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A starter planning guide for renters considering Jumeirah Lake Towers, with typical monthly cost estimates, access benefits, and a direct comparison path against Dubai Marina.
        </p>
      </div>
      <div className="mt-10">
        <AreaGuide areaId="jlt" propertyType="1br" relatedCompareHref="/browsedubai-marina-vs-jlt" relatedCompareLabel="Compare Jumeirah Lake Towers vs Dubai Marina" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href="/emirates/dubai" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Back to Dubai hub</a>
        <a href="/browsedubai-marina-vs-jlt" className="rounded-full px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">Open dedicated comparison</a>
      </div>
    </main>
  );
}
