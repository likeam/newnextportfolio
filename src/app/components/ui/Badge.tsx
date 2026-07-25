import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-xs font-medium px-3 py-1 rounded-full",
      className,
    )}
  >
    {children}
  </span>
);
