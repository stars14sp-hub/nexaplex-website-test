import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BOOKING_URL = 'https://outlook.office.com/bookwithme/user/476d6b0ef7b1437393a63c08dd37e97f@nexaplexwebhub.com/meetingtype/gvU-45cccEux3i7eDDbA_g2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile';

const navLinks = [
  { name: 'Solutions', path: '/solutions' },
  { name: 'Packages', path: '/packages' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const isCurrentLink = (pathname: string, path: string) => (
  pathname === path || (path === '/solutions' && pathname.startsWith('/services/'))
);

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#dac89c]/55 bg-[#fffdf8]/90 py-3 shadow-[0_12px_40px_rgba(7,21,33,0.10)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="NexaPlex Web Hub home" className="group flex items-center gap-3 leading-tight">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-[#0b3657] text-base font-bold text-white shadow-[0_9px_20px_rgba(11,54,87,0.22)] transition-transform duration-300 group-hover:-translate-y-0.5">
            N
            <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-[#52c7df] opacity-80" />
          </span>
          <span className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#102a43]">
              NexaPlex <span className="text-[#9a6f20]">Web Hub</span>
            </span>
            <span className="hidden pt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500 xl:block">
              Microsoft 365 Solutions That Drive Results
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => {
            const isCurrent = isCurrentLink(location.pathname, link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isCurrent ? 'page' : undefined}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${isCurrent ? 'bg-[#e8f4fb] text-[#075d93] shadow-[inset_0_0_0_1px_rgba(42,135,184,0.12)]' : 'text-slate-700 hover:bg-white hover:text-[#075d93]'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="ml-1 rounded-full bg-[#0b5f93] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(11,95,147,0.24)] ring-1 ring-[#cda958]/45 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#084a75] hover:shadow-[0_14px_28px_rgba(11,95,147,0.30)]">
            Book Free Discovery Call
          </a>
        </div>

        <button
          className="rounded-xl border border-slate-200 bg-white p-2 text-[#102a43] shadow-sm transition-colors hover:bg-slate-50 lg:hidden"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-[#dac89c]/45 bg-[#fffdf8]/95 px-5 py-5 shadow-xl backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => {
            const isCurrent = isCurrentLink(location.pathname, link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isCurrent ? 'page' : undefined}
                className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${isCurrent ? 'bg-[#e8f4fb] text-[#075d93]' : 'text-slate-700 hover:bg-white hover:text-[#075d93]'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-full bg-[#0b5f93] px-5 py-3 text-center font-bold text-white shadow-[0_10px_22px_rgba(11,95,147,0.24)] ring-1 ring-[#cda958]/45">Book Free Discovery Call</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
