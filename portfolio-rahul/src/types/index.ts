export type ProjectCategory = "Video Editing" | "Graphic Design" | "UI/UX Design";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  role: string;
  tools: string[];
  year: string;
  // Replace with your own image at /public/images/projects/*
  coverImage: string;
  // Optional external links — fill in with your own work
  behanceUrl?: string;
  figmaUrl?: string;
  youtubeUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface WorkflowStep {
  id: string;
  index: string; // e.g. "01"
  title: string;
  description: string;
}
