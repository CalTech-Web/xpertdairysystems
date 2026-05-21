import Image from "next/image";

export type ServiceIconName =
  | "pump-repair"
  | "separator"
  | "agitator"
  | "fabrication"
  | "emergency-service"
  | "installation"
  | "preventative-maintenance"
  | "parts-stocking"
  | "warranty-support"
  | "equipment-sales"
  | "safety-compliance"
  | "location-pin";

export default function ServiceIcon({
  name,
  size = 56,
  className,
}: {
  name: ServiceIconName;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  );
}
