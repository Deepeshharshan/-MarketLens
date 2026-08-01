import Card from "../ui/Card";
import Badge from "../ui/Badge";
import AnimatedCounter from "../ui/AnimatedCounter";
import { TrendingUp, Activity } from "lucide-react";

export default function PredictionDemoSection() {
  return (
    <section id="prediction" className="py-24 relative bg-bg-secondary/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
          
          <div className="lg:w-1/2 w-full">
            <Card variant="glass" className="relative overflow-hidden p-6 border-primary/20 shadow-glow">
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
    </section>
  );
}
