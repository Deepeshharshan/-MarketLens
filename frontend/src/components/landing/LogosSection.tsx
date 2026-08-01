import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";

/* ── Inline SVG wordmarks for tech stack and trader logos ── */

function TensorFlowLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="var(--font-display)" letterSpacing="-0.02em">TensorFlow</text>
    </svg>
  );
}

function ScikitLearnLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="var(--font-display)" letterSpacing="-0.02em">scikit-learn</text>
    </svg>
  );
}

function FastAPILogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="var(--font-display)" letterSpacing="-0.02em">FastAPI</text>
    </svg>
  );
}

function ReactLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="var(--font-display)" letterSpacing="-0.02em">React 19</text>
    </svg>
  );
}

function NextJSLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 150 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" fontSize="18" fontWeight="800" fontFamily="var(--font-display)" letterSpacing="-0.02em">Next.js 15</text>
    </svg>
  );
}

const techLogos = [
  { name: "TensorFlow", Logo: TensorFlowLogo, width: "w-[120px]" },
  { name: "scikit-learn", Logo: ScikitLearnLogo, width: "w-[120px]" },
  { name: "FastAPI", Logo: FastAPILogo, width: "w-[90px]" },
  { name: "React 19", Logo: ReactLogo, width: "w-[90px]" },
  { name: "Next.js 15", Logo: NextJSLogo, width: "w-[100px]" },
];

/* ── "Trusted by" trader-styled wordmarks with custom kerning ── */
const traderLogos = [
  { name: "MERIDIAN", spacing: "tracking-[0.35em]", weight: "font-black" },
  { name: "QUANTEDGE", spacing: "tracking-[0.25em]", weight: "font-extrabold" },
  { name: "NEXUS", spacing: "tracking-[0.4em]", weight: "font-black" },
  { name: "VERTEX", spacing: "tracking-[0.3em]", weight: "font-extrabold" },
  { name: "HORIZON", spacing: "tracking-[0.35em]", weight: "font-black" },
  { name: "PULSE", spacing: "tracking-[0.4em]", weight: "font-extrabold" },
];

export default function LogosSection() {
  return (
    <section className="py-12 bg-bg-primary border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by traders */}
        <p className="text-center text-[10px] text-text-muted mb-6 font-semibold tracking-[0.25em] uppercase">
          Trusted by traders at
        </p>
        <ScrollReveal staggerChildren={true} className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-12">
          {traderLogos.map(logo => (
            <ScrollRevealItem
              key={logo.name}
              className={`text-sm md:text-base font-display ${logo.weight} ${logo.spacing} text-text-muted/40 transition-all duration-300 hover:text-text-primary cursor-default select-none`}
            >
              {logo.name}
            </ScrollRevealItem>
          ))}
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-10" />

        {/* Powered by tech stack */}
        <p className="text-center text-[10px] text-text-muted mb-6 font-semibold tracking-[0.25em] uppercase">
          Powered by
        </p>
        <ScrollReveal staggerChildren={true} className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techLogos.map(({ name, Logo, width }) => (
            <ScrollRevealItem
              key={name}
              className={`${width} h-[28px] text-text-muted/40 transition-all duration-300 hover:text-text-primary cursor-default`}
            >
              <Logo className="w-full h-full" />
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
