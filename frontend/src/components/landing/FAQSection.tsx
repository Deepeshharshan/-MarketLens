"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { ScrollReveal, ScrollRevealItem } from "../ui/ScrollReveal";

const faqs = [
  {
    question: "Is this financial advice?",
    answer: "No. MarketLens AI is an analytical tool for educational and research purposes. We provide data-driven insights based on historical patterns, but all trading decisions carry risk and are entirely your responsibility."
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our ensemble model historically achieves 65-72% directional accuracy on large-cap stocks over a 7-day window. However, past performance does not guarantee future results. Always check the 'Confidence Score' provided with each prediction."
  },
  {
    question: "What markets do you support?",
    answer: "Currently, we support US Equities (NYSE, NASDAQ) and major ETFs. We plan to add Crypto and Forex markets in future updates."
  },
  {
    question: "Is the data in real-time?",
    answer: "Yes, our stock quotes and charts update in real-time during market hours. Technical indicators are recalculated on every tick."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes. Our Basic tier is permanently free, and we offer a 14-day free trial on our Pro tier so you can test advanced features and longer forecast windows risk-free."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no lock-in contracts. You can downgrade or cancel your subscription at any time directly from your account dashboard."
  },
  {
    question: "What happens to my data?",
    answer: "Your portfolio data and watchlists are heavily encrypted and stored securely. We do not sell your trading data to third parties or market makers."
  },
  {
    question: "Do you support options/crypto?",
    answer: "Currently, our models are highly optimized for US Equities and ETFs to ensure maximum accuracy. Crypto and Forex support are on our roadmap for Q4."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative bg-surface border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
        </div>
        
        <ScrollReveal staggerChildren={true} className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollRevealItem key={idx}>
                <div 
                  className={clsx(
                    "border border-border rounded-xl transition-all duration-200 overflow-hidden",
                    isOpen ? "bg-surface-light border-primary/30" : "bg-surface hover:border-border-light"
                  )}
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus-ring"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <ChevronDown className={clsx("w-5 h-5 text-text-muted transition-transform duration-300", isOpen && "rotate-180 text-primary")} />
                  </button>
                  
                  <div 
                    className={clsx(
                      "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-48 pb-4 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
