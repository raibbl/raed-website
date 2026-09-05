export const experience = [
  {
    date: "Apr 2025",
    title: "Software Engineer III",
    org: "GlobalVetLink",
    detail:
      "Tech lead on a 5-engineer squad; mentoring, estimation, and delivery under ambiguity.",
  },
  {
    date: "Nov 2021",
    title: "Promoted to Software Engineer II",
    org: "GlobalVetLink",
    detail: "Progressed from SE I within six months of joining.",
  },
  {
    date: "May 2021",
    title: "Software Engineer I",
    org: "GlobalVetLink",
    detail: "React and Groovy/Grails on animal health software.",
  },
  {
    date: "Aug 2020",
    title: "Account Management Programmer",
    org: "SmartData Solutions",
  },
  {
    date: "May 2020",
    title: "B.S. Computer Engineering",
    org: "Iowa State University",
  },
  {
    date: "Jan 2020",
    title: "Teaching Assistant",
    org: "Iowa State University",
  },
  {
    date: "Jun 2019",
    title: "Engineering Intern",
    org: "Siemens",
  },
];

export const highlights = [
  "Resolved a flagged SOC2 audit risk by building a Zuora ACH payment integration",
  "Reverse-engineered a government portal auth flow serving ~5,000 users/week",
  "Drove TypeScript adoption from 1.5% to 50% codebase coverage over 18 months",
  "Replaced a legacy DB-driven search with an OpenSearch integration",
  "Raised release cadence from twice a week to daily deployments",
];

export const skills: Record<string, string[]> = {
  Backend: ["Java", "Spring Boot", "Groovy", "Grails", "Node.js", "NestJS"],
  Frontend: ["React", "TypeScript", "Redux", "Next.js"],
  Mobile: ["Kotlin", "Jetpack Compose", "Wear OS"],
  "Data & Search": ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "OpenSearch"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: "AyaBelQuran",
    description:
      "Wear OS app to pull a Quran verse with audio on your wrist. Open source, 150+ installs.",
    tech: ["Kotlin", "Jetpack Compose", "Wear OS"],
    href: "https://github.com/raibbl/AyaBelQuran",
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
  {
    name: "Moneypal",
    description: "Personal finance tracking app built with Expo/React Native.",
    tech: ["React Native", "Expo", "TypeScript"],
    href: "https://github.com/raibbl/Moneypal",
  },
];

export const socials = {
  github: "https://github.com/raibbl",
  linkedin: "https://www.linkedin.com/in/raedalbloushy/",
  email: "raibbliowa@gmail.com",
};
