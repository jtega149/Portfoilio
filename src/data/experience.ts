import type { Experience } from "./types";

/* =========================================================================
   EDIT ME — your work / education / program experience.
   List newest first; they render top-to-bottom as a timeline.
   ========================================================================= */

export const experience: Experience[] = [
  {
    id: "exp-afrl",
    company: "U.S. Air Force Research Laboratory (AFRL)",
    role: "AI/ML Engineer Intern",
    period: "Jun 2026 — Present",
    logo: "/logos/afrl.png",
    summary:
      "Designing and testing AI/ML systems and foundation models for multimodal datasets.",
    highlights: [
      "Built Knowledge Graphs, Vector, and Vectorless based RAG pipelines.",
      "LoRA finetuning of LLMs for AFRL's multi-modal datasets.",
    ],
    tech: ["Python", "PyTorch", "AI/ML"],
  },
  {
    id: "exp-cuny-rf",
    company: "City University of New York (CUNY)",
    role: "Software Engineer Intern",
    period: "Feb 2026 — May 2026",
    location: "New York, NY",
    logo: "/logos/cuny.png",
    summary:
      "AI-Enabled Student Success Analytics for Curriculum and Scheduling Optimization at CCNY. Funder: The Office of Academic Affairs, City University of New York",
    highlights: [
      "Integrated Next.js and React with Django REST API endpoints for delivery of generated academic plans.",
      "Built Django REST API endpoints to generate personalized multi-semester academic plans across 500+ courses.",
      "Engineered prerequisite dependency and constraint-based scheduling algorithms, reducing course enrollment time by 77%.",
      "Designed a fitness function for optimal course selection, reducing invalid graduation paths by 99%.",
    ],
    tech: ["Next.js", "React", "Django", "Python"],
  },
  {
    id: "exp-difference-app",
    company: "The Difference App LLC",
    role: "Software Engineer Intern",
    period: "Jul 2025 — Sep 2025",
    location: "New York, NY",
    logo: "/logos/difference-app.png",
    summary:
      "Developed and maintained a full-stack admin console for the Difference App, a fitness tracking app.",
    highlights: [
      "Developed full-stack admin console using Node.js, Express.js, and MySQL to manage 1,500+ user fitness records.",
      "Reduced 20% of backend codebase by refactoring routes into reusable functions, eliminating 80+ lines of code.",
      "Enhanced administrative data access by building structured CRUD endpoints for client-side operations.",
      "Improved login security by resolving a token handling vulnerability, reducing unauthorized login attempts by 99%.",
    ],
    tech: ["Node.js", "Express.js", "MySQL"],
  },
];

/* =========================================================================
   EDIT ME — non-CS / other work experience (shown under "Irrelevant Experience").
   ========================================================================= */

export const irrelevantExperience: Experience[] = [
  {
    id: "exp-calculus-tutor",
    company: "City College of New York (CCNY)",
    role: "Calculus Tutor",
    period: "2025 — 2026",
    highlights: [
      "Provided one-on-one and group tutoring sessions for Calculus 1–3 students, enhancing their understanding of complex mathematical concepts such as integration, series, differential equations, and multivariable functions.",
      "Developed personalized study plans and problem-solving techniques that improved student performance and confidence in mathematics.",
    ],
  },
  {
    id: "exp-cpc",
    company: "Chinese-American Planning Council (CPC)",
    role: "Program Assistant",
    period: "2024",
    highlights: [
      "Reviewed and approved housing applications for elderly residents.",
      "Organized summer events and coordinated housing arrangements for elderly community members.",
      "Volunteered to provide day-to-day assistance and support for elderly residents as needed.",
    ],
  },
  {
    id: "exp-16-handles",
    company: "16 Handles",
    role: "Cashier / Food Prep",
    period: "2023",
    highlights: [
      "Worked as a cashier at a self-serve frozen yogurt shop.",
      "Maintained product displays and food prep areas in a clean and sanitary manner.",
    ],
  },
];
