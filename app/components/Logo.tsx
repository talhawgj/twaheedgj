export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Talha Waheed"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>

      {/* Background tile */}
      <rect width="40" height="40" rx="10" fill="url(#logo-bg)" />

      {/* Subtle inner border */}
      <rect x="1" y="1" width="38" height="38" rx="9.5" stroke="url(#logo-grad)" strokeWidth="0.6" strokeOpacity="0.4" fill="none" />

      {/*
        T: vertical bar at x=7, horizontal cap across top
        W: four-segment chevron at x=17–33
      */}

      {/* ── T ─────────────────────────────────── */}
      {/* T horizontal cap */}
      <rect x="6" y="11" width="13" height="2.8" rx="1.2" fill="url(#logo-grad)" />
      {/* T vertical stem */}
      <rect x="11" y="13.8" width="3" height="15.5" rx="1.2" fill="url(#logo-grad)" />

      {/* ── W ─────────────────────────────────── */}
      {/* Left outer leg */}
      <path d="M18 11.5 L20.5 29.5" stroke="url(#logo-grad)" strokeWidth="2.7" strokeLinecap="round" />
      {/* Left inner leg */}
      <path d="M20.5 29.5 L24 19" stroke="url(#logo-grad)" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right inner leg */}
      <path d="M24 19 L27.5 29.5" stroke="url(#logo-grad)" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right outer leg */}
      <path d="M27.5 29.5 L30 11.5" stroke="url(#logo-grad)" strokeWidth="2.7" strokeLinecap="round" />

      {/* Corner accent dot — bottom right */}
      <circle cx="35" cy="35" r="1.5" fill="url(#logo-grad)" fillOpacity="0.6" />
    </svg>
  );
}
