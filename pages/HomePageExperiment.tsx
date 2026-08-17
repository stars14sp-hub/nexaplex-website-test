import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const solutionCards = [
  {
    title: 'SharePoint & Employee Portals',
    description:
      'Centralize communication, resources, policies, and operational information in a structured employee experience.',
    path: '/services/sharepoint',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12M8 9h8M8 13h5M3 19h18" />
      </svg>
    ),
  },
  {
    title: 'Workflow Automation',
    description:
      'Replace repetitive requests, approvals, and manual follow-up with scalable Power Automate workflows.',
    path: '/services/m365-automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 5h7m0 0-2.5-2.5M13 5l-2.5 2.5M18 19h-7m0 0 2.5 2.5M11 19l2.5-2.5M6 5v5a2 2 0 0 0 2 2h8a2 2 0 0 1 2 2v5" />
      </svg>
    ),
  },
  {
    title: 'Document Management',
    description:
      'Organize business content with structured libraries, metadata, permissions, versioning, and governance.',
    path: '/solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l4 4v14H7zM14 3v5h5M10 12h5M10 16h5" />
      </svg>
    ),
  },
  {
    title: 'Microsoft 365 Administration & Governance',
    description:
      'Strengthen permissions, governance, platform administration, and long-term Microsoft 365 reliability.',
    path: '/services/microsoft-365-governance-security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.8 2.9 8.2 7 10 4.1-1.8 7-5.2 7-10V6l-7-3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI & Copilot Solutions',
    description:
      'Prepare processes, information, and teams for practical Microsoft 365 Copilot and AI adoption.',
    path: '/services/m365-automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const CompactSolutions: React.FC = () => (
  <section className="relative bg-[#f7f5ef] py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#a77d27]">
          Core Microsoft 365 Solutions
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#071521] sm:text-4xl lg:text-5xl">
          Solutions Built Around Your Operations
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
          Practical Microsoft 365 solutions designed to streamline work, strengthen information management, and give growing teams a more dependable digital workplace.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
        {solutionCards.map((card) => (
          <Link
            key={card.title}
            to={card.path}
            className="group flex min-h-[300px] flex-col rounded-[2rem] border border-[#dfd7c5] bg-white p-7 shadow-[0_18px_45px_-32px_rgba(7,21,33,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9a55c]/70 hover:shadow-[0_26px_55px_-28px_rgba(7,21,33,0.4)]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9a55c]/30 bg-[#f7f5ef] text-[#0f6f9f] transition-colors duration-300 group-hover:bg-[#071521] group-hover:text-white">
              {card.icon}
            </div>
            <h3 className="mb-3 text-lg font-bold leading-tight text-[#071521]">
              {card.title}
            </h3>
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              {card.description}
            </p>
            <span className="mt-auto pt-7 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f6f9f]">
              Explore Solution <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/solutions"
          className="inline-flex items-center justify-center rounded-full bg-[#071521] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f6f9f]"
        >
          Explore All Solutions
        </Link>
      </div>
    </div>
  </section>
);

const HomePageExperiment: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mountNode, setMountNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const sections = wrapper.querySelectorAll(':scope > div > section');
    const heroSection = sections.item(0) as HTMLElement | null;
    const existingSolutionsSection = sections.item(1) as HTMLElement | null;

    if (!heroSection || !existingSolutionsSection) return;

    existingSolutionsSection.style.display = 'none';

    const mount = document.createElement('div');
    mount.dataset.homeSolutionsExperiment = 'true';
    heroSection.insertAdjacentElement('afterend', mount);
    setMountNode(mount);

    return () => {
      existingSolutionsSection.style.display = '';
      mount.remove();
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <HomePage />
      {mountNode ? createPortal(<CompactSolutions />, mountNode) : null}
    </div>
  );
};

export default HomePageExperiment;
