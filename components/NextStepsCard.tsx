import Link from 'next/link';

export interface NextStepItem {
  href: string;
  label: string;
  description: string;
}

export default function NextStepsCard({
  title = 'Recommended next steps',
  items,
}: {
  title?: string;
  items: NextStepItem[];
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <div className="font-medium text-slate-900">{item.label}</div>
            <div className="mt-1 text-sm text-slate-600">{item.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
