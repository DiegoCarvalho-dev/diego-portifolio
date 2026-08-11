import type { CaseStudyDict } from "@/content/types";

export const caseStudies: CaseStudyDict = {
  backToProjects: "Voltar para os projetos",
  sections: {
    context: "Contexto",
    problem: "O problema",
    built: "O que eu construí",
    decisions: "Decisões técnicas que eu tomei e por quê",
    result: "Resultado",
    stack: "Stack usada",
    repo: "Ver repositório",
  },
  items: [
    {
      slug: "comanda-ai",
      title: "Comanda Aí — SaaS multi-tenant para restaurantes",
      cardSummary:
        "Cardápio por QR code, painel do garçom e tickets de cozinha, com isolamento de dados entre restaurantes validado em integração contínua.",
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
        "Restaurantes pequenos anotam pedido no papel e perdem comanda. Construí um sistema em que cada restaurante é um cliente isolado dentro da mesma aplicação.",
      problem:
        "Num sistema multi-tenant, basta esquecer um filtro em uma única consulta para um restaurante ver o pedido de outro. Disciplina do desenvolvedor não é garantia suficiente.",
      built:
        "Cadastro de restaurantes por subdomínio, painéis separados para administrador do sistema, dono do restaurante e garçom, cardápio público acessível por QR code em cada mesa, pedidos enviados à cozinha em rodadas sequenciais, alerta de pedido parado e impressão de ticket térmico adaptada à largura de papel de cada cliente.",
      decisions: [
        {
          lead: "Isolamento fail-closed",
          body: "apliquei um escopo global no ORM que, quando não há restaurante identificado no contexto, faz a consulta retornar vazio em vez de retornar tudo. Um esquecimento vira tela em branco, não vazamento de dado.",
        },
        {
          lead: "Regras de negócio no modelo, não no controller",
          body: "a mudança de status de um pedido só acontece por um método dedicado, e escrita direta lança exceção. A regra não depende de quem chama.",
        },
        {
          lead: "Teste de isolamento como portão de CI",
          body: "escrevi o teste que prova a separação entre clientes antes das funcionalidades de domínio, e ele roda a cada pull request.",
        },
        {
          lead: "Spike antes de decidir",
          body: "testei impressão térmica por ESC/POS num protótipo descartável, comparei com a impressão pelo navegador, documentei a decisão com as alternativas descartadas e só então implementei.",
        },
      ],
      result:
        "Base coberta por suíte de testes de feature, com pipeline verde e o isolamento entre clientes verificado automaticamente a cada mudança.",
      image: {
        kind: "photo",
        src: "/images/projects/comanda-ai.webp",
        alt: "Captura de tela do painel do Comanda Aí",
        aspect: "16/10",
      },
      metaDescription:
        "Estudo de caso: SaaS multi-tenant para restaurantes com cardápio por QR code, painel do garçom, tickets de cozinha e isolamento de dados validado em integração contínua.",
    },
    {
      slug: "driving",
      title: "Driving — Aplicativo de gestão para autoescolas",
      cardSummary:
        "App Flutter com perfis de aluno e administrador, agenda de aulas e gestão de alunos, instrutores e veículos sobre Firebase.",
      stack: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore"],
      context:
        "Autoescolas controlam agenda de aulas práticas em papel e planilha, com conflito de horário entre instrutor, veículo e aluno.",
      problem:
        "A agenda precisa refletir mudança em tempo real para dois perfis diferentes ao mesmo tempo, e o dado precisa estar protegido no servidor, não só na interface.",
      built:
        "Aplicativo com dois perfis, cadastro completo de alunos, instrutores e veículos, agenda administrativa com configuração de horários por período e filtros, e agendamento pelo aluno.",
      decisions: [
        {
          lead: "Padrão Repository sobre o Firestore",
          body: "as telas não conhecem o banco, consomem streams de um repositório. Isso permitiu migrar de dados fictícios para o backend real sem reescrever a interface.",
        },
        {
          lead: "Regras de segurança do Firestore escritas e versionadas junto ao código",
          body: "para que a permissão seja garantida no servidor e não apenas escondida na tela.",
        },
      ],
      result: "App funcional com dados reais, agenda reativa e permissões aplicadas no servidor.",
      image: {
        kind: "photo",
        src: "/images/projects/driving.webp",
        alt: "Tela do aplicativo Driving em um smartphone",
        aspect: "9/19.5",
      },
      metaDescription:
        "Estudo de caso: aplicativo Flutter de gestão para autoescolas com perfis de aluno e administrador, agenda reativa e regras de segurança aplicadas no servidor.",
    },
    {
      slug: "monitoramento-industrial",
      title: "Plataforma de monitoramento industrial (IIoT)",
      cardSummary:
        "Painel configurável de indicadores industriais em três plataformas — web, mobile e API — com dados de sensores chegando em tempo real.",
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
        "Projeto profissional · detalhes de produto e cliente preservados por confidencialidade",
      context:
        "Indústrias precisam acompanhar sensores de máquina em tempo real, cada cliente com indicadores diferentes.",
      problem:
        "Um painel fixo não serve: cada cliente quer o seu. E gráfico com série temporal longa trava o navegador.",
      built:
        "Um construtor de painéis com catálogo de mais de 30 modelos de widget, configuração por widget, atualização em tempo real via MQTT e streaming para o navegador — entregue em web, em aplicativo móvel nativo e na API que sustenta os dois. Também uma planta industrial 3D interativa, com catálogo de máquinas, layout salvo por cliente e vínculo com dispositivos reais.",
      decisions: [
        {
          lead: "Redução de pontos com algoritmo de downsampling",
          body: "em vez de jogar milhares de leituras no gráfico, reduzo a série preservando a forma da curva, com orçamento de pontos calculado pelo tamanho da tela.",
        },
        {
          lead: "Um contrato, três plataformas",
          body: "o mesmo esquema de configuração de widget é entendido pelo web, pelo mobile e pela API, o que permitiu paridade de funcionalidade entre as plataformas.",
        },
        {
          lead: "Otimização medida, não adivinhada",
          body: "deduplicação de requisições, suspensão da atualização automática quando o coletor está indisponível e índices dedicados às consultas críticas.",
        },
      ],
      result:
        "Séries longas passaram a renderizar sem travamento e o cliente monta o próprio painel sem depender do time de desenvolvimento.",
      image: { kind: "diagram", id: "iiot" },
      metaDescription:
        "Estudo de caso: plataforma de monitoramento industrial (IIoT) com construtor de painéis, dados de sensores em tempo real via MQTT e entrega em web, mobile e API.",
    },
    {
      slug: "gestao-rh",
      title: "Módulo de gestão de RH construído do zero",
      cardSummary:
        "Portal do funcionário completo entregue em cinco semanas: API, banco multi-tenant, interface e importadores de folha de pagamento.",
      stack: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "React", "TypeScript"],
      confidentialityLabel:
        "Projeto profissional · detalhes de produto e cliente preservados por confidencialidade",
      context:
        "Uma plataforma corporativa precisava de um módulo de RH inteiro, do zero, com prazo curto.",
      problem:
        "Muitas telas, muitos tipos de documento e dados sensíveis de folha de pagamento que jamais podem cruzar entre empresas.",
      built:
        "Portal do funcionário com cerca de 20 telas — contracheque, férias, espelho de ponto, faltas, horas extras, afastamentos, vale-transporte, informe de rendimentos — atendimento em chat contínuo, painel do gestor e importadores de arquivos de folha de pagamento.",
      decisions: [
        {
          lead: "Isolamento no banco, não só na aplicação",
          body: "restrições de unicidade e índices compostos por empresa, para que a separação de dados esteja garantida no schema.",
        },
        {
          lead: "Uma rota por domínio",
          body: "separei as rotas por assunto em vez de concentrar tudo num arquivo, para que o módulo continuasse navegável com o crescimento.",
        },
        {
          lead: "Recuperação de senha com código temporário enviado por SMS",
          body: "com expiração controlada e validação no servidor.",
        },
      ],
      result:
        "Módulo entregue e integrado à plataforma, com o isolamento entre empresas garantido pelo próprio modelo de dados.",
      image: { kind: "diagram", id: "hr" },
      metaDescription:
        "Estudo de caso: módulo de gestão de RH construído do zero — API FastAPI, banco multi-tenant em PostgreSQL, portal do funcionário em React e importadores de folha de pagamento.",
    },
  ],
};
