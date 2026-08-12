import React from 'react';
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'sharepoint',
    title: 'SharePoint Intranet & Portal Systems',
   description: 'Custom-architected SharePoint intranet systems designed to centralize communication, improve collaboration, and enhance operational visibility.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    features: [
  'Intranet Architecture',
  'Content Management',
  'Enterprise Search',
  'Access Governance',
]
  },
  {
    id: 'm365-automation',
    title: 'Microsoft 365 Workflow Automation & Copilot',
  description: 'Automate business processes using Microsoft Copilot and Power Platform workflows designed to reduce manual effort, improve speed, and increase operational efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    features: [
  'Process Automation Design',
  'Copilot & AI Integration',
  'Workflow Orchestration',
  'Approval & Task Automation',
]
  },
  {
    id: 'microsoft-365-governance-security',
    title: 'Microsoft 365 Governance & Security Frameworks',
    description: 'Design and implement governance frameworks, security controls, and compliance strategies to protect your Microsoft 365 environment and support long-term scalability.',
    imageUrl: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    features: [
 'Permission & Access Control',
  'Compliance & Retention Policies',
  'Security & Risk Management',
  'Governance Frameworks'
]
  },
  {
    id: 'microsoft-365-managed-services',
    title: 'Managed Microsoft 365 & Portal Support',
   description: 'Proactive Microsoft 365 and portal support designed to improve system reliability, strengthen security, and maintain long-term operational continuity.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    features: [
     'Proactive System Monitoring',
  'Security & Compliance Updates',
  'Performance Optimization',
  'Ongoing Platform Support'
]
  },
  {
    id: 'microsoft-teams-governance',
    title: 'Microsoft Teams & Collaboration Architecture',
   description: 'Design Microsoft Teams environments with clear collaboration structure, governance controls, and scalable architecture aligned to your organization.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    features: [
'Collaboration Strategy',
  'Access Management',
  'Security Controls',
  'Team Architecture'
]
  },
  {
    id: 'microsoft-365-business-applications',
    title: 'Custom Microsoft 365 Business Applications',
    description: 'Build custom Microsoft 365 business applications that streamline internal processes, centralize data, and improve productivity across teams.',
  imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    features: ['Custom Business Applications',
  'Forms & Data Capture',
  'Internal Process Tools',
  'Operational App Design']
  },
  {
    id: 'microsoft-365-migration-services',
    title: 'Microsoft 365 Data & Platform Migration',
    description: 'Plan and execute Microsoft 365 migrations that protect data integrity, minimize disruption, and support a smooth transition from legacy platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
    ),
    features: [
  'Migration Strategy & Planning',
  'Data Integrity & Validation',
  'Minimal Downtime Execution',
  'Seamless Cloud Transition'
]
  },
  {
    id: 'business-process-optimization',
    title: 'Operational Process & Systems Optimization',
    description: 'Optimize operational systems and workflows to eliminate bottlenecks, improve visibility, and create scalable business processes across your organization.',
    imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
   features: [
 'Process Assessment',
  'Workflow Optimization',
  'Operational Visibility',
  'Scalable System Design'
]
  }
];



export const BRAND_COLORS = {
  primary: 'blue-600',
  secondary: 'pink-400',
  dark: 'slate-900',
  light: 'slate-50',
};
