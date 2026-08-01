import { Brain, LineChart, Shield, Zap, Target, BarChart3 } from "lucide-react";
import Card from "../ui/Card";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "AI-Powered Predictions",
    description: "Multi-model ensemble forecasting using LSTM, GRU, and XGBoost for unparalleled accuracy."
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Real-time Analytics",
    description: "Live market data, volume analysis, and instant price updates without refreshing."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Technical Indicators",
    description: "Advanced charting with built-in RSI, MACD, Bollinger Bands, and Moving Averages."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Risk Assessment",
    description: "Automated volatility scoring and risk-level categorization for every asset."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Instant Alerts",
    description: "Custom price triggers and pattern recognition notifications sent directly to you."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Portfolio Simulation",
    description: "Test your strategies in a risk-free environment with our virtual portfolio tracker."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to trade smarter
          </h2>
          <p className="text-text-secondary text-lg">
            Institutional-grade tools reimagined for the modern investor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} variant="glass" className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
