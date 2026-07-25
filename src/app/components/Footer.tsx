import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm">
        <p>&copy; {new Date().getFullYear()} John Doe. Crafted with ❤️</p>
        <div className="flex gap-6">
          <Link href="#home" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
