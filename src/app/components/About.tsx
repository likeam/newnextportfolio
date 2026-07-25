import React from "react";
import { SectionHeader } from "./ui/SectionHeader";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            label="About Me"
            title="Passionate about building digital solutions"
            className="text-left"
          />
          <p className="text-text-muted text-lg mt-4">
            I'm a Full Stack Developer with a deep love for clean code, elegant
            design, and solving real-world problems. I specialize in the
            JavaScript ecosystem — from React &amp; Next.js on the frontend to
            Node.js, Python, and cloud services on the backend.
          </p>
          <p className="text-text-muted text-lg mt-4">
            I believe in writing maintainable, testable code and creating
            experiences that are both beautiful and performant. Whether it's a
            startup MVP or a large-scale enterprise app, I bring the same level
            of care and craftsmanship.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-accent transition-all hover:-translate-y-1">
              <div className="text-2xl font-bold text-white">4+</div>
              <div className="text-text-muted text-sm">Years Experience</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-accent transition-all hover:-translate-y-1">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-text-muted text-sm">Projects Delivered</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-accent transition-all hover:-translate-y-1">
              <div className="text-2xl font-bold text-white">12+</div>
              <div className="text-text-muted text-sm">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 font-mono text-sm shadow-2xl">
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">1</span>
            <span>
              <span className="text-purple-400">const</span> developer{" "}
              <span className="text-purple-400">=</span> &#123;
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">2</span>
            <span>
              &nbsp;&nbsp;name:{" "}
              <span className="text-green-400">'John Doe'</span>,
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">3</span>
            <span>
              &nbsp;&nbsp;role:{" "}
              <span className="text-green-400">'Full Stack Developer'</span>,
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">4</span>
            <span>
              &nbsp;&nbsp;stack:{" "}
              <span className="text-green-400">
                ['Next.js', 'React', 'Node', 'Python']
              </span>
              ,
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">5</span>
            <span>
              &nbsp;&nbsp;<span className="text-blue-400">build</span>:{" "}
              <span className="text-purple-400">function</span>() &#123;
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">6</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-purple-400">return</span>{" "}
              <span className="text-green-400">'awesome apps'</span>;
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">7</span>
            <span>&nbsp;&nbsp;&#125;</span>
          </div>
          <div className="flex gap-4">
            <span className="text-text-muted opacity-30">8</span>
            <span>
              &#125;; <span className="text-gray-500">// 🚀</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
