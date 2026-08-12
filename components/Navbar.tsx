import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Packages', path: '/packages' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#e0b96b]/35 bg-[#281747] py-4 shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-tight text-white">
            NexaPlex <span className="text-[#f5d58f]">Web Hub</span>
          </span>
          <span className="hidden pt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-violet-100 lg:block">
            Microsoft 365 Solutions That Drive Results
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-[#f5d58f] ${location.pathname === link.path ? 'text-[#f5d58f]' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
          <a href="https://outlook.office.com/bookwithme/user/476d6b0ef7b1437393a63c08dd37e97f@nexaplexwebhub.com/meetingtype/gvU-45cccEux3i7eDDbA_g2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f5d58f] px-5 py-2.5 text-sm font-bold text-[#281747] transition-all hover:bg-[#ffe3a4] hover:scale-105">
            Book Free Discovery Call
          </a>
        </div>

        <button className="p-2 text-white md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-violet-300/20 bg-[#281747] px-5 py-5 md:hidden">
          {navLinks.map((link) => <Link key={link.path} to={link.path} className="block border-b border-violet-300/20 py-3 text-base font-medium text-white">{link.name}</Link>)}
          <a href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00" target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-full bg-[#f5d58f] px-5 py-3 text-center font-bold text-[#281747]">Book Strategy Audit</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
