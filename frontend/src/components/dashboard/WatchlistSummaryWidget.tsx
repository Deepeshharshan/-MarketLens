import Link from "next/link";
import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "../ui/Card";

export interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
}

const placeholderWatchlist: WatchlistItem[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 189.84, changePercent: 1.25 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 421.90, changePercent: -0.45 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.12, changePercent: 4.82 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 175.34, changePercent: -1.88 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.15, changePercent: 0.65 }
];

export default function WatchlistSummaryWidget() {
  return (
    <Card variant="glass" className="p-6 border-border flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">
            Personal List
          </span>
          <h3 className="text-base font-bold font-display">Watchlist Summary</h3>
        </div>
        <Link href="/dashboard/watchlist" className="text-xs text-primary hover:text-primary-light font-semibold transition-colors">
          View All
        </Link>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto">
        {placeholderWatchlist.map((item) => {
          const isPositive = item.changePercent >= 0;
          return (
            <Link
              key={item.symbol}
              href={`/stocks/${item.symbol}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-light/60 transition-colors group cursor-pointer border border-transparent hover:border-border/30"
            >
              <div className="flex items-center gap-3">
                <div className="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-bold text-text-primary group-hover:text-primary transition-colors">
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
