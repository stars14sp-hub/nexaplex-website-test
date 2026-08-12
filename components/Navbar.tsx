import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className={`mx-auto max-w-6xl rounded-full border px-4 sm:px-5 transition-all duration-500 ${isScrolled ? 'border-slate-200 bg-white/90 py-2 shadow-xl shadow-slate-900/10 backdrop-blur-xl' : 'border-[#c9a55c]/45 bg-white/95 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl'}`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-12 flex items-center rounded-full border border-[#c9a55c]/70 bg-[#102a43] px-4 shadow-lg shadow-slate-900/15 transition-transform group-hover:scale-[1.03]">
              <span className="font-serif text-lg font-bold tracking-[0.16em] text-[#f7f5f0]">NP</span>
            </div>
            <div className="flex flex-col leading-tight">
  <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-[#102a43]' : 'text-[#102a43]'}`}>
    NexaPlex <span className="text-[#b88b35]">Web Hub</span>
  </span>

  <span className={`hidden lg:block mt-1 text-[8px] font-bold uppercase tracking-[0.16em] ${isScrolled ? 'text-slate-600' : 'text-slate-600'} whitespace-nowrap`}>
    Microsoft 365 Solutions That Drive Results
  </span>
</div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#c9a55c] ${location.pathname === link.path ? 'text-[#c9a55c]' : isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
              >
                {link.name}
              </Link>
            ))}
           <a
  href="https://outlook.office.com/bookwithme/user/476d6b0ef7b1437393a63c08dd37e97f@nexaplexwebhub.com/meetingtype/gvU-45cccEux3i7eDDbA_g2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#102a43] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-slate-400/20 hover:bg-[#173f66] hover:shadow-xl hover:scale-105 active:scale-95 transform-gpu"
>
  Book Free Discovery Call
</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#102a43]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-base font-medium text-slate-600 py-2 border-b border-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
  href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00"
  target="_blank"
  rel="noopener noreferrer"
  className="block accent-gradient text-white text-center px-5 py-3 rounded-xl font-bold active:scale-95 transition-transform"
  onClick={() => setMobileMenuOpen(false)}
>
  Book Strategy Audit
</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
