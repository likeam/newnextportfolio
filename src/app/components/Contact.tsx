"use client";

import React, { useRef } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { SocialIcon } from "./ui/SocialIcon";
import { SOCIAL } from "../lib/constants";

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    const btn = formRef.current?.querySelector('button[type="submit"]');
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = "✅ Sent!";
      btn.classList.add("bg-green-400");
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove("bg-green-400");
        formRef.current?.reset();
      }, 2200);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <SectionHeader
            label="Contact"
            title="Let's Connect"
            className="text-left"
          />
          <p className="text-text-muted text-lg mt-4">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out — I'll get back to you as soon
            as possible.
          </p>
          <div className="flex gap-4 mt-8">
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
            <SocialIcon
              href={SOCIAL.email}
              icon={<EmailIcon />}
              label="Email"
            />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-muted"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full mt-1 px-4 py-3 bg-background border border-border rounded-xl text-text focus:border-accent focus:ring-4 focus:ring-accent/25 outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-muted"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full mt-1 px-4 py-3 bg-background border border-border rounded-xl text-text focus:border-accent focus:ring-4 focus:ring-accent/25 outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full mt-1 px-4 py-3 bg-background border border-border rounded-xl text-text focus:border-accent focus:ring-4 focus:ring-accent/25 outline-none transition resize-y"
              placeholder="Tell me about your project…"
            />
          </div>
          <Button type="submit" className="w-full">
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
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

// Icons (reused or new)
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
const EmailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
