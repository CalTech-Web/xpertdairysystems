/**
 * Background pattern components. One treatment per section, max.
 *  - <TopoBackground />  contour lines (services, why-xds, footer)
 *  - <MeshBackground />  layered radial gradient for dark sections (hero, manufacturers)
 *  - <DotGrid />         engineering dot pattern (FAQ only)
 *  - <BlueprintLines />  abstract decorative geometry (manufacturers right side)
 */

interface BgProps {
  className?: string;
  opacity?: number;
  variant?: "light" | "dark";
}

export function TopoBackground({ className = "", opacity = 0.06, variant = "light" }: BgProps) {
  const stroke = variant === "dark" ? "#FFFFFF" : "#1E5FAE";
  return (
    <svg
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke={stroke} strokeWidth="1.2" strokeLinecap="round">
        <path d="M-50 80 Q220 30 480 100 T1010 70 T1650 110" />
        <path d="M-50 160 Q200 130 440 180 T960 140 T1650 200" />
        <path d="M-50 250 Q260 220 520 290 T1080 250 T1650 300" />
        <path d="M-50 340 Q200 300 460 360 T1000 320 T1650 380" />
        <path d="M-50 430 Q240 380 500 460 T1060 420 T1650 470" />
        <path d="M-50 520 Q220 470 480 540 T1020 500 T1650 560" />
        <path d="M-50 620 Q260 580 540 660 T1100 620 T1650 670" />
        <path d="M-50 720 Q200 670 460 740 T1000 700 T1650 760" />
        <path d="M-50 820 Q240 780 500 850 T1060 810 T1650 860" />
        <path opacity="0.6" d="M-50 120 Q240 80 500 150 T1040 110 T1650 160" strokeDasharray="2 6" />
        <path opacity="0.5" d="M-50 380 Q260 340 540 400 T1100 380 T1650 420" strokeDasharray="2 6" />
        <path opacity="0.5" d="M-50 580 Q220 540 460 600 T1000 580 T1650 620" strokeDasharray="2 6" />
      </g>
    </svg>
  );
}

export function MeshBackground({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`absolute inset-0 bg-mesh-dark pointer-events-none ${className}`} />;
}

export function DotGrid({ className = "", variant = "light" }: BgProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-dot-grid pointer-events-none ${variant === "dark" ? "on-dark" : ""} ${className}`}
    />
  );
}

export function BlueprintLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.18 }}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="#93C5FD" strokeWidth="1">
        {/* Concentric arcs */}
        <circle cx="640" cy="180" r="160" />
        <circle cx="640" cy="180" r="120" strokeDasharray="3 6" />
        <circle cx="640" cy="180" r="80" />
        {/* Crosshair */}
        <line x1="640" y1="0" x2="640" y2="360" strokeDasharray="2 8" />
        <line x1="440" y1="180" x2="840" y2="180" strokeDasharray="2 8" />
        {/* Centerpoint */}
        <circle cx="640" cy="180" r="3" fill="#F59E0B" stroke="none" />
        {/* Geometry */}
        <path d="M520 380 L640 460 L760 380 L760 540 L520 540 Z" />
        <path d="M560 540 L560 580 M720 540 L720 580" />
        <path d="M540 580 L740 580" />
        {/* Tick marks */}
        <g stroke="#93C5FD" strokeWidth="1">
          <line x1="640" y1="20" x2="640" y2="30" />
          <line x1="640" y1="330" x2="640" y2="340" />
          <line x1="460" y1="180" x2="470" y2="180" />
          <line x1="810" y1="180" x2="820" y2="180" />
        </g>
      </g>
    </svg>
  );
}
