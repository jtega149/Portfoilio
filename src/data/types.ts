/* =========================================================================
   CONTENT TYPES
   These describe the shape of everything in /src/data. You normally won't
   need to touch this file — it just gives you autocomplete + safety while
   editing the data files.
   ========================================================================= */

export interface SocialLink {
  label: string; // "GitHub", "LinkedIn", ...
  url: string;
  handle?: string; // optional display handle, e.g. "@johnny"
}

export interface SkillGroup {
  category: string; // "Languages", "Security", ...
  items: string[];
}

export interface Profile {
  name: string;
  role: string; // short job title
  tagline: string; // one-line hero statement
  location: string;
  email: string;
  /** Path to profile photo in /public, e.g. "/profile.jpg". Circular on Home. */
  photo?: string;
  /** Short rotating words shown after "I build" in the hero typing effect. */
  heroRotators: string[];
  /** Each string is a paragraph on the About page. */
  about: string[];
  skills: SkillGroup[];
  socials: SocialLink[];
}

export interface ProjectLink {
  label: string; // "Source", "Live", "Demo", ...
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  links: ProjectLink[];
  /** Featured projects render larger / first. */
  featured?: boolean;
}

export interface OpenSourceContribution {
  id: string;
  project: string; // name of the OSS project
  url: string; // link to the PR / repo / issue
  role: string; // "Contributor", "Maintainer", "Author of PR #1234"
  description: string;
  tech?: string[];
}

export interface HackathonWin {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  event: string; // e.g. "HackMIT 2025"
  placement?: string; // e.g. "1st Place", "Best Security Track"
  links: ProjectLink[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string; // "2023 — Present"
  location?: string;
  summary?: string;
  highlights: string[];
  tech?: string[];
  /** Path to company logo in /public, e.g. "/logos/afrl.png". */
  logo?: string;
}

export interface Resume {
  /** Path to the PDF, relative to /public. Drop your file in /public. */
  file: string;
  /** Filename used when the visitor downloads it. */
  downloadName: string;
  /** Shown as "Last updated …". */
  updated: string;
}
