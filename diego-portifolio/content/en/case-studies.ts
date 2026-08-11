import type { CaseStudyDict } from "@/content/types";

export const caseStudies: CaseStudyDict = {
  backToProjects: "Back to projects",
  sections: {
    context: "Context",
    problem: "The problem",
    built: "What I built",
    decisions: "Technical decisions I made and why",
    result: "Result",
    stack: "Stack",
    repo: "View repository",
  },
  items: [
    {
      slug: "comanda-ai",
      title: "Comanda Aí — Multi-tenant SaaS for restaurants",
      cardSummary:
        "QR code menu, waiter panel, and kitchen tickets, with tenant data isolation verified in continuous integration.",
      stack: [
        "Laravel",
        "Filament",
        "PHP 8",
        "MySQL",
        "PHPUnit",
        "GitHub Actions",
        "Docker",
        "Tailwind",
      ],
      context:
        "Small restaurants take orders on paper and lose track of tabs. I built a system where each restaurant is an isolated tenant inside the same application.",
      problem:
        "In a multi-tenant system, forgetting a filter in a single query is all it takes for one restaurant to see another's orders. Developer discipline is not a sufficient guarantee.",
      built:
        "Restaurant registration by subdomain, separate panels for the system administrator, the restaurant owner, and the waiter, a public menu reachable by QR code at each table, orders sent to the kitchen in sequential rounds, stalled-order alerts, and thermal ticket printing adapted to each customer's paper width.",
      decisions: [
        {
          lead: "Fail-closed tenant isolation",
          body: "I applied a global scope in the ORM that, when no restaurant is identified in the context, makes the query return empty instead of returning everything. A slip becomes a blank screen, not a data leak.",
        },
        {
          lead: "Business rules in the model, not the controller",
          body: "an order's status can only change through a dedicated method, and direct writes throw an exception. The rule does not depend on who calls it.",
        },
        {
          lead: "Isolation test as a CI gate",
          body: "I wrote the test that proves the separation between tenants before the domain features, and it runs on every pull request.",
        },
        {
          lead: "Spike before deciding",
          body: "I tested thermal printing over ESC/POS in a throwaway prototype, compared it with browser printing, documented the decision along with the discarded alternatives, and only then implemented it.",
        },
      ],
      result:
        "A codebase covered by a feature test suite, with a green pipeline and tenant isolation automatically verified on every change.",
      image: {
        kind: "photo",
        src: "/images/projects/comanda-ai.webp",
        alt: "Screenshot of the Comanda Aí panel",
        aspect: "16/10",
      },
      metaDescription:
        "Case study: a multi-tenant SaaS for restaurants with a QR code menu, waiter panel, kitchen tickets, and data isolation verified in continuous integration.",
    },
    {
      slug: "driving",
      title: "Driving — Management app for driving schools",
      cardSummary:
        "Flutter app with student and admin profiles, lesson scheduling, and management of students, instructors, and vehicles on Firebase.",
      stack: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore"],
      context:
        "Driving schools manage practical lesson schedules on paper and spreadsheets, with time conflicts between instructor, vehicle, and student.",
      problem:
        "The schedule needs to reflect changes in real time for two different profiles at once, and the data must be protected on the server, not just in the interface.",
      built:
        "An app with two profiles, full registration of students, instructors, and vehicles, an administrative schedule with per-period time slot configuration and filters, and student-side booking.",
      decisions: [
        {
          lead: "Repository pattern over Firestore",
          body: "screens do not know about the database; they consume streams from a repository. This made it possible to migrate from mock data to the real backend without rewriting the interface.",
        },
        {
          lead: "Firestore security rules written and versioned alongside the code",
          body: "so that permissions are enforced on the server rather than merely hidden in the UI.",
        },
      ],
      result:
        "A working app with real data, a reactive schedule, and permissions enforced on the server.",
      image: {
        kind: "photo",
        src: "/images/projects/driving.webp",
        alt: "Driving app screen on a smartphone",
        aspect: "9/19.5",
      },
      metaDescription:
        "Case study: a Flutter management app for driving schools with student and admin profiles, a reactive schedule, and security rules enforced on the server.",
    },
    {
      slug: "industrial-monitoring",
      title: "Industrial monitoring platform (IIoT)",
      cardSummary:
        "A configurable industrial indicator dashboard across three platforms — web, mobile, and API — with sensor data arriving in real time.",
      stack: [
        "React",
        "TypeScript",
        "React Native (Expo)",
        "Python",
        "MQTT",
        "MongoDB",
        "ECharts",
        "Three.js",
      ],
      confidentialityLabel:
        "Professional project · product and client details withheld for confidentiality",
      context:
        "Industrial plants need to track machine sensors in real time, and every client needs different indicators.",
      problem:
        "A fixed dashboard does not work: every client wants their own. And charts with long time series freeze the browser.",
      built:
        "A dashboard builder with a catalog of more than 30 widget models, per-widget configuration, real-time updates over MQTT, and streaming to the browser — delivered on web, in a native mobile app, and in the API that powers both. Also an interactive 3D industrial plant, with a machine catalog, per-client saved layouts, and links to real devices.",
      decisions: [
        {
          lead: "Point reduction with a downsampling algorithm",
          body: "instead of throwing thousands of readings at the chart, I reduce the series while preserving the shape of the curve, with a point budget calculated from the screen size.",
        },
        {
          lead: "One contract, three platforms",
          body: "the same widget configuration schema is understood by web, mobile, and the API, which enabled feature parity across the platforms.",
        },
        {
          lead: "Optimization measured, not guessed",
          body: "request deduplication, suspending automatic refresh when the collector is unavailable, and indexes dedicated to the critical queries.",
        },
      ],
      result:
        "Long series now render without freezing, and clients build their own dashboards without depending on the development team.",
      image: { kind: "diagram", id: "iiot" },
      metaDescription:
        "Case study: an industrial monitoring (IIoT) platform with a dashboard builder, real-time sensor data over MQTT, delivered on web, mobile, and API.",
    },
    {
      slug: "hr-management",
      title: "HR management module built from scratch",
      cardSummary:
        "A complete employee portal delivered in five weeks: API, multi-tenant database, interface, and payroll file importers.",
      stack: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "React", "TypeScript"],
      confidentialityLabel:
        "Professional project · product and client details withheld for confidentiality",
      context:
        "A corporate platform needed an entire HR module, from scratch, on a short deadline.",
      problem:
        "Many screens, many document types, and sensitive payroll data that must never cross between companies.",
      built:
        "An employee portal with about 20 screens — payslips, vacations, timesheet mirror, absences, overtime, leaves, transportation vouchers, income statements — continuous chat support, a manager panel, and payroll file importers.",
      decisions: [
        {
          lead: "Isolation in the database, not just in the application",
          body: "uniqueness constraints and composite indexes per company, so that data separation is guaranteed by the schema.",
        },
        {
          lead: "One route per domain",
          body: "I split routes by subject instead of concentrating everything in one file, so the module stayed navigable as it grew.",
        },
        {
          lead: "Password recovery with a temporary code sent by SMS",
          body: "with controlled expiration and server-side validation.",
        },
      ],
      result:
        "Module delivered and integrated into the platform, with company isolation guaranteed by the data model itself.",
      image: { kind: "diagram", id: "hr" },
      metaDescription:
        "Case study: an HR management module built from scratch — FastAPI, a multi-tenant PostgreSQL database, a React employee portal, and payroll file importers.",
    },
  ],
};
