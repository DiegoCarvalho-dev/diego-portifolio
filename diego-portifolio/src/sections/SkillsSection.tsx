import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiVuedotjs } from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava size={56} />,
    description:
      "Java foi a base do meu desenvolvimento back-end, fortalecendo meu domínio em orientação a objetos, boas práticas e organização de código, aplicados em projetos acadêmicos e full stack.",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={56} />,
    description:
      "Utilizo JavaScript para criar aplicações web dinâmicas, trabalhando com lógica, eventos e interações da interface, tornando as aplicações mais funcionais e responsivas.",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={56} />,
    description:
      "HTML é a base da estrutura dos meus projetos front-end, aplicando boas práticas de HTML5 e semântica para organização correta e acessível do conteúdo.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={56} />,
    description:
      "Uso CSS para criar layouts modernos, responsivos e alinhados à identidade visual dos projetos, aplicando boas práticas e conceitos avançados de estilização.",
  },
  {
    name: "Python",
    icon: <FaPython size={56} />,
    description:
      "Python foi minha primeira linguagem de programação, utilizada em diversos projetos ao longo da minha trajetória, sendo uma base importante para lógica, automações e desenvolvimento back-end.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={56} />,
    description:
      "Possuo conhecimentos básicos em Node.js para desenvolvimento back-end, com foco em APIs e lógica de servidor, e estou em constante evolução nessa tecnologia.",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs size={56} />,
    description:
      "Utilizo Vue.js no desenvolvimento de interfaces modernas e componentizadas, integrando HTML, CSS e JavaScript de forma organizada e produtiva.",
  },
  {
    name: "Docker",
    icon: <FaDocker size={56} />,
    description:
      "Tenho conhecimento intermediário em Docker, utilizando conteinerização para padronizar ambientes e facilitar a execução de aplicações em projetos profissionais.",
  },
  {
    name: "React",
    icon: <FaReact size={56} />,
    description:
      "Utilizo React em projetos front-end para criação de interfaces componentizadas, com conhecimentos básicos e foco em aprofundar cada vez mais no ecossistema.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={56} />,
    description:
      "Trabalho com TypeScript em projetos front-end, aplicando tipagem para maior segurança e organização do código, com conhecimentos básicos em constante evolução.",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={56} />,
    description:
      "Git é uma ferramenta essencial no meu fluxo de trabalho, utilizada para versionamento de código, organização de branches e colaboração eficiente em projetos.",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Habilidades
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Tecnologias que fazem parte da minha trajetória como desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                h-[360px]
                w-full
                max-w-[260px]
                border border-white/20
                rounded-xl
                px-6
                pt-6
                pb-6
                hover:scale-105 transition
              "
            >
              <div className="text-center space-y-4">

                <div className="flex justify-center text-white">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {skill.name}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {skill.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
