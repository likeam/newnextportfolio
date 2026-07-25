"use client";

import React from "react";
import Link from "next/link";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { useMobileMenu } from "../hooks/useMobileMenu";
import { cn } from "../lib/utils";

export const Navbar: React.FC = () => {
  const scrolled = useScrollEffect(40);
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-lg"
          : "bg-background/70 backdrop-blur-md",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-1"
          onClick={close}
        >
          JD<span className="text-accent">.</span>
          <span className="w-2 h-2 bg-accent rounded-full inline-block animate-pulse-dot" />
        </Link>

        <ul
          className={cn(
            "fixed top-0 right-0 h-full w-64 bg-background border-l border-border p-8 flex flex-col gap-6 transition-transform duration-300 md:static md:flex-row md:items-center md:gap-8 md:p-0 md:border-0 md:bg-transparent",
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          )}
        >
          <li>
            <Link
              href="#about"
              className="text-text-muted hover:text-white transition-colors"
              onClick={close}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-text-muted hover:text-white transition-colors"
              onClick={close}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-text-muted hover:text-white transition-colors"
              onClick={close}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-text-muted hover:text-white transition-colors"
              onClick={close}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#7b73ff] transition-colors"
              onClick={close}
            >
              Let's Talk
            </Link>
          </li>
        </ul>

        <button
          onClick={toggle}
          className="flex flex-col gap-1.5 md:hidden z-50"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-text transition-all duration-300",
              isOpen && "rotate-45 translate-y-2",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-text transition-all duration-300",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-text transition-all duration-300",
              isOpen && "-rotate-45 -translate-y-2",
            )}
          />
        </button>
      </div>
    </nav>
  );
};
