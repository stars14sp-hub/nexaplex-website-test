import React from 'react';
import { Link } from 'react-router-dom';

type PortfolioItem = {
  title: string;
  category: string;
  clientType: string;
  description: string;
  features: string[];
  image: string;
  tag: string;
  footerMeta: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Healthcare Intranet Modernization',
    category: 'SharePoint Intranet',
    clientType: 'Multi-location Healthcare Organization',
    description:
      'Designed and modernized a SharePoint Online intranet that centralized internal communication, department resources, and operational content for a growing healthcare environment.',
    features: [
      'Department portal structure',
      'Branded communication experience',
      'Document and resource visibility',
      'Scalable governance foundation',
    ],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1400',
    tag: 'Healthcare Operations',
    footerMeta: 'SharePoint Intranet • Department Portals',
  },
  {
    title: 'Operational Intake & Workflow Automation System',
    category: 'Workflow Automation',
    clientType: 'Operations Team',
    description:
      'Built a structured intake and tracking process using Microsoft Forms, SharePoint Lists, and Power Automate to reduce manual follow-up and improve workflow visibility.',
    features: [
      'Structured intake design',
      'Automated request routing',
      'Status-based tracking',
      'Reduced email dependency',
    ],
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400',
    tag: 'Intake Automation',
    footerMeta: 'Forms Intake • Workflow Routing',
  },
  {
    title: 'Department Portal Rollout Strategy',
    category: 'SharePoint Architecture',
    clientType: 'Leadership & Department Stakeholders',
    description:
      'Planned and deployed repeatable department site structures with streamlined navigation, reusable layouts, and a consistent user experience across teams.',
    features: [
      'Reusable site architecture',
      'Standardized layout approach',
      'Improved user navigation',
      'Future-ready scalability',
    ],
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1400',
    tag: 'Portal Architecture',
    footerMeta: 'Information Architecture • Navigation Design',
  },
  {
    title: 'Request Tracking & Operational Visibility',
    category: 'Business Process Automation',
    clientType: 'Service & Maintenance Operations',
    description:
      'Implemented a SharePoint-based request tracking solution supported by Forms and workflow automation to improve accountability, visibility, and operational follow-through.',
    features: [
      'Centralized request capture',
      'Workflow-based process logic',
      'Status ownership visibility',
      'Reporting-ready structure',
    ],
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400',
    tag: 'Operational Tracking',
    footerMeta: 'Request Tracking • Operational Visibility',
  },
  {
    title: 'Document Management & Metadata Framework',
    category: 'Microsoft 365 Governance',
    clientType: 'Growing Business Environment',
    description:
      'Created a cleaner SharePoint document structure with lightweight metadata, easier file discovery, and practical governance recommendations for long-term maintainability.',
    features: [
      'Improved file organization',
      'Lightweight metadata structure',
      'Reduced folder sprawl',
      'Governance-ready design',
    ],
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400',
    tag: 'Document Governance',
    footerMeta: 'Metadata Strategy • Document Governance',
  },
  {
    title: 'Microsoft 365 Advisory & Solution Planning',
    category: 'Consulting & Strategy',
    clientType: 'Small-to-Mid-Sized Businesses',
    description:
      'Advised clients on SharePoint architecture, workflow design, intranet planning, and scalable Microsoft 365 implementation decisions aligned with business goals.',
    features: [
      'Solution architecture guidance',
      'Workflow planning',
      'Implementation roadmaps',
      'Scalable system direction',
    ],
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1400',
    tag: 'Solution Strategy',
    footerMeta: 'Advisory Services • Solution Planning',
  },
];

const valuePoints = [
  {
    title: 'Production-Ready Architecture',
    description:
      'Every solution is designed to support real teams, real processes, and long-term operational use.',
  },
  {
    title: 'Workflow-First Thinking',
    description:
      'The focus is not just on pages and lists, but on how work moves through the organization.',
  },
  {
    title: 'Scalable Microsoft 365 Design',
    description:
      'Systems are structured for governance, usability, maintainability, and future growth.',
  },
];

const gradientDotClass =
  'bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 shadow-[0_6px_14px_rgba(99,102,241,0.45)]';

const PortfolioPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-14 lg:pt-36 lg:pb-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-14 items-start">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-[0.22em] rounded-full mb-6 shadow-sm">
                Proven Results
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.98] text-slate-900 mb-8">
                <span className="block">Operational Impact.</span>
                <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                  Microsoft 365 Engineered Right.
                </span>
              </h1>

              <p className="text-lg md:text-[1.65rem] text-slate-600 max-w-3xl leading-relaxed md:leading-relaxed mb-6">
  NexaPlex Web Hub helps healthcare organizations and growing businesses modernize operations through SharePoint intranets, Microsoft 365 architecture, Power Automate workflow automation, and AI-powered business solutions designed for long-term scalability and efficiency. These case studies reflect our approach to building secure, scalable solutions for healthcare and growth-focused organizations.
</p>

              <p className="text-sm md:text-base text-slate-400 font-medium">
                SharePoint Intranets • Workflow Automation • Microsoft 365 Architecture
              </p>
            </div>

            <div className="xl:pt-10">
              <div className="group relative rounded-[2.7rem] bg-gradient-to-br from-[#07142b] via-[#0a1733] to-[#101f47] border border-white/10 p-7 md:p-8 shadow-[0_28px_80px_-28px_rgba(15,23,42,0.65)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_36px_95px_-30px_rgba(15,23,42,0.72)]">
                <div className="absolute inset-0 rounded-[2.7rem] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.10),transparent_36%)] pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-5">
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full mr-3 shadow-[0_0_14px_rgba(52,211,153,0.8)]"></div>
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-white/85">
                      Enterprise Security &amp; Confidentiality
                    </p>
                  </div>

                  <p className="text-[15px] md:text-base text-slate-200 leading-8">
                    Many of the systems we design support regulated environments and
                    sensitive operational workflows. To protect client confidentiality,
                    examples are presented at a strategic level. Detailed architecture
                    and technical implementation discussions are available during
                    discovery or under NDA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Focus */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 shadow-sm">
                Delivery Focus
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Systems designed to improve operations, structure, and user experience
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                My work focuses on practical Microsoft 365 solutions that solve real
                business challenges. That includes SharePoint intranet portals,
                departmental site structures, Microsoft Forms intake systems,
                Power Automate workflow logic, document management frameworks,
                and scalable architecture planning.
              </p>
            </div>

            <div className="bg-slate-50 rounded-[2.7rem] border border-slate-100 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What clients typically need help with
              </h3>

              <div className="space-y-5">
                {[
                  {
                    title: 'SharePoint Intranet Portals',
                    description:
                      'Modern communication and department portal experiences that improve internal visibility.',
                  },
                  {
                    title: 'Workflow Automation',
                    description:
                      'Power Automate solutions that reduce manual work and improve process consistency.',
                  },
                  {
                    title: 'Forms & Tracking Systems',
                    description:
                      'Structured intake and tracking systems designed around real operational workflows.',
                  },
                  {
                    title: 'Microsoft 365 Architecture',
                    description:
                      'Scalable solution design focused on governance, maintainability, and long-term value.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group/item flex items-start p-4 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_-18px_rgba(99,102,241,0.35)]"
                  >
                    <div
                      className={`w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 ${gradientDotClass} group-hover/item:scale-110 transition-transform`}
                    ></div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pt-20 pb-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 shadow-sm">
              Selected Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Case studies aligned with business outcomes
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              These examples reflect the type of systems I build for clients who need
              structured Microsoft 365 environments, stronger operational visibility,
              and scalable internal solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-[0_24px_60px_-28px_rgba(15,23,42,0.22)] hover:shadow-[0_38px_75px_-30px_rgba(15,23,42,0.28)] hover:-translate-y-2 transition-all duration-500 h-full"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"></div>

                  <div className="absolute top-5 left-5 inline-block px-4 py-1.5 bg-white/95 backdrop-blur text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                    {item.category}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white shadow-[0_16px_30px_-16px_rgba(15,23,42,0.45)]">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${gradientDotClass}`}
                      ></span>
                      <span className="text-[11px] font-black uppercase tracking-widest">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col h-[calc(100%-16rem)]">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-3">
                    Client Type: {item.clientType}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="group/feature flex items-center p-3 bg-slate-50 border border-slate-100 rounded-2xl shadow-[0_10px_20px_-16px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_30px_-18px_rgba(99,102,241,0.28)]"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${gradientDotClass} group-hover/feature:scale-110 transition-transform`}
                        ></div>
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 border-t border-slate-100">
                    <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]">
                      {item.footerMeta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 shadow-sm">
              Implementation Value
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Built for production, not just presentation
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each solution is designed with real adoption, governance, and long-term
              usability in mind so clients can move from ideas to operational systems
              with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePoints.map((point) => (
              <div
                key={point.title}
                className="group/value bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)] hover:-translate-y-2 hover:shadow-[0_28px_56px_-24px_rgba(99,102,241,0.22)] transition-all duration-400"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_18px_28px_-12px_rgba(99,102,241,0.45)] group-hover/value:scale-105 transition-transform">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {point.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* CTA Section */}
<section className="pt-12 pb-24 bg-white">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.58)] relative overflow-hidden group">

      {/* Background effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.10),transparent_28%)] pointer-events-none"></div>

      <div className="relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Need a system like this for your organization?
        </h2>

        {/* Description */}
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Whether you need a SharePoint intranet, Microsoft Forms intake process,
          Power Automate workflow, or a structured Microsoft 365 architecture,
          I can help you design the right implementation path.
        </p>

        {/* ✅ SPACE ABOVE BUTTON */}
        <div className="mt-12">
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
  </div>
</section>
    </div>
  );
};

export default PortfolioPage;
