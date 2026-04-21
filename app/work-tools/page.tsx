import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import HomePreviewCard from '@/components/HomePreviewCard';
import SurfaceCard from '@/components/SurfaceCard';

export const metadata: Metadata = {
  title: 'UAE work tools and calculators',
  description: 'Use one clear hub for UAE gratuity, leave salary, notice pay, and salary safety tools, with guidance on which tool is best for your situation.',
};

export default function WorkToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-6 py-10 ring-1 ring-slate-200 sm:px-10 sm:py-14">
        <PageHero
          eyebrow="Work tools"
          title="One place for UAE worker-help calculators"
          description="If you are not sure which tool to open, start here. This page points you to the best calculator based on what you actually want to figure out."
        />
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SurfaceCard>
          <div className="text-sm text-slate-500">Best if you want</div>
          <div className="mt-1 font-semibold text-slate-900">End-of-service money</div>
          <div className="mt-2 text-sm text-slate-600">Use gratuity when you want to estimate what you may receive at the end of employment.</div>
        </SurfaceCard>
        <SurfaceCard>
          <div className="text-sm text-slate-500">Best if you want</div>
          <div className="mt-1 font-semibold text-slate-900">Leave pay</div>
          <div className="mt-2 text-sm text-slate-600">Use leave salary when the question is how much paid leave should be worth.</div>
        </SurfaceCard>
        <SurfaceCard>
          <div className="text-sm text-slate-500">Best if you want</div>
          <div className="mt-1 font-semibold text-slate-900">Notice-period pay</div>
          <div className="mt-2 text-sm text-slate-600">Use notice pay when you need a quick estimate tied to notice days and basic salary.</div>
        </SurfaceCard>
        <SurfaceCard>
          <div className="text-sm text-slate-500">Best if you want</div>
          <div className="mt-1 font-semibold text-slate-900">Can I afford this rent?</div>
          <div className="mt-2 text-sm text-slate-600">Use salary safety when the real question is whether a rent setup is safe, stretched, or risky.</div>
        </SurfaceCard>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        <HomePreviewCard title="Recommended tool" value="UAE gratuity" description="Best when the main question is end-of-service entitlement or rough payout planning." href="/gratuity-calculator" cta="Open gratuity tool" />
        <HomePreviewCard title="Recommended tool" value="Leave salary" description="Best when you want a quick planning estimate for paid leave value." href="/leave-salary-calculator" cta="Open leave salary tool" />
        <HomePreviewCard title="Recommended tool" value="Notice pay" description="Best when the main question is pay tied to notice days and settlement planning." href="/notice-period-pay-calculator" cta="Open notice pay tool" />
        <HomePreviewCard title="Recommended tool" value="Salary safety" description="Best when the question is not labor settlement, but whether housing cost actually fits income." href="/work-tools" cta="Open salary safety tool" />
      </div>

      <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Quick suggestion guide</h2>
        <div className="mt-4 grid gap-3 text-sm text-slate-700">
          <div className="rounded-xl border border-slate-200 p-4"><strong>If you are leaving a job:</strong> start with <Link href="/gratuity-calculator" className="text-brand hover:text-brand">gratuity</Link>.</div>
          <div className="rounded-xl border border-slate-200 p-4"><strong>If you are checking paid leave money:</strong> use <Link href="/leave-salary-calculator" className="text-brand hover:text-brand">leave salary</Link>.</div>
          <div className="rounded-xl border border-slate-200 p-4"><strong>If you are checking notice settlement:</strong> use <Link href="/notice-period-pay-calculator" className="text-brand hover:text-brand">notice pay</Link>.</div>
          <div className="rounded-xl border border-slate-200 p-4"><strong>If you are deciding whether rent is realistic:</strong> use <Link href="/work-tools" className="text-brand hover:text-brand">salary safety</Link>.</div>
        </div>
      </div>
    </main>
  );
}
