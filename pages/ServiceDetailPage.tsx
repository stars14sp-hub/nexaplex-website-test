import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-12">
          <Link to="/services" className="text-blue-600 font-bold flex items-center hover:underline group">
            <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All Solutions
          </Link>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="flex-1 w-full">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
              Expert Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              {service.description} We specialize in deploying {service.title} for organizations that demand security, high availability, and measurable productivity gains.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start p-5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-blue-200 transition-all hover:shadow-md">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-bold leading-tight">{feature}</span>
                </div>
              ))}
            </div>

           
<div className="flex flex-wrap gap-4 mt-6">
  {/* Primary CTA */}
  <a
    href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00"
    target="_blank"
    rel="noopener noreferrer"
    className="accent-gradient text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
  >
    Book Strategy Audit
  </a>

  {/* Secondary CTA */}
  <Link
  to="/contact"
  className="bg-gray-100 text-slate-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-200 hover:shadow-md hover:scale-105 active:scale-95"
>
  Discuss Your Project
</Link>
</div>

{/* Tertiary CTA (below buttons) */}
<div className="mt-4">
  <Link
    to="/about"
    className="text-slate-500 font-medium hover:text-slate-900 transition-colors"
  >
    Learn more about my approach →
  </Link>
</div>
            
          </div>

          <div className="flex-1 w-full lg:sticky lg:top-32">
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                  {service.icon}
                </div>
                <p className="text-sm font-bold tracking-widest uppercase opacity-80">Premium Standard</p>
              </div>
            </div>
            
            <div className="mt-8 p-10 bg-[#050a1a] rounded-[3rem] text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose NexaPlex for {service.title}?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-blue-400 font-black">01.</span>
                  <p className="text-white text-sm">Direct access to a US-based senior consultant with 17+ years of specialized experience.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-400 font-black">02.</span>
                  <p className="text-white text-sm">
                    {(() => {
                      if (serviceId === 'm365-automation') {
                        return "Strategic focus on AI-driven efficiency and governance-first logic rather than quick, fragile patches.";
                      } else if (serviceId === 'web-dev') {
                        return "Strategic focus on SEO-first architecture and high-performance frameworks rather than generic templates.";
                      } else if (serviceId === 'portal-website-maintenance') {
                        return "Strategic focus on proactive stewardship and continuous security hardening rather than reactive fixes.";
                      } else if (serviceId === 'teams-gov') {
                        return "Strategic focus on sprawl prevention and secure lifecycle management rather than quick, fragile patches.";
                      } else if (serviceId === 'branding') {
                        return "Strategic focus on building authority and premium market positioning rather than just aesthetic design.";
                      } else if (serviceId === 'migration') {
                        return "Strategic focus on data integrity and seamless transition logic rather than quick, fragile patches.";
                      } else if (serviceId === 'mobile-opt') {
                        return "Strategic focus on offline-sync capabilities and touch-first UX logic rather than just responsive resizing.";
                      } else {
                        return "Strategic focus on ROI and long-term scalability rather than quick, fragile patches.";
                      }
                    })()}
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-400 font-black">03.</span>
                  <p className="text-white text-sm">Dedicated support and maintenance to ensure zero-downtime performance for your digital hub.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-blue-600 rounded-[4rem] py-20 px-8 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to upgrade your {service.title}?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Schedule a technical strategy call today. We'll audit your current environment and provide a clear roadmap for modernization.
            </p>
 <a
  href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-black shadow-2xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 inline-block"
>
  Schedule Your Strategy Session
</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
