import { ReactNode } from 'react';

export default function SurfaceCard({
  children,
  dark = false,
  className = '',
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  if (dark) {
    return (
      <div className={`rounded-3xl bg-slate-900 p-6 text-white shadow-sm ${className}`.trim()}>
        {children}
      </div>
    );
  }

  return (
    <div className={`rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${className}`.trim()}>
      {children}
    </div>
  );
}
