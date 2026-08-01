import { clsx } from "clsx";

type BadgeVariant = "buy" | "sell" | "hold" | "strongBuy" | "strongSell" | "info" | "success" | "warning" | "danger" | "neutral";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  strongBuy: "bg-buy/15 text-buy border-buy/25",
  buy: "bg-buy/10 text-buy border-buy/20",
  hold: "bg-hold/10 text-hold border-hold/20",
  sell: "bg-sell/10 text-sell border-sell/20",
  strongSell: "bg-sell/15 text-sell border-sell/25",
  info: "bg-info/10 text-info border-info/20",
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  danger: "bg-danger/10 text-danger border-danger/20",
  neutral: "bg-surface-light text-text-secondary border-border",
};

export default function Badge({ variant = "neutral", children, className, dot }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-[var(--radius-badge)] border",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={clsx(
            "w-1.5 h-1.5 rounded-full",
            variant === "buy" || variant === "strongBuy" || variant === "success"
              ? "bg-buy"
              : variant === "sell" || variant === "strongSell" || variant === "danger"
              ? "bg-sell"
              : variant === "hold" || variant === "warning"
              ? "bg-hold"
              : "bg-text-muted"
          )}
        />
      )}
      {children}
    </span>
  );
}
