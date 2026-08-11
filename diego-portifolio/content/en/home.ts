import type { HomeDict } from "@/content/types";

export const home: HomeDict = {
  hero: {
    name: "Diego Carvalho",
    role: "Full Stack Software Engineer",
    positioning:
      "I build products end to end — interface, server, mobile app, and database. I have shipped real-time industrial monitoring platforms, a multi-tenant SaaS with data isolation enforced by automated tests, and a complete corporate mobile app.",
    positioningDetail:
      "Day to day I work with React, Next.js, and React Native (Expo) on the interface, Python (FastAPI), Laravel, and Node.js on the server, and PostgreSQL, MySQL, and MongoDB on the data side — with Docker, automated tests, and continuous integration as a normal part of the workflow. I study Computer Science at Universidade Potiguar.",
    availability: "Natal, Brazil · Open to on-site, hybrid, or remote",
    seeProjects: "See projects",
    downloadCV: "Download résumé (PDF)",
  },
  how: {
    title: "How I work",
    pillars: [
      {
        title: "End-to-end product",
        body: "I deliver the whole feature: I model the database, write the API, build the interface, and ship it. I have worked on the same product across web, mobile, and server, which forces me to think about the contract between layers before writing the first line.",
      },
      {
        title: "Data and real time",
        body: "Much of what I have built deals with data arriving all the time: industrial sensors over MQTT, streaming updates to the browser, and long time series. I learned to optimize what I measure — request deduplication, database indexes, historical aggregation, and reducing chart points without losing the shape of the curve.",
      },
      {
        title: "Quality and security by default",
        body: "Tenant data isolation that fails closed instead of leaking, business rules enforced in the model itself, automated tests running on every pull request, and architecture decisions documented before implementation.",
      },
    ],
  },
  featured: {
    title: "Featured projects",
    openCaseStudy: "Read case study",
  },
  other: {
    title: "Other work",
  },
  stack: {
    title: "Stack",
    groups: [
      { name: "Languages", items: "TypeScript, JavaScript, Python, PHP 8, SQL, Dart, HTML5, CSS3" },
      {
        name: "Front end",
        items:
          "React, Next.js, Vue.js, React Native (Expo), Vite, Tailwind CSS, ECharts, Three.js / react-three-fiber",
      },
      {
        name: "Back end",
        items:
          "Laravel, Filament, FastAPI, Flask, Node.js, REST APIs, JWT with refresh tokens, WebSocket, SSE, MQTT, workers and queues, multi-tenancy",
      },
      {
        name: "Data",
        items:
          "PostgreSQL, MySQL, MongoDB, Firebase / Firestore, Redis, SQLAlchemy, Eloquent, relational and NoSQL modeling, migrations, indexes and query optimization",
      },
      {
        name: "Infrastructure",
        items:
          "Docker, Docker Compose, GitHub Actions, AWS (IoT Core), S3-compatible object storage, Git, Azure DevOps",
      },
      {
        name: "Quality",
        items:
          "PHPUnit, pytest, unit and feature tests, code review through pull requests, Clean Code, SOLID, MVC and layered architecture",
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Full Stack Software Engineer (Intern)",
        org: "Dice Tecnologia",
        place: "Remote — company based in Rio Grande do Sul, Brazil",
        period: "Feb 2026 – present",
        body: "Full-stack work on five products: industrial monitoring, a corporate mobile app, a corporate learning platform, digital signage, and a multi-product API. Front end, back end, mobile, database modeling, and containerized infrastructure.",
        highlights: [
          "Lead technical owner of the corporate mobile app in React Native (Expo): authentication with concurrent token refresh, push notifications, and full feature parity with the web version.",
          "Modeling and optimization of relational and NoSQL databases: per-client constraints and composite indexes in PostgreSQL, indexes for the critical queries in MongoDB, and historical aggregation of time series, eliminating freezes in long queries.",
        ],
      },
      {
        role: "Web Developer (Intern)",
        org: "Docax",
        period: "Dec 2025 – Feb 2026",
        body: "Responsive websites and landing pages in HTML5, CSS3, and JavaScript, building interfaces and visual improvements for client projects.",
      },
    ],
  },
  about: {
    title: "About",
    body: [
      "I am a full-stack developer studying Computer Science at Universidade Potiguar, graduating in December 2028. I like the kind of problem that cannot be solved just by building screens: how to guarantee that one customer's data never shows up for another, how to make a chart with thousands of points open fast, how to make a business rule impossible to bypass by accident.",
      "I work well in a team, review code through pull requests, and write down decisions before implementing them — because a decision that is not written down becomes the same discussion again three months later.",
    ],
    photoAlt: "Photo of Diego Carvalho",
  },
  contact: {
    title: "Contact",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    downloadCV: "Download résumé (PDF)",
  },
};
