"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE, SOCIAL } from "../lib/constants";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { SocialIcon } from "./ui/SocialIcon";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 relative z-10">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <Badge className="mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse-dot" />
            Available for freelance
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              {SITE.name}
            </span>
          </h1>
          <p className="mt-4 text-text-muted max-w-md text-lg mx-auto lg:mx-0">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild>
              <Link href="#contact">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                Hire Me
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#projects">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9h12" />
                  <path d="M6 15h12" />
                  <path d="M6 21h12" />
                  <path d="M6 3h12" />
                </svg>
                View Work
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <SocialIcon
              href={SOCIAL.github}
              icon={<GithubIcon />}
              label="GitHub"
            />
            <SocialIcon
              href={SOCIAL.linkedin}
              icon={<LinkedinIcon />}
              label="LinkedIn"
            />
            <SocialIcon
              href={SOCIAL.twitter}
              icon={<TwitterIcon />}
              label="Twitter"
            />
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent to-purple-400 p-1">
            <div className="w-full h-full rounded-full bg-background overflow-hidden flex items-center justify-center">
              {/* Replace with your own image */}
              <Image
                src="https://ui-avatars.com/api/?name=John+Doe&size=400&background=6c63ff&color=fff&bold=true&font-size=0.5"
                alt={SITE.name}
                width={400}
                height={400}
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-card border border-border rounded-xl px-3 py-2 text-xs font-medium shadow-xl animate-float hidden sm:flex items-center gap-2">
            <span>⚡</span> 4+ Years
          </div>
          <div
            className="absolute -bottom-2 -left-2 bg-card border border-border rounded-xl px-3 py-2 text-xs font-medium shadow-xl animate-float hidden sm:flex items-center gap-2"
            style={{ animationDelay: "0.5s" }}
          >
            <span>🚀</span> 20+ Projects
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon components (inline svg)
const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
