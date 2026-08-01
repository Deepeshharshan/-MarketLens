import Card from "../ui/Card";
import Badge from "../ui/Badge";

export interface NewsItem {
  headline: string;
  source: string;
  timestamp: string;
  sentiment: "positive" | "neutral" | "negative";
}

const placeholderNews: NewsItem[] = [
  {
    headline: "Federal Reserve hints at interest rate cuts as inflation targets approach.",
    source: "Bloomberg",
    timestamp: "2h ago",
    sentiment: "positive"
  },
  {
    headline: "Tech giants face renewed regulatory scrutiny over antitrust policies.",
    source: "Reuters",
    timestamp: "4h ago",
    sentiment: "negative"
  },
  {
    headline: "NVIDIA announces next-generation chip architecture to ship early next quarter.",
    source: "TechCrunch",
    timestamp: "6h ago",
    sentiment: "positive"
  },
  {
    headline: "Global shipping congestion eases, stabilizing raw materials costs.",
    source: "WSJ",
    timestamp: "12h ago",
    sentiment: "neutral"
  }
];

export default function LatestFinancialNewsWidget() {
  return (
    <Card variant="glass" className="p-6 border-border flex flex-col justify-between h-full">
      <div>
        <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block mb-1">
          Market Context
        </span>
        <h3 className="text-lg font-bold font-display mb-4">Latest Financial News</h3>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto">
        {placeholderNews.map((item, idx) => (
          <a
            key={idx}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block p-3 rounded-xl border border-border/40 bg-surface-light/20 hover:bg-surface-light/45 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <span className="text-xs font-semibold text-text-muted">{item.source} • {item.timestamp}</span>
              <Badge 
                variant={item.sentiment === "positive" ? "success" : item.sentiment === "negative" ? "danger" : "neutral"} 
                dot
              >
                {item.sentiment.toUpperCase()}
              </Badge>
            </div>
            <p className="text-xs text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed font-medium">
              {item.headline}
            </p>
          </a>
        ))}
      </div>
    </Card>
  );
}
