import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050a1a] text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-12 lg:col-span-3">
            <Link to="/" aria-label="NexaPlex Web Hub home" className="mb-4 inline-flex rounded-2xl border border-white/15 bg-white px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,.24)]">
              <img
                src={`${import.meta.env.BASE_URL}images/NexaPlex_Logo_Horizontal_Web.webp`}
                alt="NexaPlex Web Hub"
                className="h-14 w-auto max-w-[265px] object-contain"
              />
            </Link>
            <p className="mb-5 text-[9px] font-black uppercase tracking-[0.18em] text-[#7dd3df]">
              Microsoft 365 Solutions That Drive Results
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-slate-400">
              Expert SharePoint and Microsoft 365 solutions, delivered by a senior architect to streamline operations, automate workflows, and improve organizational visibility.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/shitalparikhmscs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors text-slate-400" 
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Solutions (2 columns) */}
          <div className="col-span-1 md:col-span-7 lg:col-span-5">
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="hover:text-white transition-colors block text-slate-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/case-studies" className="hover:text-white transition-colors text-slate-400">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors text-slate-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-slate-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Registration */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Consultation</h4>
            <ul className="space-y-4 text-sm mb-6">
           <li className="space-y-3 text-slate-400 text-sm">
  <div className="flex items-start gap-2 whitespace-nowrap">
    <span>📍</span>
    <span>Houston, TX, United States</span>
  </div>

  <div className="flex items-start gap-2 whitespace-nowrap">
    <span>🌐</span>
    <span>Remote Services Nationwide</span>
  </div>
</li>
              <li className="flex items-start">
                <span className="mr-2" aria-hidden="true">✉️</span>
                <a 
                  href="mailto:hello@nexaplexwebhub.com?subject=NexaPlex%20Inquiry%20%7C%20Strategy%20%26%20Architecture" 
                  className="text-white font-medium hover:text-blue-400 transition-colors"
                >
                  hello@nexaplexwebhub.com
                </a>
              </li>
            </ul>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex items-center justify-center">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Texas Registered LLC</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-slate-500">© 2026 NexaPlex Web Hub, LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
