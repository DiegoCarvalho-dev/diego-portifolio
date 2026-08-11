import type { DiagramsDict } from "@/content/types";

export const diagrams: DiagramsDict = {
  iiot: {
    title:
      "Diagrama de arquitetura: sensores publicam via MQTT para a API em Python, que grava no MongoDB e transmite em tempo real para os painéis web e mobile",
    sensors: "Sensores",
    broker: "Broker MQTT",
    api: "API (Python)",
    db: "MongoDB",
    web: "Web (React)",
    mobile: "Mobile (Expo)",
    stream: "tempo real",
  },
  hr: {
    title:
      "Diagrama de arquitetura: importadores de folha alimentam a API FastAPI sobre PostgreSQL multi-tenant, que serve o portal do funcionário e o painel do gestor",
    importers: "Importadores de folha",
    api: "API (FastAPI)",
    db: "PostgreSQL",
    portal: "Portal do funcionário",
    manager: "Painel do gestor",
    tenancy: "isolamento por empresa no schema",
  },
};
