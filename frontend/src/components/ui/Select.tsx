import { clsx } from "clsx";
import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, children, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-text-secondary"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={clsx(
            "w-full bg-surface border border-border rounded-[var(--radius-input)] px-4 py-2.5 text-sm text-text-primary",
            "transition-all duration-[var(--transition-fast)] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30",
            "hover:border-border-light cursor-pointer appearance-none",
            error && "border-danger focus:border-danger focus:ring-danger/30",
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && <p className="text-xs text-danger mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
