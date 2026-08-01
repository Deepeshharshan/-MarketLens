import Card from "../ui/Card";
import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";

/* ── Custom two-tone gradient SVG icons ── */

function IconBrain({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="feat-grad-brain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path d="M12 2a5 5 0 0 0-4.78 3.53A4 4 0 0 0 4 9.5a4.5 4.5 0 0 0 1.21 7.28A4 4 0 0 0 9 20h2V2Z" stroke="url(#feat-grad-brain)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="url(#feat-grad-brain)" fillOpacity="0.12"/>
      <path d="M12 2a5 5 0 0 1 4.78 3.53A4 4 0 0 1 20 9.5a4.5 4.5 0 0 1-1.21 7.28A4 4 0 0 1 15 20h-3V2Z" stroke="url(#feat-grad-brain)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M8 12h4m-2-2v4" stroke="url(#feat-grad-brain)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconChart({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="feat-grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="url(#feat-grad-chart)" strokeWidth="1.5" fill="url(#feat-grad-chart)" fillOpacity="0.08"/>
      <polyline points="7 17 10 12 14 14 17 7" stroke="url(#feat-grad-chart)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="17" cy="7" r="1.5" fill="url(#feat-grad-chart)" fillOpacity="0.5"/>
    </svg>
  );
}

function IconTarget({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="feat-grad-target" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#feat-grad-target)" strokeWidth="1.5" fill="url(#feat-grad-target)" fillOpacity="0.06"/>
      <circle cx="12" cy="12" r="5.5" stroke="url(#feat-grad-target)" strokeWidth="1.5" fill="url(#feat-grad-target)" fillOpacity="0.1"/>
      <circle cx="12" cy="12" r="2" fill="url(#feat-grad-target)"/>
    </svg>
  );
}

function IconShield({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="feat-grad-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path d="M12 2l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4Z" stroke="url(#feat-grad-shield)" strokeWidth="1.5" strokeLinejoin="round" fill="url(#feat-grad-shield)" fillOpacity="0.1"/>
      <path d="M9 12l2 2 4-4" stroke="url(#feat-grad-shield)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconBolt({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="feat-grad-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="url(#feat-grad-bolt)" strokeWidth="1.5" strokeLinejoin="round" fill="url(#feat-grad-bolt)" fillOpacity="0.12"/>
    </svg>
  );
}

function IconBarChart({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="feat-grad-bar" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <rect x="3" y="12" width="4" height="9" rx="1" fill="url(#feat-grad-bar)" fillOpacity="0.25" stroke="url(#feat-grad-bar)" strokeWidth="1.2"/>
      <rect x="10" y="7" width="4" height="14" rx="1" fill="url(#feat-grad-bar)" fillOpacity="0.4" stroke="url(#feat-grad-bar)" strokeWidth="1.2"/>
      <rect x="17" y="3" width="4" height="18" rx="1" fill="url(#feat-grad-bar)" fillOpacity="0.55" stroke="url(#feat-grad-bar)" strokeWidth="1.2"/>
    </svg>
  );
}

/* ── Icon container with soft glow ── */
function FeatureIcon({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  const size = large ? "w-16 h-16" : "w-12 h-12";
  return (
    <div className={`${size} rounded-2xl bg-gradient-to-br from-primary/15 to-accent-alt/10 border border-primary/20 flex items-center justify-center mb-6 relative`}>
      <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

const features = [
  {
    icon: <FeatureIcon large><IconBrain size={32} /></FeatureIcon>,
    title: "AI-Powered Predictions",
    description: "Multi-model ensemble forecasting using LSTM, GRU, and XGBoost for unparalleled accuracy. Identify hidden patterns and stay ahead of the market curve.",
    className: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 p-8 md:p-10"
  },
  {
    icon: <FeatureIcon><IconChart size={24} /></FeatureIcon>,
    title: "Real-time Analytics",
    description: "Live market data, volume analysis, and instant price updates without refreshing.",
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1"
  },
  {
    icon: <FeatureIcon><IconTarget size={24} /></FeatureIcon>,
    title: "Technical Indicators",
    description: "Advanced charting with built-in RSI, MACD, and Bollinger Bands.",
    className: "md:col-span-1 lg:col-span-1 lg:row-span-1"
  },
  {
    icon: <FeatureIcon><IconShield size={24} /></FeatureIcon>,
    title: "Risk Assessment",
    description: "Automated volatility scoring and risk-level categorization.",
    className: "md:col-span-1 lg:col-span-1 lg:row-span-1"
  },
  {
    icon: <FeatureIcon><IconBolt size={24} /></FeatureIcon>,
    title: "Instant Alerts",
    description: "Custom price triggers and pattern notifications.",
    className: "md:col-span-1 lg:col-span-1 lg:row-span-1"
  },
  {
    icon: <FeatureIcon><IconBarChart size={24} /></FeatureIcon>,
    title: "Portfolio Simulation",
    description: "Test your strategies in a risk-free virtual environment.",
    className: "md:col-span-1 lg:col-span-1 lg:row-span-1"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to trade smarter
          </h2>
          <p className="text-text-secondary text-lg md:text-xl">
            Institutional-grade tools reimagined for the modern investor.
          </p>
        </div>
        
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
          {features.map((feature, idx) => (
            <ScrollRevealItem key={idx} className={feature.className || ""}>
              <Card variant="glass" className="p-6 flex flex-col h-full">
                {feature.icon}
                <h3 className={`font-semibold mb-3 ${idx === 0 ? "text-2xl md:text-3xl mb-4" : "text-xl"}`}>
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
