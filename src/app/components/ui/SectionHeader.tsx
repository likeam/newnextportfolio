import React from "react";
import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  className,
}) => (
  <div className={cn("text-center", className)}>
    <span className="text-accent text-xs font-semibold uppercase tracking-widest">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-3">{title}</h2>
    {description && (
      <p className="text-text-muted max-w-xl mx-auto text-base">
        {description}
      </p>
    )}
  </div>
);
