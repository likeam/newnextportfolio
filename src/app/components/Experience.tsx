import React from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { EXPERIENCE } from "../lib/experience";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Career"
          title="Work Experience"
          description="A timeline of my professional journey in software development."
        />
        <div className="mt-12 space-y-6">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="bg-card border border-border rounded-2xl p-6 pl-12 relative hover:border-accent transition-all hover:translate-x-2"
            >
              <div className="absolute left-4 top-5 w-3 h-3 bg-accent rounded-full shadow-[0_0_30px_rgba(108,99,255,0.3)]" />
              <div className="absolute left-5 top-10 bottom-5 w-0.5 bg-border" />
              <div className="text-accent text-xs font-semibold uppercase tracking-wider">
                {exp.date}
              </div>
              <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
              <div className="text-text-muted">{exp.company}</div>
              <p className="text-text-muted text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
