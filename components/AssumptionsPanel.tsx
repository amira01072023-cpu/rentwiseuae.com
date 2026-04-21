interface AssumptionsPanelProps {
  title?: string;
  items: string[];
}

export default function AssumptionsPanel({ title = 'Assumptions used', items }: AssumptionsPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-700">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
