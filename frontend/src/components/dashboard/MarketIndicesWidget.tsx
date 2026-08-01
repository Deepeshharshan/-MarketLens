import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "../ui/Card";

export interface IndexData {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

const placeholderIndices: IndexData[] = [
  { name: "S&P 500", value: 5432.75, change: 42.12, changePercent: 0.78 },
  { name: "NASDAQ", value: 17895.40, change: 185.32, changePercent: 1.05 },
  { name: "DOW JONES", value: 39564.15, change: -12.45, changePercent: -0.03 },
  { name: "RUSSELL 2000", value: 2110.80, change: 15.60, changePercent: 0.74 }
];

export default function MarketIndicesWidget() {
  return (
    <Card variant="glass" className="p-6 border-border flex flex-col justify-between h-full">
      <div>
        <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">
          Market Overview
        </span>
        <h3 className="text-lg font-bold font-display mb-4">Major Indices</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {placeholderIndices.map((index) => {
          const isPositive = index.change >= 0;
          return (
            <div key={index.name} className="p-3 bg-surface-light/40 border border-border/50 rounded-xl">
              <span className="text-[10px] text-text-muted font-bold block">{index.name}</span>
              <span className="text-lg font-bold font-mono block mt-1">
                {index.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <div className={`flex items-center gap-1 text-xs mt-1 font-semibold ${isPositive ? "text-success" : "text-danger"}`}>
                {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                <span>
                  {isPositive ? "+" : ""}
                  {index.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
