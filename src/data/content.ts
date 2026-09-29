export const experience = [
  {
    date: "Apr 2025 – Present",
    title: "Software Engineer III",
    org: "GlobalVetLink",
    detail:
      "Tech lead across 5-engineer squads; drove estimation, mentored 2-3 engineers, and led the release cadence initiative that cut deploys from 2x/week to daily.",
  },
  {
    date: "2023 – 2025",
    title: "MBA (IT Focus)",
    org: "Humphreys University",
  },
  {
    date: "Oct 2021 – Apr 2025",
    title: "Software Engineer II",
    org: "GlobalVetLink",
    detail:
      "Eliminated a flagged SOC2 audit risk with a PCI-compliant Zuora ACH integration; drove the TypeScript migration from 1.5% to 50% coverage.",
  },
  {
    date: "May 2021 – Oct 2021",
    title: "Software Engineer I",
    org: "GlobalVetLink",
    detail: "React and Groovy/Grails on animal health software.",
  },
  {
    date: "Aug 2020 – May 2021",
    title: "Account Management Programmer",
    org: "Smart Data Solutions",
  },
  {
    date: "Jul 2020 – Aug 2020",
    title: "Software Developer Intern",
    org: "Insuree",
  },
  {
    date: "Jan 2020 – May 2020",
    title: "Teaching Assistant",
    org: "Iowa State University",
  },
  {
    date: "Jun 2019 – Aug 2019",
    title: "Engineering Intern",
    org: "Siemens Gas & Power",
  },
  {
    date: "2017 – 2020",
    title: "B.S. Computer Engineering",
    org: "Iowa State University",
  },
];

export const highlights = [
  "Architected an OpenSearch integration replacing legacy database-driven search, from the React UI to the indexing microservice",
  "Eliminated a flagged SOC2 audit risk with a PCI-compliant Zuora ACH payment integration",
  "Preserved a mission-critical certificate integration serving ~5,000 weekly users by reverse-engineering a government portal's auth flow",
  "Drove TypeScript adoption from 1.5% to 50% codebase coverage over 18 months",
  "Raised release cadence from 2x/week to daily deployments, cutting median PR merge time from 3-4 days to under 48 hours",
];

export const skills: Record<string, string[]> = {
  Backend: ["Java", "Spring Boot", "Groovy", "Grails", "Node.js", "Firebase Functions"],
  Frontend: ["React", "TypeScript", "Redux", "Next.js", "React Native"],
  Mobile: ["Kotlin", "Jetpack Compose", "Wear OS"],
  "Data & Search": ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "OpenSearch"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
  Other: ["Zuora", "Cypress", "REST APIs"],
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
  playStoreId?: string;
};

export const projects: Project[] = [
  {
    name: "ScanBid",
    description:
      "Private experiment in AI-integrated auction tooling — pulls product descriptions from external sources via AI. Built mainly to explore Next.js 14 and production AI integration patterns, not a polished product.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "AI APIs"],
  },
  {
    name: "AiAnalyze",
    description:
      "Android app using Gemini to summarize articles and links into searchable snippets. Approved for Google Play production.",
    tech: ["Kotlin", "Jetpack Compose", "Gemini API", "DynamoDB"],
  },
  {
    name: "This site",
    description:
      "This portfolio itself — rebuilt from a stale Create React App/antd v4 site into Next.js 16 (App Router, SSR) with TypeScript and Ant Design v6.",
    tech: ["Next.js", "TypeScript", "Ant Design v6"],
    href: "https://github.com/raibbl/raed-website",
  },
  {
    name: "AyaBelQuran",
    description: "Wear OS app to pull a Quran verse with audio on your wrist. Open source.",
    tech: ["Kotlin", "Jetpack Compose", "Wear OS"],
    href: "https://github.com/raibbl/AyaBelQuran",
    playStoreId: "com.raibbl.ayabelquran",
  },
  {
    name: "inkcal",
    description:
      "E-ink calendar display: a Next.js backend paired with custom ESP32 firmware driving the physical display.",
    tech: ["Next.js", "TypeScript", "C++/ESP32"],
    href: "https://github.com/raibbl/inkcal",
  },
  {
    name: "TsLens",
    description:
      "VS Code extension that tracks a workspace's TypeScript adoption progress and flags JS files worth refactoring.",
    tech: ["TypeScript", "VS Code API"],
    href: "https://github.com/raibbl/TsLens",
  },
];

export const socials = {
  github: "https://github.com/raibbl",
  linkedin: "https://www.linkedin.com/in/raedalbloushy/",
  email: "raibbliowa@gmail.com",
};
