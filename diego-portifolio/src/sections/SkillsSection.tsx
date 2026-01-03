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
      "Java fortaleceu minha base em orientação a objetos, boas práticas e desenvolvimento back-end ao longo da minha formação.",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={56} />,
    description:
      "Utilizo JavaScript para criar aplicações web dinâmicas, manipulando lógica, eventos e comportamento da interface.",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={56} />,
    description:
      "Responsável pela estruturação semântica das páginas e organização correta do conteúdo.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={56} />,
    description:
      "Uso CSS para criar layouts modernos, responsivos e alinhados com a identidade visual dos projetos.",
  },
  {
    name: "Python",
    icon: <FaPython size={56} />,
    description:
      "Linguagem que utilizo para automações, lógica de programação e integração com APIs.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={56} />,
    description:
      "Experiência com Node.js no desenvolvimento back-end e criação de APIs simples.",
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs size={56} />,
    description:
      "Framework utilizado para construção de interfaces modernas e componentizadas.",
  },
  {
    name: "Docker",
    icon: <FaDocker size={56} />,
    description:
      "Conhecimento em containers para padronização de ambientes e deploy de aplicações.",
  },
  {
    name: "React",
    icon: <FaReact size={56} />,
    description:
      "Utilizo React para criar interfaces reativas, organizadas em componentes e com boa escalabilidade.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={56} />,
    description:
      "Uso TypeScript para garantir maior segurança, organização e legibilidade no código.",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={56} />,
    description:
      "Ferramenta essencial no meu fluxo de trabalho para versionamento e colaboração em projetos.",
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
