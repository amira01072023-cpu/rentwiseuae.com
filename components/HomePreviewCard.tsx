import Link from 'next/link';

export default function HomePreviewCard({
  title,
  value,
  description,
  href,
  cta,
}: {
  title: string;
  value: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-3xl font-bold text-slate-900">{value}</div>
      <div className="mt-3 text-sm text-slate-600">{description}</div>
      <Link
        href={href}
        className="mt-5 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        {cta}
      </Link>
    </div>
  );
}
