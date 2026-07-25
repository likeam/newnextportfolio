import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-[#7b73ff] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,99,255,0.25)]",
    secondary:
      "border border-border bg-transparent text-text hover:border-accent hover:bg-accent/10 hover:-translate-y-1",
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
