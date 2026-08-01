
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, TrendingUp } from "lucide-react";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-20 mask-image-b" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-light border-primary/20 text-sm text-primary mb-8 animate-pulse-glow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            MarketLens AI 1.0 is live
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Predict the market with <br className="hidden md:block" />
            <span className="gradient-text">machine precision.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Advanced neural networks and real-time market data combined into a single, intuitive platform. Make smarter decisions, faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Start Predicting Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
