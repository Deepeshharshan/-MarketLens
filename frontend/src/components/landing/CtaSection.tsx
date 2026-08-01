"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";
import { motion, useReducedMotion } from "framer-motion";

export default function CtaSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="py-24 relative overflow-hidden bg-bg-primary border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />
      
      <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollRevealItem className="p-12 md:p-16 rounded-3xl glass-card border-primary/20 shadow-glow-lg bg-surface/50">
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter mb-6">
            Start seeing tomorrow's market <span className="gradient-text">today.</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of traders using our AI models to outpace the market. Upgrade your strategy in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <motion.div
                animate={prefersReducedMotion ? {} : {
                  boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 20px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl"
              >
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl">
                  Start Predicting Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </ScrollRevealItem>
      </ScrollReveal>
    </section>
  );
}
