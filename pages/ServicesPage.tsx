
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
            Strategic Consulting
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Strategic Solutions Architecture
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            We translate complex technical capabilities into measurable business outcomes. Explore our core solution frameworks below.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`group flex flex-col lg:flex-row items-center gap-10 lg:gap-16 perspective-1000 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full preserve-3d">
                <div className="tilt-card relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-xl md:shadow-2xl shadow-slate-200 group-hover:shadow-blue-500/10 transition-all duration-700">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full aspect-video lg:aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center space-x-3 transform translate-z-20">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      {/* Fix: Use React.ReactElement<any> to avoid className prop error in cloneElement */}
                      {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-4 h-4 md:w-5 md:h-5' })}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-70 leading-none mb-1">Core Capability</span>
                      <span className="font-bold tracking-wide text-xs md:text-sm">Enterprise Engineering</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 content-lift transition-all duration-700 w-full">
                <div className="inline-block px-4 py-1.5 bg-slate-900 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                   Expertise: {service.title}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description} Our approach ensures that these technical services aren't just implemented, but are strategically woven into your operational fabric.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center p-3 md:p-4 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-sm hover:border-blue-200 transition-colors group/feat">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 mr-3 group-hover/feat:scale-125 transition-transform"></div>
                      <span className="text-xs md:text-sm font-semibold text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={`/services/${service.id}`} 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 md:py-3 rounded-full font-bold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-slate-200 hover:scale-105 active:scale-95 transform-gpu"
                >
                  View Solution Roadmap
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Specific Inquiry Section */}
      <section className="mt-24 lg:mt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[4rem] bg-slate-900 overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Secure Portal Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-30 transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80"></div>
          
          <div className="relative z-10 py-16 md:py-24 px-6 md:px-20 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 border border-blue-500/30">
                Managed Performance
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Technical Stewardship Solutions</h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We provide the senior-level maintenance services required to keep your M365 ecosystems and web assets secure, performant, and reliable.
              </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Link 
                to="/contact" 
                className="w-full lg:w-auto inline-flex items-center justify-center bg-blue-600 text-white px-10 md:px-12 py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl shadow-blue-900/40 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform-gpu hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Request Support Solution
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
