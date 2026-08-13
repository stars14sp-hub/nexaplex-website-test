import React from 'react';

const OperationalEcosystemVisual: React.FC = () => (
  <div className="relative h-[480px] w-full overflow-hidden rounded-[2.8rem] bg-[#eef6f8]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(85,208,223,.22),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(201,165,92,.20),transparent_30%)]" />
    <svg
      viewBox="0 0 720 540"
      role="img"
      aria-labelledby="ecosystem-title ecosystem-description"
      className="absolute inset-0 h-full w-full"
    >
      <title id="ecosystem-title">Connected Microsoft 365 operational ecosystem</title>
      <desc id="ecosystem-description">SharePoint, automation, document management, and AI connected through one governed digital workplace.</desc>
      <defs>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="1" stopColor="#e8f3f7" stopOpacity="0.94" />
        </linearGradient>
        <linearGradient id="core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b5f93" />
          <stop offset="1" stopColor="#0a2740" />
        </linearGradient>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#071521" floodOpacity="0.16" />
        </filter>
      </defs>

      <g fill="none" stroke="#6aaec7" strokeWidth="2" strokeDasharray="7 9" opacity="0.7">
        <path d="M210 150 C285 150 275 220 335 240" />
        <path d="M510 150 C435 150 445 220 385 240" />
        <path d="M210 390 C285 390 275 320 335 300" />
        <path d="M510 390 C435 390 445 320 385 300" />
      </g>

      <g filter="url(#shadow)">
        <rect x="246" y="176" width="228" height="188" rx="38" fill="url(#core)" />
        <circle cx="360" cy="245" r="38" fill="#ffffff" fillOpacity="0.12" stroke="#55d0df" strokeWidth="2" />
        <path d="M341 247l13 13 27-31" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <text x="360" y="311" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="700">Digital Workplace</text>
        <text x="360" y="337" textAnchor="middle" fill="#b9dce8" fontSize="12" fontWeight="700" letterSpacing="2">GOVERNED • CONNECTED • SCALABLE</text>
      </g>

      {[
        { x: 55, y: 76, title: 'SharePoint', sub: 'Structured knowledge', color: '#0b5f93', icon: 'S' },
        { x: 485, y: 76, title: 'Automation', sub: 'Reliable workflows', color: '#2c7cc9', icon: '↗' },
        { x: 55, y: 346, title: 'Documents', sub: 'Controlled content', color: '#c9a55c', icon: '▤' },
        { x: 485, y: 346, title: 'AI Enablement', sub: 'Practical intelligence', color: '#2399a8', icon: '✦' },
      ].map((item) => (
        <g key={item.title} filter="url(#shadow)">
          <rect x={item.x} y={item.y} width="180" height="118" rx="24" fill="url(#panel)" stroke="#ffffff" />
          <rect x={item.x + 18} y={item.y + 22} width="42" height="42" rx="13" fill={item.color} />
          <text x={item.x + 39} y={item.y + 51} textAnchor="middle" fill="#ffffff" fontSize="21" fontWeight="800">{item.icon}</text>
          <text x={item.x + 72} y={item.y + 45} fill="#102a43" fontSize="16" fontWeight="800">{item.title}</text>
          <text x={item.x + 72} y={item.y + 68} fill="#557184" fontSize="11">{item.sub}</text>
          <rect x={item.x + 18} y={item.y + 88} width="144" height="5" rx="3" fill="#d7e6eb" />
          <rect x={item.x + 18} y={item.y + 88} width="92" height="5" rx="3" fill={item.color} opacity="0.85" />
        </g>
      ))}

      <g fill="#55d0df">
        <circle cx="250" cy="199" r="5"><animate attributeName="opacity" values=".35;1;.35" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="470" cy="199" r="5"><animate attributeName="opacity" values="1;.35;1" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="250" cy="341" r="5"><animate attributeName="opacity" values="1;.35;1" dur="3.4s" repeatCount="indefinite" /></circle>
        <circle cx="470" cy="341" r="5"><animate attributeName="opacity" values=".35;1;.35" dur="3.4s" repeatCount="indefinite" /></circle>
      </g>
    </svg>
  </div>
);

export default OperationalEcosystemVisual;
