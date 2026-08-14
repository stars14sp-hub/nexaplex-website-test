import React from 'react';

interface AmbientWaveProps {
  variant?: 'global' | 'contact' | 'case-studies';
}

const AmbientWave: React.FC<AmbientWaveProps> = ({ variant = 'global' }) => (
  <div className={`ambient-wave ambient-wave--${variant}`} aria-hidden="true">
    <div className="ambient-wave__motion">
      <svg
        className="ambient-wave__svg"
        viewBox="0 0 1600 420"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <linearGradient id="wave-main" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0b3657" stopOpacity="0.08" />
            <stop offset="0.22" stopColor="#1687c8" stopOpacity="0.66" />
            <stop offset="0.5" stopColor="#55d0df" stopOpacity="0.74" />
            <stop offset="0.74" stopColor="#2f7fcb" stopOpacity="0.58" />
            <stop offset="1" stopColor="#d7b466" stopOpacity="0.24" />
          </linearGradient>
          <linearGradient id="wave-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.35" stopColor="#dffbff" stopOpacity="0.86" />
            <stop offset="0.7" stopColor="#fff3cb" stopOpacity="0.72" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-secondary" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#55d0df" stopOpacity="0.05" />
            <stop offset="0.48" stopColor="#0f7fb7" stopOpacity="0.35" />
            <stop offset="1" stopColor="#d7b466" stopOpacity="0.32" />
          </linearGradient>
          <filter id="wave-shadow" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <path
          d="M-120 312C170 174 386 362 706 236C1009 117 1191 190 1715 30"
          fill="none"
          stroke="#061d2e"
          strokeOpacity="0.14"
          strokeWidth="62"
          strokeLinecap="round"
          filter="url(#wave-shadow)"
        />
        <path
          d="M-120 292C170 154 386 342 706 216C1009 97 1191 170 1715 10"
          fill="none"
          stroke="url(#wave-main)"
          strokeWidth="48"
          strokeLinecap="round"
        />
        <path
          d="M-120 266C170 128 386 316 706 190C1009 71 1191 144 1715-16"
          fill="none"
          stroke="url(#wave-edge)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M-90 380C248 258 481 403 816 295C1112 199 1330 233 1690 122"
          fill="none"
          stroke="url(#wave-secondary)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M-90 366C248 244 481 389 816 281C1112 185 1330 219 1690 108"
          fill="none"
          stroke="url(#wave-edge)"
          strokeOpacity="0.62"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

export default AmbientWave;
