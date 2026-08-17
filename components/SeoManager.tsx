import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
};

const SITE_URL = 'https://nexaplexwebhub.com';
const SOCIAL_IMAGE = `${SITE_URL}/images/nexaplex-social-share-2026.png`;

const seoByPath: Record<string, SeoConfig> = {
  '/': {
    title: 'Microsoft 365 & SharePoint Consultant | NexaPlex Web Hub',
    description:
      'Senior-led Microsoft 365, SharePoint, Power Automate, workflow automation and AI consulting for healthcare organizations and SMBs nationwide.',
    canonicalPath: '/',
  },
  '/solutions': {
    title: 'Microsoft 365 & SharePoint Solutions | NexaPlex Web Hub',
    description:
      'Explore SharePoint intranets, workflow automation, Microsoft 365 governance, document management, migration, Teams and AI solutions from NexaPlex Web Hub.',
    canonicalPath: '/solutions',
  },
  '/packages': {
    title: 'Microsoft 365 & SharePoint Service Packages | NexaPlex',
    description:
      'Explore clear starting-point packages for SharePoint, workflow automation, document management and Microsoft 365 support from NexaPlex Web Hub.',
    canonicalPath: '/packages',
  },
  '/case-studies': {
    title: 'Microsoft 365 & SharePoint Case Studies | NexaPlex',
    description:
      'See how NexaPlex Web Hub applies SharePoint, Microsoft 365 and workflow automation to improve operational structure, collaboration and business processes.',
    canonicalPath: '/case-studies',
  },
  '/about': {
    title: 'About NexaPlex Web Hub | Microsoft 365 Consulting',
    description:
      'Learn about NexaPlex Web Hub, a senior-led Microsoft 365 and SharePoint consultancy focused on scalable intranets, automation and operational systems.',
    canonicalPath: '/about',
  },
  '/contact': {
    title: 'Contact NexaPlex | Microsoft 365 & SharePoint Consultant',
    description:
      'Contact NexaPlex Web Hub to discuss SharePoint, Microsoft 365, Power Automate, document management, governance or AI consulting needs.',
    canonicalPath: '/contact',
  },
};

const upsertMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', href);
};

const SeoManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = seoByPath[pathname] ?? seoByPath['/'];
    const canonicalUrl = `${SITE_URL}${config.canonicalPath === '/' ? '/' : config.canonicalPath}`;

    document.title = config.title;
    upsertMeta('meta[name="description"]', 'name', 'description', config.description);
    upsertCanonical(canonicalUrl);

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', config.title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', config.description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'NexaPlex Web Hub');
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', SOCIAL_IMAGE);

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', config.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', config.description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', SOCIAL_IMAGE);
  }, [pathname]);

  return null;
};

export default SeoManager;
