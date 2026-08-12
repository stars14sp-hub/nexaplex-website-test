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
          <div className="max-w-3xl lg:max-w-xl relative">
            <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Scale Faster. <span className="text-gradient whitespace-nowrap">Senior-Led.</span>
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
        </div>

        {/* Hero Illustration Side */}
        <div className="absolute top-12 right-0 w-1/2 h-full pointer-events-none hidden lg:block">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-[#1f5c89] via-[#102a43] to-[#c9a55c] rounded-full opacity-35 blur-[120px]"></div>

            <div className="hero-visual relative w-full max-w-2xl transition-all duration-1000 transform hover:scale-[1.04] [perspective:1200px]">
              <div className="bg-white/90 p-3 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.24)] border border-[#c9a55c]/35 relative z-10 overflow-hidden group">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Original 3D global Microsoft 365 consulting visual"
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

