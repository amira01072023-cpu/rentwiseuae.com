'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'rentwise-cookie-consent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  function handleConsent(value: 'accepted' | 'essential-only') {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-slate-900">Cookie notice</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We use essential cookies to keep the website working and may use limited analytics or similar tools to improve the site. By continuing, you can accept all cookies or keep essential cookies only. See our{' '}
            <Link href="/cookie-policy" className="font-medium text-slate-900 underline underline-offset-2">
              Cookie Policy
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="font-medium text-slate-900 underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => handleConsent('essential-only')}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => handleConsent('accepted')}
            className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
