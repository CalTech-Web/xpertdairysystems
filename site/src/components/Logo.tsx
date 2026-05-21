import Link from "next/link";

type Variant = "dark" | "light" | "mono-dark" | "mono-light";

interface LogoProps {
  variant?: Variant;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string | null;
}

const sizeMap = {
  sm: { mark: 32, text: "text-lg" },
  md: { mark: 44, text: "text-xl" },
  lg: { mark: 64, text: "text-3xl" },
} as const;

export default function Logo({
  variant = "dark",
  showWordmark = true,
  size = "md",
  href = "/",
}: LogoProps) {
  const isLight = variant === "light" || variant === "mono-light";
  const blueFill = variant === "mono-dark" ? "#0A0A0A" : variant === "mono-light" ? "#FFFFFF" : "#1E40AF";
  const tailStroke = isLight ? "#FFFFFF" : "#0A0A0A";
  const wordmarkColor = isLight ? "text-white" : "text-xds-ink";

  const { mark, text } = sizeMap[size];

  const content = (
    <span className="inline-flex items-center gap-3">
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 8 L26 32 L8 56 H20 L32 40 L44 56 H56 L38 32 L56 8 H44 L32 24 L20 8 Z"
          fill={blueFill}
        />
        <path
          d="M50 14 C58 22, 62 34, 56 46 C52 53, 44 56, 38 54"
          stroke={tailStroke}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showWordmark && (
        <span className={`flex flex-col leading-[0.9] font-display font-extrabold tracking-tight ${wordmarkColor} ${text}`}>
          <span>XPERT</span>
          <span className="text-[0.6em] font-bold tracking-wider opacity-90">DAIRY SYSTEMS</span>
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="XPERT Dairy Systems home">
      {content}
    </Link>
  );
}
