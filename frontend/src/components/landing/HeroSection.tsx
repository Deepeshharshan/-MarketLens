"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Activity, TrendingUp } from "lucide-react";

const HeroScene = dynamic(() => import("../hero/HeroScene"), { ssr: false });
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-bg-primary">
      <HeroScene />
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 mask-image-b pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-light border-primary/20 text-xs font-semibold tracking-widest uppercase text-primary mb-8 animate-pulse-glow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            MarketLens AI 1.0 is live
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
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
