import React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon,
  label,
  className,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={cn(
      "w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-text-muted transition-all duration-300 hover:text-white hover:border-accent hover:bg-accent hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(108,99,255,0.25)]",
      className,
    )}
  >
    {icon}
  </Link>
);
