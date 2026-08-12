import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link to="/" className="text-blue-600 font-bold flex items-center hover:underline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </nav>

        <header className="mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Legal Framework
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-slate-500 font-medium italic">Last Updated: January 1, 2026</p>
        </header>

        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-700 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and NexaPlex Web Hub, LLC (“Company,” “we,” “us,” or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Professional Consulting Services</h2>
            <p className="leading-relaxed">
              NexaPlex Web Hub, LLC provides expert-level consulting in Microsoft 365 ecosystem management, SharePoint architecture, workflow automation, and custom web development. Our services are tailored to the specific operational needs of our clients. All professional engagements are governed by a separate Master Service Agreement (MSA) or Statement of Work (SOW) which takes precedence over these general website terms in the event of a conflict.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">3. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States.
            </p>
          </section>

          <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Software & Environments</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our consulting often involves the configuration of third-party platforms, primarily Microsoft 365 and SharePoint. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Your use of Microsoft 365 is subject to Microsoft's own Service Agreements.</li>
              <li>NexaPlex is not responsible for service outages, data loss, or platform changes initiated by Microsoft or other third-party vendors.</li>
              <li>Administrative access provided to us is used solely for the fulfillment of agreed-upon consulting objectives.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">5. User Representations</h2>
            <p className="leading-relaxed">
              By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">6. Limitation of Liability</h2>
            <p className="leading-relaxed font-medium text-slate-900 italic">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR OUR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">7. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms and your use of the Site and our services are governed by and construed in accordance with the laws of the State of Texas applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">8. Modifications and Interruptions</h2>
            <p className="leading-relaxed">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">9. Contact Us</h2>
            <p className="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
              <p className="font-bold text-xl mb-2">NexaPlex Web Hub, LLC</p>
              <p className="text-blue-200">Legal Department</p>
              <p className="mt-4">Email: legal@nexaplexwebhub.com</p>
              <p>Registered Office: Texas, USA</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;