import React from 'react';

const DigitalCardPage: React.FC = () => {
  const name = 'Shital Parikh';
  const email = 'hello@nexaplexwebhub.com';
  const website = 'https://nexaplexwebhub.com';
  const vcard = ['BEGIN:VCARD','VERSION:3.0','N:Parikh;Shital;;;','FN:Shital Parikh','ORG:NexaPlex Web Hub, LLC','TITLE:Founder & Lead Microsoft 365 Consultant','EMAIL;TYPE=WORK:'+email,'URL:'+website,'NOTE:SharePoint and Microsoft 365 consulting','END:VCARD'].join('\r\n');
  const saveContact = () => {
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'Shital-Parikh-NexaPlex.vcf'; document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <section className="min-h-[75vh] bg-slate-50 px-4 pb-20 pt-32">
    <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="bg-gradient-to-br from-[#102a43] to-[#0b5f93] px-8 py-12 text-center text-white">
        <div className="mx-auto mb-6 rounded-2xl bg-white px-5 py-4 shadow-md"><img src={`${import.meta.env.BASE_URL}images/NexaPlex_Logo_Horizontal_Web.webp`} alt="NexaPlex Web Hub logo" className="mx-auto h-auto w-full max-w-[250px] object-contain" /></div>
        <h1 className="mt-6 text-3xl font-bold">{name}</h1>
        <p className="mt-2 text-sky-100">Founder & Lead Microsoft 365 Consultant</p>
        <p className="mt-3 text-sm text-sky-100">SharePoint · Microsoft 365 · Workflow Automation</p>
      </div>
      <div className="space-y-4 p-7">
        <button onClick={saveContact} className="w-full rounded-xl bg-[#0b5f93] px-5 py-4 font-semibold text-white hover:bg-[#084b76]">Save to Contacts</button>
        <a className="block rounded-xl border border-slate-200 px-5 py-3 text-center font-medium text-slate-800" href={'mailto:'+email}>Email Me</a>
        <a className="block rounded-xl border border-slate-200 px-5 py-3 text-center font-medium text-slate-800" href={website} target="_blank" rel="noopener noreferrer">Visit Website</a>
        <a className="block rounded-xl border border-slate-200 px-5 py-3 text-center font-medium text-slate-800" href="/contact">Discuss a Project</a>
        <p className="pt-3 text-center text-xs text-slate-500">No app or account required. Saving a contact is always your choice.</p>
      </div>
    </div>
  </section>;
};
export default DigitalCardPage;
