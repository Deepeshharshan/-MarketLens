"use client";

import MarketIndicesWidget from "../../components/dashboard/MarketIndicesWidget";
import WatchlistSummaryWidget from "../../components/dashboard/WatchlistSummaryWidget";
import PortfolioSummaryWidget from "../../components/dashboard/PortfolioSummaryWidget";
import TopGainersLosersWidget from "../../components/dashboard/TopGainersLosersWidget";
import AIMarketInsightsWidget from "../../components/dashboard/AIMarketInsightsWidget";
import LatestFinancialNewsWidget from "../../components/dashboard/LatestFinancialNewsWidget";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Heading Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-display tracking-tighter">
            Welcome back, <span className="gradient-text">John</span>
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Here's what our models are projecting for your watchlist today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-muted font-mono bg-surface border border-border px-3 py-1.5 rounded-lg">
            Last Updated: Live
          </span>
        </div>
      </div>

      {/* Bento Grid Widget Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[280px] lg:auto-rows-[310px]">
        {/* Row 1, Col 1-2: Market Indices Widget (2x1) */}
        <div className="md:col-span-2 md:row-span-1">
          <MarketIndicesWidget />
        </div>

        {/* Row 1, Col 3: Watchlist Summary Widget (1x1) */}
        <div className="md:col-span-1 md:row-span-1">
          <WatchlistSummaryWidget />
        </div>

        {/* Row 1, Col 4: Top Gainers / Losers Widget (1x1) */}
        <div className="md:col-span-1 md:row-span-1">
          <TopGainersLosersWidget />
        </div>

        {/* Row 2, Col 1-2: Portfolio Summary Widget (2x1) */}
        <div className="md:col-span-2 md:row-span-1">
          <PortfolioSummaryWidget />
        </div>

        {/* Row 2, Col 3: AI Market Insights (1x1) */}
        <div className="md:col-span-1 md:row-span-1">
          <AIMarketInsightsWidget />
        </div>

        {/* Row 2, Col 4: Latest Financial News Widget (1x1) */}
        <div className="md:col-span-1 md:row-span-1">
          <LatestFinancialNewsWidget />
        </div>
      </div>
    </div>
  );
}
