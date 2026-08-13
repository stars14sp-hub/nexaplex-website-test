import React from 'react';
import { Link } from 'react-router-dom';

const servicePackages = [
  {
    eyebrow: 'Workflow Automation',
    title: 'Workflow Automation Starter',
    price: 'Starting at $2,500',
    description:
      'Replace manual requests, approvals, email follow-ups, and spreadsheet tracking with a structured Microsoft 365 workflow.',
    features: [
      'Discovery and workflow requirements review',
      'Microsoft Forms or SharePoint intake experience',
      'SharePoint tracking list',
      'Power Automate workflow',
      'Notifications and approval routing',
      'Testing, deployment, and documentation',
    ],
    packageId: 'workflow-automation',
    featured: false,
  },
  {
    eyebrow: 'Document Management',
    title: 'Document Management Foundation',
    price: 'Starting at $4,500',
    description:
      'Create a more structured, searchable, and governed approach to managing business documents in SharePoint.',
    features: [
      'Document library architecture',
      'Metadata and content organization',
      'Permissions and access recommendations',
      'Views, filtering, and versioning',
      'Governance recommendations',
      'Administrator handoff and training',
    ],
    packageId: 'document-management',
    featured: false,
  },
  {
    eyebrow: 'Most Popular',
    title: 'Employee Portal Launch',
    price: 'Starting at $8,500',
    description:
      'Launch a professionally designed SharePoint employee portal for communication, resources, policies, documents, and operational information.',
    features: [
      'SharePoint portal strategy and architecture',
      'Homepage and navigation design',
      'News, resources, and quick links',
      'Policies and document libraries',
      'Permissions planning',
      'Launch support and administrator training',
    ],
    packageId: 'employee-portal',
    featured: true,
  },
  {
    eyebrow: 'Ongoing Support',
    title: 'Microsoft 365 Optimization & Support',
    price: 'Starting at $750/month',
    description:
      'Ongoing senior-level Microsoft 365 support for organizations that need continuous improvement, administration, and optimization.',
    features: [
      'SharePoint updates and enhancements',
      'Workflow monitoring and improvements',
      'Permissions and administration support',
      'Microsoft 365 optimization',
      'Advisory recommendations',
      'Ongoing senior consultant support',
    ],
    packageId: 'microsoft-365-support',
    featured: false,
  },
];

const PackagesPage: React.FC = () => (
  <main className="min-h-screen overflow-hidden bg-[#f7f5f0]">
    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[#c9a55c]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#6f3f8f]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#9a6f20]">
          Microsoft 365 & SharePoint Service Packages
        </p>
        <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight text-[#102a43] sm:text-5xl lg:text-6xl">
          Choose a clear starting point for your next Microsoft 365 initiative.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          Practical, senior-led packages for SharePoint portals, workflow automation,
          document management, and ongoing Microsoft 365 optimization—tailored to
          your environment and business goals.
        </p>
        <Link
          to="/contact"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-[#281747] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#281747]/15 transition-all hover:-translate-y-0.5 hover:bg-[#3b215f]"
        >
          Discuss Your Needs
        </Link>
      </div>
    </section>

    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.title}
              className={`relative flex flex-col rounded-[2rem] border p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 ${
                pkg.featured
                  ? 'border-[#c9a55c] bg-[#281747] text-white shadow-[0_32px_70px_-24px_rgba(40,23,71,0.65)]'
                  : 'border-[#c9a55c]/35 bg-white/90 text-[#102a43] shadow-xl shadow-slate-200/50'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-8 rounded-full bg-[#f5d58f] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#281747]">
                  Recommended Starting Point
                </div>
              )}

              <p
                className={`mb-4 text-[11px] font-black uppercase tracking-[0.2em] ${
                  pkg.featured ? 'text-[#f5d58f]' : 'text-[#9a6f20]'
                }`}
              >
                {pkg.eyebrow}
              </p>
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">{pkg.title}</h2>
              <p
                className={`mb-6 text-xl font-black ${
                  pkg.featured ? 'text-[#f5d58f]' : 'text-[#102a43]'
                }`}
              >
                {pkg.price}
              </p>
              <p
                className={`mb-8 leading-relaxed ${
                  pkg.featured ? 'text-violet-100' : 'text-slate-600'
                }`}
              >
                {pkg.description}
              </p>

              <ul className="mb-10 flex-grow space-y-4">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm font-medium sm:text-base ${
                      pkg.featured ? 'text-white' : 'text-slate-700'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                        pkg.featured
                          ? 'bg-[#f5d58f] text-[#281747]'
                          : 'bg-[#281747] text-white'
                      }`}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/contact?package=${pkg.packageId}`}
                className={`mt-auto inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-center font-bold transition-all ${
                  pkg.featured
                    ? 'bg-[#f5d58f] text-[#281747] hover:bg-[#ffe3a4]'
                    : 'bg-[#102a43] text-white hover:bg-[#173f66]'
                }`}
              >
                Request This Package
              </Link>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-sm leading-relaxed text-slate-500">
          Starting prices provide an initial planning range. Final scope and pricing
          depend on your Microsoft 365 environment, integrations, governance needs,
          content volume, licensing, and implementation complexity.
        </p>
      </div>
    </section>

    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#102a43] px-8 py-12 text-center text-white shadow-2xl sm:px-12">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#f5d58f]">
            Custom Engagements
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Planning a larger Microsoft 365 transformation?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-200">
            Multi-site SharePoint architecture, migrations, governance, advanced
            automation, Copilot readiness, and enterprise Microsoft 365 initiatives
            can be scoped as custom engagements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f5d58f] px-8 py-4 font-bold text-[#281747] transition-colors hover:bg-[#ffe3a4]"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default PackagesPage;
