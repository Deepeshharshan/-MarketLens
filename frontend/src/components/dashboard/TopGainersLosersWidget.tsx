"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "../ui/Card";

export interface GainerLoserStock {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
}

const placeholderGainers: GainerLoserStock[] = [
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.12, changePercent: 4.82 },
  { symbol: "AMD", name: "Advanced Micro Devices", price: 180.20, changePercent: 3.45 },
  { symbol: "META", name: "Meta Platforms Inc.", price: 505.30, changePercent: 2.88 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 151.60, changePercent: 2.15 },
  { symbol: "NFLX", name: "Netflix Inc.", price: 610.50, changePercent: 1.95 }
];

const placeholderLosers: GainerLoserStock[] = [
  { symbol: "TSLA", name: "Tesla Inc.", price: 175.34, changePercent: -2.88 },
  { symbol: "INTC", name: "Intel Corp.", price: 38.40, changePercent: -2.10 },
  { symbol: "NKE", name: "Nike Inc.", price: 98.20, changePercent: -1.75 },
  { symbol: "AAPL", name: "Apple Inc.", price: 189.84, changePercent: -1.25 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 421.90, changePercent: -0.45 }
];

export default function TopGainersLosersWidget() {
  const [activeTab, setActiveTab] = useState<"gainers" | "losers">("gainers");
  const currentStocks = activeTab === "gainers" ? placeholderGainers : placeholderLosers;

  return (
    <Card variant="glass" className="p-6 border-border flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] text-accent-alt font-bold uppercase tracking-wider block mb-1">
            Market Movers
          </span>
          <h3 className="text-base font-bold font-display">Gainers / Losers</h3>
        </div>
        {/* Toggle Switch */}
        <div className="flex p-0.5 bg-surface border border-border rounded-lg">
          <button
            onClick={() => setActiveTab("gainers")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === "gainers"
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Gainers
          </button>
          <button
            onClick={() => setActiveTab("losers")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeTab === "losers"
                ? "bg-danger text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Losers
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto">
        {currentStocks.map((item) => {
          const isPositive = item.changePercent >= 0;
          return (
            <Link
              key={item.symbol}
              href={`/stocks/${item.symbol}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-light/60 transition-colors group cursor-pointer border border-transparent hover:border-border/30"
            >
              <div className="flex items-center gap-3">
                <div className={`px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-bold transition-colors ${
                  isPositive ? "group-hover:text-primary" : "group-hover:text-danger"
                }`}>
                  {item.symbol}
                </div>
                <span className="text-sm font-medium text-text-secondary truncate max-w-[120px]">
                  {item.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold font-mono block">
                  ${item.price.toFixed(2)}
                </span>
                <span className={`text-xs font-semibold ${isPositive ? "text-success" : "text-danger"}`}>
                  {isPositive ? "+" : ""}
                  {item.changePercent.toFixed(2)}%
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
