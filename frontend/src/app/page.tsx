import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PredictionDemoSection from "../components/landing/PredictionDemoSection";
import PricingSection from "../components/landing/PricingSection";
import FAQSection from "../components/landing/FAQSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Trusted By (Minimal version) */}
        <section className="py-10 border-y border-border/30 bg-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-text-muted mb-6 font-medium tracking-wide uppercase">
              Powered by industry standard technology
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {["TensorFlow", "Scikit-Learn", "FastAPI", "React 19", "Next.js 15"].map(tech => (
                <div key={tech} className="text-xl font-bold font-mono tracking-tighter">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeaturesSection />
        <PredictionDemoSection />
        
        {/* Portfolio Tracking Preview */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Manage your digital portfolio</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">
              Track your holdings, analyze asset allocation, and simulate trades in a risk-free environment.
            </p>
            <div className="relative mx-auto max-w-4xl rounded-2xl glass-card border-primary/20 shadow-glow p-2 overflow-hidden h-64 md:h-96 flex items-center justify-center bg-surface-hover/30">
                <span className="text-text-muted font-mono flex items-center gap-2">
                  <span className="animate-pulse-glow w-2 h-2 rounded-full bg-primary inline-block"></span>
                  Loading Interactive Dashboard Preview...
                </span>
            </div>
          </div>
        </section>

        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
