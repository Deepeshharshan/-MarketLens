import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import HeroSection from "../components/landing/HeroSection";
import StatsBand from "../components/landing/StatsBand";
import LogosSection from "../components/landing/LogosSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import PredictionDemoSection from "../components/landing/PredictionDemoSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import PricingSection from "../components/landing/PricingSection";
import FAQSection from "../components/landing/FAQSection";
import CtaSection from "../components/landing/CtaSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsBand />
        {/* Divider: Hero area -> Logos */}
        <div className="relative h-8 overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
        </div>
        <LogosSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PredictionDemoSection />
        
        {/* Portfolio Tracking Preview */}
        <section className="py-24 relative bg-surface border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Manage your digital portfolio</h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                Track your holdings, analyze asset allocation, and simulate trades in a risk-free environment.
              </p>
            </div>
            <div className="relative mx-auto max-w-4xl rounded-2xl glass-card border-primary/20 shadow-glow p-2 overflow-hidden h-64 md:h-96 flex items-center justify-center bg-surface-hover/30">
                <span className="text-text-muted font-mono flex items-center gap-2">
                  <span className="animate-pulse-glow w-2 h-2 rounded-full bg-primary inline-block"></span>
                  Loading Interactive Dashboard Preview...
                </span>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        {/* Divider: Testimonials -> Pricing */}
        <div className="relative h-8 overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
        </div>
        <PricingSection />
        <FAQSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
