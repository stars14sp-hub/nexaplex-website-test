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
          <div className="max-w-3xl lg:max-w-xl">
            <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight [perspective:1100px]">
              <span className="block hero-word">Scale Faster.</span>
              <span className="block hero-word hero-word-accent whitespace-nowrap">Senior-Led.</span>
            </h1>

            <div className="relative mb-10 group">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium">
  Strategic <span className="text-white font-bold underline decoration-[#c9a55c]/50 decoration-4 underline-offset-4">Microsoft 365, SharePoint, Workflow Automation & AI solutions </span> designed to streamline operations, automate business processes, and improve collaboration across your organization.
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
                to="/services"
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

        {/* Hero Illustration Side */}
        <div className="absolute top-12 right-0 w-1/2 h-full pointer-events-none hidden lg:block">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-[#1f5c89] via-[#102a43] to-[#c9a55c] rounded-full opacity-35 blur-[120px]"></div>

            <div className="hero-visual relative w-full max-w-2xl transition-all duration-1000 transform hover:scale-[1.04] [perspective:1200px]">
              <div className="bg-white/90 p-3 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.24)] border border-[#c9a55c]/35 relative z-10 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=85&w=1600"
                  alt="Senior Engineering Expert Collaboration"
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
            <div className="globe-orbit" aria-hidden="true">
              <div className="globe-core"></div>
              <span className="globe-ring globe-ring-one"></span>
              <span className="globe-ring globe-ring-two"></span>
              <span className="globe-node globe-node-one"></span>
              <span className="globe-node globe-node-two"></span>
              <span className="globe-node globe-node-three"></span>
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

