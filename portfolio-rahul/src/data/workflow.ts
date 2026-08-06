import { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    id: "discovery",
    index: "01",
    title: "Discovery",
    description:
      "Understanding the brief, the audience, and what success actually looks like before opening any tool.",
  },
  {
    id: "research",
    index: "02",
    title: "Research",
    description:
      "Gathering references, constraints, and precedent — mapping the space the work needs to live in.",
  },
  {
    id: "planning",
    index: "03",
    title: "Planning",
    description:
      "Structuring the approach: shot lists, wireframes, or layout sketches, depending on the medium.",
  },
  {
    id: "design",
    index: "04",
    title: "Design",
    description:
      "Building the core visual or interactive language — the stage where most decisions get made.",
  },
  {
    id: "editing",
    index: "05",
    title: "Editing",
    description:
      "Refining pacing, hierarchy, and detail until the work reads clearly on first contact.",
  },
  {
    id: "delivery",
    index: "06",
    title: "Delivery",
    description:
      "Exporting, testing, and handing off in whatever format the platform or client actually needs.",
  },
];
