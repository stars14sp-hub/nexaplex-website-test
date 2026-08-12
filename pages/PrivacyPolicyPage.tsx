import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-500 font-medium italic">Effective Date: January 1, 2026</p>
        </header>

        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-700 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Introduction</h2>
            <p className="leading-relaxed">
              At NexaPlex Web Hub, LLC ("we," "us," or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website nexaplexwebhub.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Information We Collect</h2>
            <p className="mb-4">We collect several types of information from and about users of our Website, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identification:</strong> Name, work email address, company name, and phone number when you request a consultation or strategy session.</li>
              <li><strong>Project Data:</strong> Information you provide regarding your Microsoft 365 environment, SharePoint architecture, or branding goals.</li>
              <li><strong>Usage Details:</strong> IP addresses, browser types, and navigation patterns through cookies and similar tracking technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">3. How We Use Your Information</h2>
            <p className="mb-4">We use information that we collect about you or that you provide to us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us (specifically consulting proposals and strategy sessions).</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer.</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Client Confidentiality & M365 Access</h2>
            <p className="text-blue-800 leading-relaxed italic">
              Special Provision: As a premium consulting firm, we often require administrative access to client Microsoft 365 tenants. We adhere to "Least Privilege Access" principles. Any data viewed during the course of a technical audit or implementation is treated as strictly confidential under the terms of our Master Service Agreement (MSA) and is never stored on external unencrypted systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">5. Data Security</h2>
            <p className="leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. We use SSL (Secure Sockets Layer) technology to encrypt data during transmission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">6. Disclosure of Your Information</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your Personal Identification Information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">7. Contact Information</h2>
            <p className="mb-4">To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="font-bold">NexaPlex Web Hub, LLC</p>
              <p>Attn: Privacy Officer</p>
              <p>Email: hello@nexaplexwebhub.com</p>
              <p>Location: Texas, United States</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;