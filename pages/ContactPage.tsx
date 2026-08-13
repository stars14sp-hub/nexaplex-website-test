import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PACKAGE_MAP: Record<string, { name: string; service: string }> = {
  'workflow-automation': {
    name: 'Workflow Automation Starter',
    service: 'workflow-automation',
  },
  'document-management': {
    name: 'Document Management Foundation',
    service: 'document-management-system',
  },
  'employee-portal': {
    name: 'Employee Portal Launch',
    service: 'sharepoint-intranet-design',
  },
  'microsoft-365-support': {
    name: 'Microsoft 365 Optimization & Support',
    service: 'm365-architecture-governance',
  },
};

const ContactPage: React.FC = () => {
  const location = useLocation();
  const packageId = new URLSearchParams(location.search).get('package');
  const selectedPackage = packageId ? PACKAGE_MAP[packageId] : null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    if (selectedPackage) {
      setFormData((previous) => ({
        ...previous,
        service: selectedPackage.service,
      }));
    }
  }, [selectedPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@nexaplexwebhub.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          selectedPackage: selectedPackage?.name || 'Not specified',
          _subject: selectedPackage
            ? `Package Inquiry - ${selectedPackage.name}`
            : "New Project Inquiry - NexaPlex",
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        alert('Thank you! Your project details have been received. Founder & Owner Shital Parikh will personally review your inquiry and reach out within 1 business day to discuss next steps.');
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        alert('There was an issue sending your inquiry. Please try again or email us directly at hello@nexaplexwebhub.com.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert('There was a network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row gap-12 mb-14">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Let's Build Something <span className="text-gradient">Significant.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
  Ready to modernize your operations? Complete our project inquiry form,
  schedule a free 15-minute discovery call, or book a focused strategy
  audit with our Founder & Owner, <strong>Shital Parikh</strong>.
</p>
            
            <div className="space-y-6">
              {/* Standard Email Contact */}
              <div className="flex items-start p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#4f5fb0] mr-6 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-wider text-xs">Email Us</h4>
                  <a 
                    href="mailto:hello@nexaplexwebhub.com?subject=NexaPlex%20Contact%20Inquiry%20%7C%20General%20Discussion"
                    className="text-slate-600 font-medium hover:text-[#4f5fb0] transition-colors"
                  >
                    hello@nexaplexwebhub.com
                  </a>
                </div>
              </div>

              {/* Free 15-Minute Discovery Call Card */}
<div className="group relative">
  <div className="absolute -inset-1 bg-gradient-to-r from-[#4f5fb0] to-[#c850c0] rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>

  <div className="relative flex flex-col sm:flex-row items-center sm:items-start p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl transition-all duration-500 hover:scale-[1.02] transform-gpu">

    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center text-[#4f5fb0] mb-6 sm:mb-0 sm:mr-8 flex-shrink-0 shadow-inner">
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3M5 11h14M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
        />
      </svg>
    </div>
<div className="flex-grow text-center sm:text-left">
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
  <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">
    Free 15-Minute Discovery Call
  </h4>

  <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-purple-50 rounded-full border border-purple-100">
    <span className="w-1.5 h-1.5 bg-[#c850c0] rounded-full animate-pulse"></span>
    <span className="text-[8px] font-black text-[#7c3aed] uppercase tracking-wider">
      No Obligation
    </span>
  </div>
</div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">
       Let’s Discuss Your Microsoft 365 Needs
      </h3>

      <p className="text-slate-600 mb-8 font-medium leading-relaxed text-sm">
        Schedule a complimentary 15-minute call to discuss your SharePoint, Microsoft 365, intranet, workflow automation, Copilot, document management, or operational efficiency goals. We'll identify the best next step.
      </p>

      <a
        href="https://outlook.office.com/bookwithme/user/476d6b0ef7b1437393a63c08dd37e97f@nexaplexwebhub.com/meetingtype/gvU-45cccEux3i7eDDbA_g2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#4f5fb0] to-[#c850c0] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.15em] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group/btn w-full sm:w-auto"
      >
        <span>Book a Free Discovery Call</span>

        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
    {/* What We Can Help With Card */}
<div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-7">
<h4 className="text-xs font-black text-[#4f5fb0] uppercase tracking-[0.2em] mb-3">
  What We Can Help With
</h4>

  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-5">
    Explore new requirements, modernization opportunities, or existing Microsoft 365 needs.
  </p>

  <ul className="space-y-3 text-sm text-slate-700 font-medium">
    <li className="flex items-start gap-3">
      <span className="w-2 h-2 bg-[#4f5fb0] rounded-full mt-2 flex-shrink-0"></span>
      <span>SharePoint intranets and portal development</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="w-2 h-2 bg-[#4f5fb0] rounded-full mt-2 flex-shrink-0"></span>
      <span>Power Automate workflows and approvals</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="w-2 h-2 bg-[#4f5fb0] rounded-full mt-2 flex-shrink-0"></span>
      <span>Microsoft 365 governance and document management</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="w-2 h-2 bg-[#4f5fb0] rounded-full mt-2 flex-shrink-0"></span>
      <span>Copilot readiness and process modernization</span>
    </li>
  </ul>

  <p className="text-xs text-slate-500 font-semibold mt-5 pt-5 border-t border-slate-100">
    Not sure where to begin? The free discovery call will help identify the best next step.
  </p>
</div>          
            </div>
          </div>

       <div className="flex-1 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.08)] border border-slate-50 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4f5fb0] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                Project Inquiry Form
              </div>
              <form 
                onSubmit={handleSubmit}
                className="space-y-6 mt-4"
              >
                {selectedPackage && (
                  <div className="rounded-2xl border border-[#c9a55c]/45 bg-[#fffaf0] px-5 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9a6f20]">
                      Selected Service Package
                    </p>
                    <p className="mt-1 font-bold text-[#281747]">
                      {selectedPackage.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Your inquiry will include this package selection automatically.
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#4f5fb0] focus:border-transparent outline-none transition-all font-medium text-slate-900"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#4f5fb0] focus:border-transparent outline-none transition-all font-medium text-slate-900"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#4f5fb0] focus:border-transparent outline-none transition-all font-medium text-slate-900"
                    placeholder="Healthcare Org Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Primary Project Focus</label>
                  <div className="relative">
                    <select 
                      name="service"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#4f5fb0] focus:border-transparent outline-none appearance-none font-medium text-slate-900 transition-all cursor-pointer"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                     <option value="" disabled>
Select your primary project initiative
</option>
<option value="sharepoint-intranet-design">SharePoint Intranet & Portal Systems</option>
<option value="document-management-system">Document Management System (DMS)</option>
<option value="workflow-automation">Workflow Automation (Power Automate)</option>
<option value="m365-architecture-governance">Microsoft 365 Architecture & Governance</option>
<option value="teams-collaboration">Teams & Collaboration Architecture</option>
<option value="migration">Migration (On-Prem / Legacy to M365)</option>
<option value="copilot-automation">M365 & Copilot Automation</option>
<option value="audit-strategy">Audit & Strategy (Not Sure / Need Guidance)</option>
<option value="other">Other (Custom Project)</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Project Overview</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-[#4f5fb0] focus:border-transparent outline-none transition-all font-medium text-slate-900 resize-none"
                    placeholder="Briefly describe your goals, challenges, or timeline."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="space-y-3">
                  <button 
                    type="submit"
                   className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-black py-5 rounded-2xl shadow-xl hover:from-[#4f5fb0] hover:to-[#c850c0] transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 active:scale-[0.99] transform-gpu text-sm uppercase tracking-[0.2em]"
                  >
                    Submit Project Inquiry
                  </button>
                  <p className="text-center text-[11px] font-medium text-slate-500 leading-tight">
                    We typically respond within one business day. Your information is handled confidentially.
                  </p>
                </div>
                <p className="text-center text-[10px] font-bold text-slate-400 mt-8 uppercase tracking-widest">
                  Secure Data Protocol Active
                </p>
              </form>
            </div>
{/* Redesigned Payment-First Strategy Audit Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4f5fb0] to-[#c0304d] rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col sm:flex-row items-center sm:items-start p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl flex items-center justify-center text-[#4f5fb0] mb-6 sm:mb-0 sm:mr-8 flex-shrink-0 shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <p className="text-sm font-bold text-[#4f5fb0] mb-2">
  Need deeper technical guidance?
</p>
                    <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">30-Minute Strategy Audit</h4>
                      <div className="flex items-center space-x-1 px-2 py-0.5 bg-blue-50 rounded-full border border-blue-100">
                        <span className="w-1.5 h-1.5 bg-[#4f5fb0] rounded-full animate-pulse"></span>
                        <span className="text-[8px] font-black text-[#4f5fb0] uppercase tracking-tighter">Architect Review</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-slate-900 mb-1">$100.00 <span className="text-sm font-medium text-slate-400">/ Strategy Audit</span></p>
                      <p className="text-[11px] font-black text-[#4f5fb0] uppercase tracking-[0.15em] leading-snug">
                        100% of your audit investment is credited toward your project if you proceed within 7 days.
                      </p>
                    </div>

                    <p className="text-slate-600 mb-8 font-medium leading-relaxed text-sm">
                      Secure a focused 30-minute strategy audit with Shital Parikh to identify workflow gaps, SharePoint architecture risks, and Microsoft 365 automation opportunities. This audit delivers clear, actionable recommendations tailored to your environment. Payment is required to reserve your slot; you will be automatically redirected to our real-time calendar immediately after Stripe checkout.
                    </p>
                    
                    <a 
                      href="https://book.stripe.com/7sYeVceJt9567lW3uT9bO00" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-slate-200 hover:shadow-xl hover:bg-[#4f5fb0] transition-all duration-300 hover:scale-105 active:scale-95 group/btn w-full sm:w-auto"
                    >
                      <span>BOOK STRATEGY AUDIT</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Compact, Perfectly Centered "Letterbox" Service Commitment Seal */}
        <div className="max-w-[700px] mx-auto">
          <div className="bg-[#050a1a] rounded-2xl px-10 py-8 border border-[#4f5fb0]/20 shadow-2xl relative overflow-hidden text-center">
            {/* Subtle background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Header Label - BOLD CAPITALIZED WHITE */}
              <h4 className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.5em] mb-4 leading-none">
                SERVICE COMMITMENT
              </h4>
              
              {/* Body Text - PURE WHITE MAXIMUM CONTRAST */}
              <p className="text-white text-sm md:text-base font-medium leading-relaxed antialiased">
               All audit details and tenant architecture reviews are handled under strict fiduciary standards and will never be shared. Every engagement is focused on technical ROI, operational clarity, and platform scalability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
