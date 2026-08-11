import type { DiagramsDict } from "@/content/types";

export const diagrams: DiagramsDict = {
  iiot: {
    title:
      "Architecture diagram: sensors publish over MQTT to the Python API, which writes to MongoDB and streams in real time to the web and mobile dashboards",
    sensors: "Sensors",
    broker: "MQTT broker",
    api: "API (Python)",
    db: "MongoDB",
    web: "Web (React)",
    mobile: "Mobile (Expo)",
    stream: "real time",
  },
  hr: {
    title:
      "Architecture diagram: payroll importers feed the FastAPI service on a multi-tenant PostgreSQL database, serving the employee portal and the manager panel",
    importers: "Payroll importers",
    api: "API (FastAPI)",
    db: "PostgreSQL",
    portal: "Employee portal",
    manager: "Manager panel",
    tenancy: "per-company isolation in the schema",
  },
};
