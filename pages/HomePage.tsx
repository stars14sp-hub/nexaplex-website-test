import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import Testimonials from '../components/Testimonials';
const HomePage: React.FC = () => {
  const sectorsServed = [
    {
      title: 'Healthcare & Medical',
      description: 'HIPAA-compliant SharePoint architecture and Microsoft 365 ecosystems for multi-location practices and hospital networks.',
      icon: '🩺',
      tag: 'Clinical Integrity',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
      bullets: ['Patient Record Security', 'HIPAA-Ready Workflows', 'Telehealth Integration', 'Clinical Data Portals', 'Physician Collaboration Hubs']
    },
    {
      title: 'Education & Academia',
      description: 'Scalable collaborative hubs and secure data governance systems designed for staff efficiency and knowledge management.',
      icon: '🎓',
      tag: 'Academic Agility',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200',
      bullets: ['Faculty Knowledge Hubs', 'LMS Data Governance', 'Research Asset Management', 'Institutional Portals', 'Secure Student Records']
    },
    {
      title: 'Advanced Manufacturing',
      description: 'Shop-floor automation, document control, and supply chain transparency for high-precision production environments.',
      icon: '⚙️',
      tag: 'Operational Precision',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      bullets: ['QMS Digitization', 'Inventory Dashboards', 'Vendor Portal Automation', 'Supply Chain Visibility', 'Shop Floor Workflows']
    },
    {
      title: 'Retail & Distribution',
      description: 'Vendor management portals and operational dashboards for distributed retail networks and multi-unit commerce groups.',
      icon: '🛍️',
      tag: 'Network Scale',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      bullets: ['Field Staff Intranets', 'Real-time Sales Insights', 'POS System Data Hubs', 'Multi-unit Asset MGMT', 'Vendor Communication']
    },
    {
      title: 'Agencies & Branding',
      description: 'Creative asset stewardship and automated project lifecycles for high-output marketing and branding firms.',
      icon: '🎨',
      tag: 'Creative Velocity',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      bullets: ['Digital Asset Stewardship', 'Client Extranets', 'Project Lifecycle Automation', 'Resource Planning', 'Collaboration Dashboards']
    },
    {
      title: 'Nonprofit Organizations',
      description: 'Strategic Microsoft 365 ecosystems and grant management hubs designed to maximize mission impact while maintaining lean operations.',
      icon: '🤝',
      tag: 'Mission Stewardship',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
      bullets: ['Grant Tracking Systems', 'Donor Data Privacy', 'Board Governance Portals', 'Impact Dashboards', 'Lean Operational Logic']
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-[#071521]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(201,165,92,0.25),transparent_24%),radial-gradient(circle_at_62%_70%,rgba(31,92,137,0.25),transparent_34%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl lg:max-w-2xl relative">
            <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c9a55c]/35 bg-white/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ead6a7] backdrop-blur-md sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#55d0df] shadow-[0_0_12px_rgba(85,208,223,0.8)]" />
              Senior-led Microsoft consulting
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] mb-8 tracking-[-0.035em]">
              Microsoft 365 consulting, <span className="text-gradient">built for operational scale.</span>
            </h1>

            <div className="relative mb-10 max-w-2xl">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                Strategy, architecture, and implementation for <span className="font-semibold text-white">SharePoint, workflow automation, and AI</span>—designed to reduce operational friction and give growing teams a more dependable digital workplace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a
                href="https://outlook.office.com/bookwithme/user/476d6b0ef7b1437393a63c08dd37e97f@nexaplexwebhub.com/meetingtype/gvU-45cccEux3i7eDDbA_g2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a55c] text-[#071521] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl shadow-slate-400/30 hover:bg-[#e0c17d] hover:shadow-2xl hover:scale-105 active:scale-95 text-center transform-gpu"
              >
               Book Free Discovery Call
              </a>
              <Link
                to="/solutions"
                className="bg-white/10 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:bg-white/20 hover:scale-105 active:scale-95 text-center transform-gpu"
              >
                Explore Solutions
              </Link>
            </div>

            {/* ✅ Badges — now inside content block, aligned under buttons */}
           <div className="grid grid-cols-2 gap-3 mt-2 sm:flex sm:flex-wrap">
  {[
     "17+ Years Experience",
     "Founder-Led Delivery",
     "Healthcare & SMB Focus",
     "Remote Services Nationwide",
      "Microsoft AI Cloud Partner Program Member"
  ].map((item) => (
    <span
      key={item}
      className="px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-[#c9a55c]/20 border border-[#c9a55c]/50 text-sm font-semibold text-slate-100 backdrop-blur-sm text-center"
    >
      {item}
    </span>
  ))}
</div>
            </div>

          </div>
        </div>

        {/* Hero Illustration Side */}
        <div className="absolute top-12 right-0 w-1/2 h-full pointer-events-none hidden lg:block">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-[#1f5c89] via-[#102a43] to-[#c9a55c] rounded-full opacity-35 blur-[120px]"></div>

            <div className="hero-visual relative w-full max-w-2xl transition-all duration-1000 transform hover:scale-[1.04] [perspective:1200px]">
              <div className="bg-white/90 p-3 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.24)] border border-[#c9a55c]/35 relative z-10 overflow-hidden group">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Original premium workspace collaboration visual with no visible faces"
                  className="w-full h-auto rounded-[2.8rem] object-cover aspect-[4/3] brightness-[1.01] saturate-[1.05] transition-transform duration-[2s] group-hover:scale-105"
                />

                {/* Senior Lead Badge */}
                <div className="absolute top-8 left-8 pointer-events-none">
                  <div className="px-6 py-5 bg-white/95 backdrop-blur-2xl rounded-[1.8rem] border border-slate-100 ring-1 ring-slate-900/5 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] pointer-events-auto group/badge transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#102a43] rounded-2xl flex items-center justify-center shadow-lg shadow-slate-500/20 transform group-hover/badge:rotate-3 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] leading-none mb-1">Senior Architect</p>
                        <p className="text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.15em] opacity-90">Expert Oversight</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pt-24 pb-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Expert Solutions & Capabilities.
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              We engineer high-performance digital environments designed to maximize efficiency and streamline team collaboration.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex flex-col h-full group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
              >
                {/* Image */}
                <div className="h-40 w-full overflow-hidden relative flex-shrink-0">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur text-blue-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    {React.cloneElement(service.icon as React.ReactElement<any>, {
                      className: 'w-5 h-5',
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between flex-grow">

                  {/* Text */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-[16px] font-bold text-slate-900 leading-tight uppercase tracking-tight min-h-[64px] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 text-[12px] leading-relaxed min-h-[96px]">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 border-t border-slate-200 mt-4 pt-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-[10px] text-slate-400 font-bold uppercase tracking-wider"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                          <span className="leading-relaxed break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/services/${service.id}`}
                    className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em] flex items-center group/link mt-6 pt-4 border-t border-slate-50"
                  >
                    Explore Solution
                    <svg
                      className="w-3 h-3 ml-3 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served Section */}
      <section className="pt-24 pb-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4">
              Strategic Versatility
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Sectors Served. <br />Solutions for All Business Sizes.
            </h2>
            <p className="text-lg text-slate-600">While SharePoint and Microsoft 365 are universal, the architecture required for security and scale remains consistent across every organization I support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sectorsServed.map((sector) => (
              <div key={sector.title} className="group relative">
                <div className="tilt-card bg-white rounded-[3rem] border border-slate-100 shadow-xl transition-all duration-700 h-full flex flex-col overflow-hidden min-h-[520px] relative">

                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={sector.image}
                      alt=""
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:saturate-[1.1] grayscale-[20%] group-hover:grayscale-0 opacity-[0.3] group-hover:opacity-[0.6]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur rounded-2xl shadow-sm border border-slate-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg">
                      {sector.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-slate-900 text-[13px] font-extrabold leading-relaxed mb-6 drop-shadow-sm">
                      {sector.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {sector.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center space-x-3 group/bullet">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover/bullet:scale-125 transition-transform flex-shrink-0"></div>
                          <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="inline-flex items-center space-x-2 text-[10px] font-black text-blue-600 uppercase tracking-widest pt-5 border-t border-slate-900/10 w-full">
                        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></span>
                        <span>{sector.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="pt-8 pb-24 bg-slate-50">
        <Testimonials />
      </div>

      {/* Authority CTA Section */}
      <section className="pt-24 pb-24 relative bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Direct Access to Senior Expertise.</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                No account managers. No juniors. Work directly with <strong>Shital Parikh</strong> — the Founder & Owner — to solve your Microsoft 365 or web engineering challenges through dedicated <strong>Founder-Led Oversight.</strong>
              </p>
              <a
                href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-gradient text-white px-10 py-5 rounded-full text-xl font-black transition-all duration-300 inline-block shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transform-gpu"
              >
                Book Strategy Audit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
