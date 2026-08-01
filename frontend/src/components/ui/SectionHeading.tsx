import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl mb-16 md:mb-20",
        centered ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-[0.2em] mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-black font-display tracking-tighter mb-4 leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
