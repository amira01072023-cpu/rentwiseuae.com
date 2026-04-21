import './globals.css';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CookieConsentBanner from '@/components/CookieConsentBanner';

export const metadata: Metadata = {
  title: {
    default: 'RentWise UAE',
    template: '%s | RentWise UAE',
  },
  description: 'Browse UAE room and bedspace listings, then contact posters directly for photos and details. Includes practical work tools for UAE residents.',
  keywords: [
    'room for rent UAE',
    'bedspace for rent UAE',
    'room for rent Dubai',
    'bedspace for rent Dubai',
    'room for rent Sharjah',
    'bedspace for rent Abu Dhabi',
    'post free room listing UAE',
    'UAE work tools'
  ],
  openGraph: {
    title: 'RentWise UAE',
    description: 'Simple UAE room and bedspace listings with direct poster contact, plus practical work tools.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
