export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  thumbnailEmoji: string; // simple emoji fallback, or use image later
}
