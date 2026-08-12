import React from 'react';

const testimonials = [
  {
    tag: 'ACADEMIC & INSTITUTIONAL LEADERSHIP',
    quote:
      'Shital is a content expert in Microsoft 365 migration, SharePoint, and navigating complex digital and IT environments. She is experienced, qualified, and dependable. Her strong project management and meticulous precision are exactly what organizations need to advance their IT initiatives.',
    initials: 'CP',
    initialsBg: 'from-emerald-600 to-emerald-500',
    name: 'Dr. Christy P.',
    title: 'President | Academic Institution',
  },
  {
    tag: 'GLOBAL BRAND & AGENCY AUTHORITY',
    quote:
      'Shital reported directly to me during the launch of our high-performance intranet portal in a $450M agency environment. Her technical precision and architectural expertise ensured a scalable, high-performing foundation aligned with enterprise standards.',
    initials: 'JG',
    initialsBg: 'from-blue-600 to-indigo-500',
    name: 'Jennifer G.',
    title: 'Former DVP | $450M Global Brand Agency',
  },
  {
    tag: 'HEALTHCARE OPERATIONS & DIGITAL INFRASTRUCTURE',
    quote:
      'Shital architected a secure and scalable Microsoft 365 ecosystem supporting our 35+ healthcare locations. Her work established a strong operational foundation, improving consistency, efficiency, and confidence across our clinical teams.',
    initials: 'MN',
    initialsBg: 'from-pink-600 to-rose-500',
    name: 'Melissa N.',
    title: 'Director of Clinical Operations | 35+ Location Healthcare Organization',
  },
  {
    tag: 'GOVERNANCE & COMPLIANCE IN HEALTHCARE',
    quote:
      'Shital established a governance-driven SharePoint Online framework and 24/7 intranet support model for our 35+ site healthcare network. Her expertise ensured compliance, operational control, and long-term stability in a regulated environment.',
    initials: 'YN',
    initialsBg: 'from-teal-600 to-emerald-500',
    name: 'Yoko N.',
    title: 'Governance Lead | Multi-Site Healthcare Network',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted by Healthcare, Enterprise & Academic Clients
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-[#4f5fb0] to-[#c0304d] rounded-full mx-auto mt-4 mb-6"></div>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Insights from organizations that partnered with Shital Parikh on SharePoint, Microsoft 365, governance, and digital workplace solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)] p-8 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-20px_rgba(15,23,42,0.18)]"
            >
              {/* Tag */}
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4f5fb0] mr-2"></span>
                <span className="text-[10px] md:text-[11px] font-black tracking-[0.18em] text-slate-700 uppercase leading-tight">
                  {item.tag}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-lg md:text-[19px] leading-9 font-semibold italic min-h-[220px]">
                “{item.quote}”
              </blockquote>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.initialsBg} text-white flex items-center justify-center font-black text-lg shadow-lg flex-shrink-0`}
                >
                  {item.initials}
                </div>

                <div className="ml-4">
                  <p className="font-bold text-slate-900 text-base">{item.name}</p>
                  <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.14em] text-slate-400 leading-relaxed">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
