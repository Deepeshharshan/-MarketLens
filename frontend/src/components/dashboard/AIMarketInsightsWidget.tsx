import Badge from "../ui/Badge";

export interface AIInsight {
  symbol: string;
  signal: "buy" | "strongBuy" | "sell" | "strongSell" | "hold";
  insight: string;
  confidence: number;
}

const placeholderInsights: AIInsight[] = [
  {
    symbol: "NVDA",
    signal: "strongBuy",
    insight: "Consolidation pattern breaking out above $870. Strong momentum backtested with high buy-volume flows.",
    confidence: 94
  },
  {
    symbol: "TSLA",
    signal: "sell",
    insight: "Bearish MACD crossover on 4H chart. Target support levels testing around $168.",
    confidence: 82
  },
  {
    symbol: "MSFT",
    signal: "hold",
    insight: "RSI indicating neutral territory. Side-wards consolidation expected within $415-$425 range.",
    confidence: 88
  }
];

export default function AIMarketInsightsWidget() {
  return (
    <div className="relative rounded-[var(--radius-card)] p-[1.5px] overflow-hidden animated-gradient-border h-full flex flex-col">
      {/* Dynamic slow gradient background border */}
      <div className="absolute inset-0 rounded-[var(--radius-card)] animated-gradient-bg" />
      
      <div className="relative rounded-[calc(var(--radius-card)-1.5px)] bg-surface/95 backdrop-blur-xl p-6 flex flex-col justify-between h-full flex-1">
        <div>
          <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">
            Machine intelligence
          </span>
          <h3 className="text-lg font-bold font-display mb-4">AI Market Insights</h3>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto">
          {placeholderInsights.map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl border border-border bg-surface-light/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-text-primary">{item.symbol}</span>
                  <Badge variant={item.signal} dot>
                    {item.signal === "strongBuy" ? "Strong Buy" : item.signal === "strongSell" ? "Strong Sell" : item.signal.toUpperCase()}
                  </Badge>
                </div>
                <span className="text-xs text-text-muted font-semibold">
                  {item.confidence}% Confidence
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.insight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
