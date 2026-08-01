import AnimatedCounter from "../ui/AnimatedCounter";
import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";
import { clsx } from "clsx";

export default function StatsBand() {
  const stats = [
    { value: 2.4, suffix: "M+", prefix: "", decimals: 1, label: "PREDICTIONS GENERATED" },
    { value: 94.2, suffix: "%", prefix: "", decimals: 1, label: "AVG MODEL ACCURACY" },
    { value: 180, suffix: "K+", prefix: "", decimals: 0, label: "ACTIVE TRADERS" },
    { value: 50, suffix: "ms", prefix: "", decimals: 0, label: "AVG RESPONSE TIME" }
  ];

  return (
    <div className="relative border-y border-white/5 bg-surface/50 backdrop-blur-sm z-10 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <ScrollReveal staggerChildren={true} className="grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
          {stats.map((stat, idx) => (
            <ScrollRevealItem 
              key={idx} 
              className={clsx(
                "flex flex-col items-center justify-center px-4",
                // Mobile borders (2x2 grid)
                idx % 2 === 0 ? "border-r border-white/5" : "",
                idx < 2 ? "pb-4 border-b border-white/5 md:border-b-0 md:pb-0" : "",
                // Desktop borders (1x4 grid)
                idx > 0 ? "md:border-l md:border-r-0 md:border-white/5" : "md:border-l-0"
              )}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-primary mb-2 tracking-tighter">
                <AnimatedCounter 
                  value={stat.value} 
                  duration={1500}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.2em] font-semibold">
                {stat.label}
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </div>
  );
}
