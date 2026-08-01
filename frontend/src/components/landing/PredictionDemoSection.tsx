"use client";

import { useState, useRef, useEffect } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import AnimatedCounter from "../ui/AnimatedCounter";
import { TrendingUp, Activity } from "lucide-react";

export default function PredictionDemoSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation of 8 degrees
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (isReducedMotion) return;
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="prediction" className="py-28 relative bg-bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start pt-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              See tomorrow's market, <span className="gradient-text">today.</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Our ensemble machine learning models analyze millions of data points, historical patterns, and technical indicators to forecast price movements with exceptional confidence.
            </p>
            <ul className="space-y-4 mb-8">
              {["7-Day & 30-Day Forecasts", "Confidence Scoring", "Trend Direction Analysis"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-primary">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full lg:mt-10 -mb-12 relative z-10" style={{ perspective: "1000px" }}>
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.02 : 1})`,
                transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.1s ease-out",
                transformStyle: "preserve-3d"
              }}
              className="will-change-transform"
            >
              <Card variant="glass" className="relative overflow-hidden p-6 border-primary/20 shadow-glow bg-surface/80 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold">AAPL</h3>
                    <p className="text-sm text-text-secondary">Apple Inc.</p>
                  </div>
                  <Badge variant="strongBuy" dot>Strong Buy</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-surface-light/50 border border-border">
                    <p className="text-sm text-text-secondary mb-1">Current Price</p>
                    <p className="text-2xl font-bold">$185.92</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-sm text-primary mb-1">Predicted (7d)</p>
                    <p className="text-2xl font-bold text-primary">
                      $<AnimatedCounter value={192.45} decimals={2} />
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Model Confidence</span>
                    <span className="text-sm font-bold text-primary">92%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-light rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[92%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
