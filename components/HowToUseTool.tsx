export default function HowToUseTool({
  steps,
}: {
  steps: string[];
}) {
  return (
    <div className="rounded-2xl bg-[#f3f1ff] p-5 ring-1 ring-[#e3defe]">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">How to use this tool</h3>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
