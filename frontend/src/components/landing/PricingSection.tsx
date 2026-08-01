import Button from "../ui/Button";
import Card from "../ui/Card";
import { Check } from "lucide-react";

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
    price: "$99",
    period: "/mo",
    description: "Institutional grade modeling and API access.",
    features: ["API Access (10k req/mo)", "30-Day forecasting", "Custom model training", "Dedicated account manager"],
    buttonText: "Contact Sales",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-text-secondary text-lg">Choose the tier that matches your trading style.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <Card key={tier.name} variant={tier.popular ? "glass" : "default"} className={`p-8 relative ${tier.popular ? 'border-primary/50 shadow-glow' : ''}`}>
              {tier.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-sm text-text-secondary mb-6 h-10">{tier.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && <span className="text-text-secondary">{tier.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={tier.popular ? "primary" : "outline"} className="w-full">
                {tier.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
