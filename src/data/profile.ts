import type { Profile } from "./types";

/* =========================================================================
   EDIT ME — your identity, bio, skills, and links.
   ========================================================================= */

export const profile: Profile = {
  name: "John Ortega",
  role: "Software Engineer",
  tagline:
    "Focusing on building and maintaining cloud infrastructure with a focus in AI Engineering.",
  location: "New York, NY",
  email: "j.tega149@gmail.com",

  // Drop your photo in /public (e.g. public/profile.jpg) and set the path here.
  // Leave blank or remove to show initials until you add one.
  photo: "/profile.jpeg",

  // Cycles through these in the home hero typing animation.
  heroRotators: ["systems", "secure software", "RAG pipelines", "scalable cloud infrastructures"],

  // Each string is a paragraph in this about list
  about: [
    "I'm John, a rising senior at the City College of New York pursuing a B.S. in Computer Science with a minor in Mathematics, where I maintain a 3.8 GPA. As a software engineer, I focus on integrating AI into systems where it delivers real value, and on building and maintaining scalable cloud infrastructure.",
    "Outside of CS, some of my main hobbies rely around the gym, soccer, and traveling the world. Here are some of my gym stats if you care: Bench: 265, Squat: 325, Deadlift: (screw deadlifts). I will be updating these numbers as time goes on...",
  ],

  skills: [
    { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "HTML"] },
    { category: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Django", "Spring Boot", "PostgreSQL/MySQL", "Firebase/MongoDB", "Docker", "AWS", "GCP"] },
    { category: "Focus", items: ["Software Engineering", "Cloud Engineering", "AI Engineering"] },
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/jtega149", handle: "@jtega149" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/john-m-ortega/" },
    { label: "Email", url: "mailto:j.tega@gmail.com" },
  ],
};
