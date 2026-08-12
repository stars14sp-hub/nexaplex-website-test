import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Packages', path: '/packages' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#e0b96b]/35 bg-[#281747]/98 py-4 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex flex-col leading-tight">
          <span className={`text-xl font-bold tracking-tight 'text-white'`}>
            NexaPlex <span className="text-[#b88b35]">Web Hub</span>
          </span>
          <span className={`hidden pt-1 text-[8px] font-bold uppercase tracking-[0.16em] lg:block 'text-slate-300'`}>
            Microsoft 365 Solutions That Drive Results
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-[#b88b35] ${location.pathname === link.path ? 'text-[#f5d58f]' : 'text-violet-50'}`}>
              {link.name}
            </Link>
          ))}
          <a href="https://outlook.office.com/bookwithme/user/476d6b0ef7b1437393a63c08dd37e97f@nexaplexwebhub.com/meetingtype/gvU-45cccEux3i7eDDbA_g2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f5d58f] px-5 py-2.5 text-sm font-bold text-[#281747] transition-all hover:bg-[#ffe3a4] hover:scale-105">
            Book Free Discovery Call
          </a>
        </div>

        <button className={`p-2 md:hidden 'text-white'`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-2 px-5 py-5">
            {navLinks.map((link) => <Link key={link.path} to={link.path} className="block border-b border-slate-100 py-2 text-base font-medium text-slate-700" onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>)}
            <a href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00" target="_blank" rel="noopener noreferrer" className="mt-3 block rounded-full bg-[#102a43] px-5 py-3 text-center font-bold text-white">Book Strategy Audit</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
