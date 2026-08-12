import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Packages', path: '/packages' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const light = isScrolled;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className={`mx-auto max-w-6xl rounded-full border px-5 transition-all duration-500 ${light ? 'border-slate-200 bg-white/95 py-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl' : 'border-white/25 bg-[#071521]/78 py-3.5 shadow-2xl shadow-black/25 backdrop-blur-xl'}`}>
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <span className="hidden h-9 w-px bg-[#c9a55c] sm:block" />
            <span className="min-w-0">
              <span className={`block text-lg font-black tracking-tight sm:text-xl ${light ? 'text-[#102a43]' : 'text-white'}`}>
                NexaPlex <span className="text-[#b88b35]">Web Hub</span>
              </span>
              <span className={`hidden text-[8px] font-bold uppercase tracking-[0.16em] lg:block ${light ? 'text-slate-600' : 'text-slate-300'}`}>
                Microsoft 365 Solutions That Drive Results
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-[#b88b35] ${location.pathname === link.path ? 'text-[#b88b35]' : light ? 'text-slate-600' : 'text-slate-100'}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://outlook.office.com/bookwithme/user/476d6b0ef7b1437393a63c08dd37e97f@nexaplexwebhub.com/meetingtype/gvU-45cccEux3i7eDDbA_g2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#c9a55c] px-5 py-2.5 text-sm font-bold text-[#071521] shadow-lg transition-all hover:bg-[#e0c17d] hover:scale-105"
            >
              Book Free Discovery Call
            </a>
          </div>

          <button className={`p-2 md:hidden ${light ? 'text-[#102a43]' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:hidden">
          <div className="space-y-3 px-5 py-5">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block border-b border-slate-100 py-2 text-base font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <a href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00" target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-full bg-[#102a43] px-5 py-3 text-center font-bold text-white">
              Book Strategy Audit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
