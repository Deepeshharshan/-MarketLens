import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]",
  secondary:
    "bg-surface-light text-text-primary hover:bg-surface-hover border border-border hover:scale-[1.02]",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-light hover:scale-[1.02]",
  outline:
    "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-[1.02]",
  danger:
    "bg-danger/10 text-danger border border-danger/20 hover:bg-danger/20 hover:scale-[1.02]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center font-medium rounded-[var(--radius-button)] transition-all duration-[var(--transition-base)] focus-ring cursor-pointer",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : icon ? (
          <span className="shrink-0">{icon}</span>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
