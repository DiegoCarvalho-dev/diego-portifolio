import type { HomeDict } from "@/content/types";

export const home: HomeDict = {
  hero: {
    name: "Diego Carvalho",
    role: "Engenheiro de Software Full Stack",
    positioning:
      "Construo produtos de ponta a ponta — interface, servidor, aplicativo móvel e banco de dados. Já entreguei plataformas de monitoramento industrial em tempo real, um SaaS multi-tenant com isolamento de dados validado por testes automatizados e um aplicativo mobile corporativo completo.",
    availability: "Natal/RN · Disponível para presencial, híbrido ou remoto",
    seeProjects: "Ver projetos",
    downloadCV: "Baixar currículo (PDF)",
  },
  how: {
    title: "Como eu trabalho",
    pillars: [
      {
        title: "Produto de ponta a ponta",
        body: "Entrego a funcionalidade inteira: modelo o banco, escrevo a API, construo a interface e publico. Trabalhei no mesmo produto em web, mobile e servidor, o que me obriga a pensar no contrato entre as camadas antes de escrever a primeira linha.",
      },
      {
        title: "Dados e tempo real",
        body: "Boa parte do que construí lida com dados chegando o tempo todo: sensores industriais via MQTT, streaming de atualizações para o navegador e séries temporais longas. Aprendi a otimizar o que eu meço — deduplicação de requisições, índices no banco, agregação histórica e redução de pontos no gráfico sem perder a forma da curva.",
      },
      {
        title: "Qualidade e segurança por padrão",
        body: "Isolamento de dados entre clientes que falha fechado em vez de vazar, regras de negócio protegidas no próprio modelo, testes automatizados rodando a cada pull request e decisão de arquitetura documentada antes da implementação.",
      },
    ],
  },
  featured: {
    title: "Projetos em destaque",
    openCaseStudy: "Ler estudo de caso",
  },
  other: {
    title: "Outros trabalhos",
  },
  stack: {
    title: "Stack",
    groups: [
      {
        name: "Linguagens",
        items: "TypeScript, JavaScript, Python, PHP 8, SQL, Dart, HTML5, CSS3",
      },
      {
        name: "Front-end",
        items:
          "React, Next.js, Vue.js, React Native (Expo), Vite, Tailwind CSS, ECharts, Three.js / react-three-fiber",
      },
      {
        name: "Back-end",
        items:
          "Laravel, Filament, FastAPI, Flask, Node.js, API REST, JWT, WebSocket, SSE, MQTT, workers e filas",
      },
      {
        name: "Dados",
        items: "PostgreSQL, MySQL, MongoDB, Firebase / Firestore, Redis, SQLAlchemy, Eloquent",
      },
      {
        name: "Infra",
        items: "Docker, Docker Compose, GitHub Actions, AWS (IoT Core), Git, Azure DevOps",
      },
      {
        name: "Qualidade",
        items: "PHPUnit, pytest, testes unitários e de feature, code review por pull request",
      },
    ],
  },
  experience: {
    title: "Experiência",
    items: [
      {
        role: "Engenheiro de Software Full Stack (Estágio)",
        org: "Dice Tecnologia",
        place: "Natal/RN",
        period: "fev/2026 – atual",
        body: "Atuação full stack em cinco produtos: monitoramento industrial, aplicativo mobile corporativo, plataforma de ensino corporativo, sinalização digital e API multiproduto. Front-end, back-end, mobile, modelagem de banco e infraestrutura em contêiner.",
      },
      {
        role: "Desenvolvedor Web (Estágio)",
        org: "Docax",
        period: "dez/2025 – fev/2026",
        body: "Sites e landing pages responsivos em HTML5, CSS3 e JavaScript, com criação de interfaces e melhorias visuais em projetos de clientes.",
      },
    ],
  },
  about: {
    title: "Sobre",
    body: "Sou desenvolvedor full stack e curso Ciência da Computação na Universidade Potiguar, com conclusão prevista para dezembro de 2028. Gosto do tipo de problema que não se resolve só escrevendo tela: como garantir que o dado de um cliente nunca apareça para outro, como fazer um gráfico com milhares de pontos abrir rápido, como deixar uma regra de negócio impossível de burlar por descuido. Trabalho bem em equipe, reviso código por pull request e escrevo o que decidi antes de implementar — porque decisão que não está escrita vira discussão de novo três meses depois.",
    photoAlt: "Foto de Diego Carvalho",
  },
  contact: {
    title: "Contato",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
    downloadCV: "Baixar currículo (PDF)",
  },
};
