import React from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { PROJECTS } from "../lib/projects";
import Link from "next/link";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="A selection of recent work that showcases my skills and approach."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-48 bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] flex items-center justify-center text-5xl relative group">
                {project.thumbnailEmoji}
                <div className="absolute inset-0 bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="text-accent text-sm font-semibold hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      🔗 Live Demo
                    </Link>
                  )}
                  {project.sourceUrl && (
                    <Link
                      href={project.sourceUrl}
                      className="text-accent text-sm font-semibold hover:text-purple-400 transition-colors flex items-center gap-1"
                    >
                      📂 Source
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
