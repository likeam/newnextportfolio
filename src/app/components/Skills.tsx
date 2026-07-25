import React from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { SKILLS } from "../lib/constants";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Expertise"
          title="My Tech Stack"
          description="Tools and technologies I work with daily to bring ideas to life."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-card border border-border rounded-2xl p-4 text-center hover:border-accent transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="font-medium text-sm">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
