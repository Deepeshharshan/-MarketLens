"use client";

import Button from "../ui/Button";
import Card from "../ui/Card";
import { Check } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";

const tiers = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential tools for casual investors.",
    features: ["Real-time quotes", "Basic charts (1D, 1M)", "3 AI predictions per day", "Standard support"],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "Advanced analytics for serious traders.",
    features: ["Unlimited AI predictions", "All technical indicators", "Portfolio simulation", "Priority alerts", "7-Day forecasting"],
    buttonText: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Institutional grade modeling and API access.",
    features: ["API Access (10k req/mo)", "30-Day forecasting", "Custom model training", "Dedicated account manager"],
    buttonText: "Contact Sales",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative bg-bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
          <p className="text-text-secondary text-lg md:text-xl">Choose the tier that matches your trading style.</p>
        </div>
        
        <ScrollReveal staggerChildren={true} className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <ScrollRevealItem key={tier.name} className="w-full flex-1">
              {tier.popular ? (
                /* ── Animated gradient-stroke wrapper for Pro card ── */
                <div className="relative rounded-[var(--radius-card)] p-[2px] overflow-hidden max-w-md mx-auto lg:-translate-y-4 animated-gradient-border">
                  {/* Rotating gradient border */}
                  <div className="absolute inset-0 rounded-[var(--radius-card)] animated-gradient-bg" />
                  
                  <div className="relative rounded-[calc(var(--radius-card)-2px)] bg-surface/95 backdrop-blur-xl p-8 flex flex-col h-full">
                    <div className="absolute top-0 right-6 transform -translate-y-1/2 z-10">
                      <span className="bg-gradient-to-r from-primary to-accent-alt text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-text-secondary">/month</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="primary" className="w-full mt-auto">
                      {tier.buttonText}
                    </Button>
                  </div>
                </div>
              ) : (
                <Card 
                  variant="default" 
                  className="p-8 relative w-full h-full flex flex-col max-w-sm mx-auto"
                >
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="text-text-secondary">/month</span>}
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-auto"
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Card>
              )}
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
