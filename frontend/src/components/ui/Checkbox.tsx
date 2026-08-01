import { clsx } from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="flex items-start gap-3 text-sm text-text-secondary cursor-pointer select-none">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className={clsx(
              "mt-1 h-4 w-4 bg-surface border border-border rounded text-primary accent-primary cursor-pointer",
              "transition-all duration-[var(--transition-fast)]",
              "focus-ring",
              error && "border-danger",
              className
            )}
            {...props}
          />
          {label && <span>{label}</span>}
        </label>
        {error && <p className="text-xs text-danger mt-1">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
