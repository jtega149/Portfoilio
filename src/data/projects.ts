import type { Project, OpenSourceContribution, HackathonWin } from "./types";

/* =========================================================================
   EDIT ME — your projects.
   Add an object to the array for each project. Set `featured: true` on the
   ones you want highlighted at the top. The two examples below show the
   shape — replace them with your own.
   ========================================================================= */

export const projects: Project[] = [
  {
    id: "royal-flush",
    title: "Royal Flush",
    description:
      "Production location-based review app deployed on GCP with Dockerized React/Node.js on Cloud Run, Cloud SQL, and GCS. Hardened with JWT auth, BCrypt hashing, rate limiting, and a 5-table PostgreSQL schema synced to Google Place IDs.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "GCP"],
    year: "2026",
    links: [
      {
        label: "Live",
        url: "https://royalflush-web-823707307978.us-east1.run.app/",
      },
      { label: "GitHub", url: "https://github.com/jtega149/RoyalFlush" },
    ],
    featured: true,
  },
  {
    id: "rag-study-assistant-discord-bot",
    title: "RAG Study Assistant Discord Bot",
    description:
      "Discord bot that automates study material retrieval from 500+ course PDFs using a LangChain/OpenAI RAG pipeline with vector embeddings. Scaled across 50+ servers, processing 300+ queries for 200+ students.",
    tech: ["Python", "LangChain", "Pinecone", "ChromaDB", "Discord.py"],
    year: "2026",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/jtega149/Discord-RAG-Bot",
      },
    ],
    featured: true,
  },
  {
    id: "full-stack-ecommerce-app",
    title: "Full-Stack E-commerce App",
    description:
      "Full-stack prototype e-commerce web app with a scalable product catalog, secure Passport.js authentication, and a shopping cart with checkout. Achieved a 99% API request success rate during stress testing with 500+ concurrent requests.",
    tech: ["JavaScript", "React", "MongoDB", "Node.js", "Express.js", "CSS"],
    year: "2025",
    links: [{ label: "GitHub", url: "https://github.com/jtega149/E-Commerce" }],
  },
  {
    id: "serenespace",
    title: "SereneSpace",
    description:
      "Full-stack AI wellness app with personalized meditations, mood tracking, and soundscapes. Integrated Supabase Auth and database syncing for secure sessions and optimized CRUD operations, simulating 500+ API requests without errors.",
    tech: ["Genkit", "Gemini API", "Supabase", "Next.js", "Tailwind CSS"],
    year: "2025",
    links: [
      { label: "Devpost", url: "https://devpost.com/software/serenespace-lite" },
    ],
  },
  {
    id: "mta-datathon-mhc",
    title: "MTA Datathon MHC++",
    description:
      "Analyzed MTA public ACE dataset to evaluate congestion pricing effects on Manhattan CBD bus route violations, ridership, and speeds. Built scalable pipelines processing 500k+ records, identifying a 52.5% reduction in violations and 84.9% ridership increase across three routes.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    year: "2025",
    links: [
      { label: "Project", url: "https://mhc-datathon.github.io/DataThon/" },
    ],
  },
  {
    id: "fare-fit",
    title: "Fare Fit",
    description:
      "Health and fitness app with Firebase backend for real-time workout and meal tracking, plus AI-generated insights. Integrated Google Gemini for meal recommendations, nutrition label OCR, adaptive workout coaching, and the FareScore gamification system.",
    tech: ["Firebase", "TypeScript", "React", "Gemini API"],
    year: "2025",
    links: [{ label: "Live", url: "https://fare-fit.vercel.app/" }],
  },
];

/* =========================================================================
   EDIT ME — your open source contributions.
   These render in their own "Open Source Contributions" section on the
   Projects page.
   ========================================================================= */

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "openwearables",
    project: "Implement deregistration for providers with Cloud API",
    url: "https://github.com/the-momentum/open-wearables/pull/1320",
    role: "Contributor - PR #682",
    description: "Contributed to Open Wearables, an open-source wearable data platform, by adding provider-side OAuth deregistration for Fitbit, Oura, Polar, Ultrahuman, and Whoop. Previously, disconnecting or deleting a user cleared local tokens but often left the app authorized with the provider. I implemented each provider’s revoke/deregister API call, extended the shared OAuth interface with an optional provider user id for Polar, and wired it through disconnect and user-delete flows. I also added Polar unit tests covering success, HTTP errors, and missing user id validation.",
    tech: ["Python", "FastAPI", "CI/CD"]
  },
  {
    id: "innerwarden",
    project: "InnerWarden: AWS Instance Metadata Access From Non-Root Users",
    url: "https://github.com/InnerWarden/innerwarden/pull/1130",
    role: "Contributor — PR #514",
    description:
      "Added a Sigma YAML rule that fires on outbound connections to 169.254.169.254 from processes that are not on a small allowlist of known metadata clients. Added support for exclusion filters in sigma_rule.rs by adding a filter field to the SigmaRule struct, resulting in a 99% reduction in false positives.",
    tech: ["Rust", "YML", "CI/CD"],
  },
];

/* =========================================================================
   EDIT ME — your hackathon wins.
   These render in their own "Hackathon Wins" section on the Projects page.
   ========================================================================= */

export const hackathonWins: HackathonWin[] = [
  {
    id: "morgan-stanley-code-to-give-hackathon",
    title: "Lemon Tree Volunteer Hub",
    description:
      "Developed a self-serve flyering platform for a Non-Profit organization (Lemontree), enabling easy and efficient distribution of flyers for interested volunteers. Designed PostgreSQL schemas with indexes, triggers, and constraints for volunteer coordination and route tracking. ",
    tech: ["Next.js", "React", "Google Maps API", "PostgreSQL", "GeminiAPI"],
    year: "2026",
    event: "Morgan Stanley Code to Give Hackathon",
    placement: "1st Place",
    links: [
      {
        label: "Project",
        url: "https://codetogive.bemyapp.com/#/projects/69b5ae3c9f60fc63bbcf74c0",
      },
    ],
  },
  {
    id: "tune-academy",
    title: "Tune Academy",
    description: "TuneAcademy uses AI to analyze a student's performance, identify specific weaknesses like pitch, rhythm, or tone, and match them with instructors who specialize in improving those skills. Students can book private or group lessons while sharing their progress through a social feed that helps them connect with instructors and other musicians. For instructors, TuneAcademy provides AI-powered student matching, scheduling, and verified reviews, creating an all-in-one platform to grow their teaching business.",
    tech: ["React", "GCP", "Firebase", "Python", "FastAPI", "Docker", "Essentia"],
    year: "2026",
    event: "Hack Brooklyn 2026",
    placement: "1st Place (Best Prenora Dynamics Hack)",
    links: [
      { label: "Devpost", url: "https://devpost.com/software/tuneacademy"}
    ]
  }
];
