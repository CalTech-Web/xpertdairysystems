import Link from "next/link";
import Image from "next/image";

type Variant = "dark" | "light";

interface LogoProps {
  variant?: Variant;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string | null;
}

const sizeMap = {
  sm: { mark: 32, gap: "gap-2", primary: "text-base", secondary: "text-[0.55em]" },
  md: { mark: 44, gap: "gap-3", primary: "text-xl", secondary: "text-[0.55em]" },
  lg: { mark: 64, gap: "gap-3", primary: "text-3xl", secondary: "text-[0.55em]" },
} as const;

export default function Logo({
  variant = "dark",
  showWordmark = true,
  size = "md",
  href = "/",
}: LogoProps) {
  const isLight = variant === "light";
  const xpertColor = isLight ? "text-white" : "text-xds-ink";
  const dairyColor = isLight ? "text-white/90" : "text-xds-ink";
  const systemsColor = isLight ? "text-xds-blue-light" : "text-xds-blue";

  const { mark, gap, primary, secondary } = sizeMap[size];

  const content = (
    <span className={`inline-flex items-center ${gap}`}>
      <Image
        src="/images/xds-mark-transparent.png"
        alt=""
        width={mark}
        height={mark}
        priority
        className="shrink-0"
        style={{ width: mark, height: "auto" }}
      />
      {showWordmark && (
        <span className="flex flex-col leading-[0.95] font-display font-extrabold tracking-tight">
          <span className={`${primary} ${xpertColor}`}>XPERT</span>
          <span className={`${secondary} ${primary} font-bold tracking-wider`}>
            <span className={dairyColor}>DAIRY </span>
            <span className={systemsColor}>SYSTEMS</span>
          </span>
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-flex items-center">
      {content}
    </Link>
  );
}
