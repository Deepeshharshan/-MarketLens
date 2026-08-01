"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "../ui/Card";

const data = [
  { name: "Equities", value: 65, color: "#10B981" },
  { name: "ETFs", value: 20, color: "#3B82F6" },
  { name: "Crypto", value: 10, color: "#F59E0B" },
  { name: "Cash", value: 5, color: "#64748B" }
];

export default function PortfolioSummaryWidget() {
  const totalValue = 124580.40;
  const dayChange = 1894.20;
  const dayChangePercent = 1.54;
  const isPositive = dayChange >= 0;

  return (
    <Card variant="glass" className="p-6 border-border flex flex-col justify-between h-full">
      <div>
        <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">
          Active Portfolio
        </span>
        <h3 className="text-lg font-bold font-display mb-4">Portfolio Allocation</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1">
        {/* Left Stats Section */}
        <div>
          <span className="text-xs text-text-muted">Total Balance</span>
          <div className="text-3xl font-black font-mono tracking-tighter mt-1">
            ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className={`flex items-center gap-1 text-sm mt-2 font-semibold ${isPositive ? "text-success" : "text-danger"}`}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span>
              {isPositive ? "+" : ""}${dayChange.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({dayChangePercent.toFixed(2)}%)
            </span>
            <span className="text-text-muted text-xs font-normal ml-1">today</span>
          </div>

          <div className="mt-6 space-y-2">
            {data.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
                <span className="font-bold font-mono text-text-primary">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Recharts Section */}
        <div className="h-[180px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const pData = payload[0].payload;
                    return (
                      <div className="bg-surface border border-border p-2 rounded-lg text-xs font-mono">
                        <span className="font-semibold" style={{ color: pData.color }}>
                          {pData.name}:
                        </span>{" "}
                        {pData.value}%
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[10px] text-text-muted uppercase tracking-wider">Assets</span>
            <span className="text-sm font-bold font-mono">{data.length} Class</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
