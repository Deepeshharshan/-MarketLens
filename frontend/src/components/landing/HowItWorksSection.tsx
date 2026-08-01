"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";
import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Watchlist",
      description: "Import your portfolio or build a custom watchlist of stocks and ETFs you want to track."
    },
    {
      number: "02",
      title: "AI Analyzes Patterns",
      description: "Our ensemble neural networks process millions of data points and technical indicators in real-time."
    },
    {
      number: "03",
      title: "Get Actionable Predictions",
      description: "Receive high-confidence price forecasts, volatility scores, and directional trend alerts."
    }
  ];

  return (
    <section className="py-24 relative bg-bg-primary border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
          <p className="text-text-secondary text-lg md:text-xl">
            From raw data to actionable insights in three simple steps.
          </p>
        </div>
        
        <ScrollReveal staggerChildren={true} className="relative">
          {/* Connecting line for desktop */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2 z-0 origin-left" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <ScrollRevealItem key={idx}>
                <Card variant="glass" className="p-8 flex flex-col items-center text-center bg-surface/80 border-primary/10 h-full">
                  <div className="relative w-16 h-16 mb-6">
                    {/* Gradient ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/60 to-accent-alt/50 p-[2px]">
                      <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center" />
                    </div>
                    {/* Soft glow behind */}
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
                    {/* Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-bold text-2xl bg-gradient-to-br from-primary to-accent-alt/80 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
