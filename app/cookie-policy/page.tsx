import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for RentWise UAE.',
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Cookie Policy</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">This Cookie Policy explains how RentWise UAE may use cookies or similar technologies for basic site functionality, analytics, security, and performance monitoring.</p>
      </div>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Cookie Use</h2>
          <p className="mt-3">Cookies or similar technologies may be used to support site performance, maintain session integrity, understand traffic patterns, and help protect the platform from abuse.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Categories</h2>
          <div className="mt-3 space-y-3">
            <p>Categories may include essential cookies, analytics cookies, security-related cookies, and third-party service cookies where applicable.</p>
            <p>If analytics, marketing, retargeting, or embedded third-party tools are introduced later, the cookie notice and policy should be updated accordingly.</p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. Control</h2>
          <p className="mt-3">Users may control certain cookie behaviour through browser settings, subject to the impact this may have on site functionality.</p>
        </section>
      </div>
    </main>
  );
}
