import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Architectural Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] rounded-lg mb-6 shadow-sm">
            Expert-Led Strategy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            17+ Years of <br />
            <span className="signature-text-gradient">Architectural Rigor.</span>
          </h1>
         <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
  NexaPlex Web Hub is a senior-led Microsoft 365 consulting practice and a Member of the <strong>Microsoft AI Cloud Partner Program</strong>. Unlike agencies that hand off mission-critical work to junior staff, every engagement is led directly by an experienced consultant with a <strong>Master of Science in Computer Science</strong> and 17+ years of enterprise experience designing secure, scalable <strong>SharePoint and Microsoft 365 solutions</strong>.
</p>
        </div>

        {/* Credentials Bar - Refined for Academic Prestige */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 transition-all">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Advanced Education</h4>
            <div className="flex flex-col items-center">
              <p className="font-bold text-slate-900 text-sm leading-snug">Master of Science, Computer Science</p>
              <p className="text-slate-500 text-[11px] font-medium mt-1 leading-tight">University of Houston–Clear Lake, USA</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 transition-all">
            <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl font-black">17+</span>
            </div>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Platform Tenure</h4>
            <p className="font-bold text-slate-900 leading-tight">Years Specialist <br/><span className="text-slate-500 font-medium">Architecture</span></p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 transition-all">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Professional Status</h4>
            <p className="font-bold text-slate-900 leading-tight">Microsoft SME <br/><span className="text-slate-500 font-medium">Lead Consultant</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
          {/* Image Column */}
            <div className="lg:sticky lg:top-40 group h-fit">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d9f3fa] to-[#ead9ad] rounded-[3.5rem] -z-10 opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
    <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-white to-[#edf7fa] shadow-[0_35px_80px_-30px_rgba(7,42,67,0.45)] border border-white h-[480px] lg:h-[580px]">
  <img
    src={`${import.meta.env.BASE_URL}images/Shital_Photo.webp`}
    alt="Shital Parikh, Founder of NexaPlex Web Hub"
   className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.03]"
  />
  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-[#071521]/90 px-6 py-5 text-white shadow-xl backdrop-blur-xl">
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e8cf98]">Founder-led delivery</p>
    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-100">Direct senior oversight from strategy through implementation.</p>
  </div>
</div>
            </div>
          </div>

          {/* Core Principles with Gradient Branding */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-12 text-slate-900 relative">
              Core Principles
              <div className="absolute -bottom-4 left-0 w-12 h-1.5 bg-blue-600 rounded-full"></div>
            </h2>
            <div className="space-y-12">
              {/* Principle 01 */}
              <div className="flex gap-8 group/pillar">
                <div className="flex-shrink-0 w-14 h-14 pink-gradient text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover/pillar:scale-110 transition-all">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover/pillar:text-blue-600 transition-colors">Direct Owner Accountability</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">Every engagement is led directly by Shital Parikh, ensuring your strategy is executed with precision by an experienced SharePoint and Microsoft 365 architect. You work directly with a senior expert — no handoffs, no layers, no delays.</p>
                </div>
              </div>

              {/* Principle 02 */}
              <div className="flex gap-8 group/pillar">
                <div className="flex-shrink-0 w-14 h-14 sky-gradient text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover/pillar:scale-110 transition-all">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover/pillar:text-blue-600 transition-colors">Texas-Based Engineering</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">Based in Texas, NexaPlex Web Hub delivers US-based architectural oversight backed by a Master of Science (UHCL) and nearly two decades of enterprise experience. Your solutions are designed with both technical precision and business alignment.</p>
                </div>
              </div>

              {/* Principle 03 */}
              <div className="flex gap-8 group/pillar">
                <div className="flex-shrink-0 w-14 h-14 purple-pink-gradient text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover/pillar:scale-110 transition-all">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover/pillar:text-blue-600 transition-colors">Expert-Led Platform Stewardship</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">Your Microsoft 365 and SharePoint environment is designed for long-term scalability, security, and governance. We focus on building structured, resilient systems that continue to perform as your organization grows.</p>
                </div>
              </div>

              {/* Principle 04 */}
              <div className="flex gap-8 group/pillar">
                <div className="flex-shrink-0 w-14 h-14 accent-gradient text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg transform group-hover/pillar:scale-110 transition-all">04</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover/pillar:text-blue-600 transition-colors">Strategic Focus</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">I intentionally limit active engagements to deliver deep, strategic focus on every project. This ensures clarity in execution, consistent communication, and high-quality outcomes without compromise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder-Led Oversight (Visual Match to Screenshot) */}
        <div className="bg-[#0a1226] rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="max-w-4xl relative z-10">
             <h3 className="text-3xl font-bold text-white mb-7 tracking-tight">Founder-Led Oversight</h3>
             <blockquote className="text-lg md:text-xl font-medium text-slate-300 italic mb-8 leading-relaxed border-l-4 border-blue-500 pl-6 md:pl-8">
               "NexaPlex is built on precision, not volume. I personally lead every engagement to ensure clarity, consistency, and long-term scalability. Through direct involvement, I translate your business objectives into secure, resilient, and well-structured solutions."
             </blockquote>
             
             <div className="flex items-center">
               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 mr-5 flex items-center justify-center font-black text-white shadow-xl text-lg">
                 SP
               </div>
               <div>
                 <p className="font-bold text-white text-lg tracking-tight leading-none mb-1">Shital Parikh</p>
                 <p className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em]">Founder & Lead Microsoft 365 Consultant, NEXAPLEX WEB HUB, LLC</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
