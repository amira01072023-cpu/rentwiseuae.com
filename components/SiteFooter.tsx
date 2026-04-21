import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-[#efeff2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.6fr_0.9fr_1.5fr] lg:px-8">
        <div />

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <Link href="/browse" className="hover:text-slate-900">Browse</Link>
            <Link href="/post-listing" className="hover:text-slate-900">Post Listing</Link>
            <Link href="/work-tools" className="hover:text-slate-900">Work Tools</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Support</h3>
          <div className="mt-4 grid gap-x-8 gap-y-3 text-sm text-slate-600 sm:grid-cols-2">
            <Link href="/contact-us" className="hover:text-slate-900">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-slate-900">Cookie Policy</Link>
            <Link href="/terms-of-use" className="hover:text-slate-900">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-slate-900">Disclaimer</Link>
            <Link href="/accessibility-statement" className="hover:text-slate-900">Accessibility Statement</Link>
            <Link href="/data-rights-request" className="hover:text-slate-900">Data Rights Request</Link>
            <Link href="/eu-compliance-notice" className="hover:text-slate-900">EU Compliance Notice</Link>
            <Link href="/report-illegal-content" className="hover:text-slate-900">Report Illegal Content</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 RentWiseUAE. All rights reserved.</div>
          <div>
            Developed by <span className="font-medium text-slate-700">Creencia Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
