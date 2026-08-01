import Card from "../ui/Card";
import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "MarketLens completely shifted how I approach swing trading. The AI predictions are surprisingly accurate, giving me the confidence to hold positions I would have otherwise closed early.",
      name: "Marcus T.",
      role: "Swing Trader",
      color: "bg-blue-500"
    },
    {
      quote: "The risk assessment algorithms alone are worth the enterprise tier. Being able to visualize our portfolio's volatility score against market benchmarks has been invaluable.",
      name: "Elena R.",
      role: "Portfolio Manager",
      color: "bg-emerald-500"
    },
    {
      quote: "I used to spend hours manually charting technicals. Now I just load my watchlist and let the ensemble model tell me where the highest probability setups are.",
      name: "David K.",
      role: "Retail Investor",
      color: "bg-amber-500"
    }
  ];

  return (
    <section className="py-24 relative bg-bg-primary border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Traders trust MarketLens</h2>
          <p className="text-text-secondary text-lg md:text-xl">
            Don't just take our word for it. See how our AI models are changing the game.
          </p>
        </div>
        
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <ScrollRevealItem key={idx}>
              <Card variant="glass" className="p-8 flex flex-col bg-surface/50 border-white/5 h-full">
                <div className="text-primary mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-text-primary text-lg leading-relaxed mb-8 flex-1 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative">
                    <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-primary to-accent-alt/60" />
                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-black/30 ${testimonial.color}`}>
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
