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
    <section id="skills" className="bg-black py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 md:space-y-20">
        <div
          className="text-center space-y-3 sm:space-y-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white px-2 sm:px-0">
            Habilidades
          </h2>

          <p className="text-zinc-400 max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-0">
            Tecnologias que fazem parte da minha trajetória como desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 place-items-center px-2 sm:px-0">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              className="w-full flex justify-center"
            >
              <div
                className="
                  w-full
                  max-w-[220px] sm:max-w-[240px] md:max-w-[260px]
                  min-h-[280px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px]
                  border
                  border-white/20
                  rounded-xl
                  px-4 sm:px-5 md:px-6
                  py-4 sm:py-5 md:py-6
                  flex
                  items-start
                  justify-center
                  transform
                  transition-transform
                  duration-300
                  ease-out
                  hover:scale-105
                "
              >
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="flex justify-center text-white">
                    {skill.icon}
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    {skill.name}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}