import React from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Foundation',
    eyebrow: 'Focused start',
    price: 'Starting at $3,500',
    description: 'For organizations ready to improve one important Microsoft 365 workflow or collaboration experience with senior-led guidance.',
    includes: ['Discovery & requirements workshop', 'One focused solution roadmap', 'Architecture recommendations', 'Implementation priorities'],
    featured: false,
  },
  {
    name: 'Accelerate',
    eyebrow: 'Most popular',
    price: 'Starting at $7,500',
    description: 'For teams ready to connect SharePoint, workflow automation, and practical governance into a clearer operating system.',
    includes: ['Strategic discovery & solution blueprint', 'SharePoint or Teams experience design', 'Workflow automation plan', 'Governance & adoption recommendations', 'Founder-led implementation oversight'],
    featured: true,
  },
  {
    name: 'Transform',
    eyebrow: 'Enterprise engagement',
    price: 'Custom scope',
    description: 'For complex Microsoft 365 environments that need a multi-workstream transformation, migration, or long-term optimization partner.',
    includes: ['Executive-level discovery', 'Custom technical architecture', 'Phased implementation plan', 'Security, governance & scale strategy', 'Ongoing senior advisory support'],
    featured: false,
  },
];

const PackagesPage: React.FC = () => (
  <div className="min-h-screen bg-[#f7f5f0] pt-32 pb-24 overflow-hidden">
    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#c9a55c]/10 blur-3xl pointer-events-none" />
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xs uppercase tracking-[0.24em] font-black text-[#b88b35] mb-5">Premium service packages</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#102a43] leading-tight mb-6">Choose the level of senior expertise your next initiative needs.</h1>
        <p className="text-lg sm:text-xl leading-relaxed text-slate-600">Every engagement is tailored to your environment. These starting points make it easier to begin with a clear, high-confidence next step.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
        {packages.map((pkg) => (
          <article key={pkg.name} className={`relative flex flex-col rounded-[2rem] p-8 sm:p-10 border transition-transform duration-500 hover:-translate-y-2 ${pkg.featured ? 'bg-[#102a43] text-white border-[#c9a55c] shadow-[0_32px_70px_-24px_rgba(16,42,67,0.65)] lg:-translate-y-4' : 'bg-white/85 text-[#102a43] border-[#c9a55c]/35 shadow-xl shadow-slate-200/50'}`}>
            {pkg.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#c9a55c] text-[#102a43] px-5 py-2 text-[11px] font-black uppercase tracking-[0.18em] whitespace-nowrap">Recommended starting point</div>}
            <p className={`text-xs uppercase tracking-[0.2em] font-black mb-5 ${pkg.featured ? 'text-[#e8cf98]' : 'text-[#b88b35]'}`}>{pkg.eyebrow}</p>
            <h2 className="text-3xl font-bold mb-3">{pkg.name}</h2>
            <p className={`text-2xl font-black mb-6 ${pkg.featured ? 'text-[#e8cf98]' : 'text-[#102a43]'}`}>{pkg.price}</p>
            <p className={`leading-relaxed mb-8 ${pkg.featured ? 'text-slate-200' : 'text-slate-600'}`}>{pkg.description}</p>
            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.includes.map((item) => <li key={item} className={`flex items-start gap-3 text-sm font-medium ${pkg.featured ? 'text-white' : 'text-slate-700'}`}><span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${pkg.featured ? 'bg-[#c9a55c]' : 'bg-[#b88b35]'}`} />{item}</li>)}
            </ul>
            <Link to="/contact" className={`w-full text-center rounded-full px-6 py-4 font-bold transition-all duration-300 ${pkg.featured ? 'bg-[#c9a55c] text-[#102a43] hover:bg-[#e0c17d]' : 'bg-[#102a43] text-white hover:bg-[#173f66]'}`}>Request This Package</Link>
          </article>
        ))}
      </div>

      <div className="mt-14 max-w-3xl mx-auto text-center">
        <p className="text-sm text-slate-500">Draft package structure for the test site. Final price, scope, and direct checkout links can be confirmed before publishing to your live website.</p>
      </div>
    </section>
  </div>
);

export default PackagesPage;
