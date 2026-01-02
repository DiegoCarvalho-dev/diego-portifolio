import project1Front from "../assets/project1-front.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

export default function ProjectsSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Boas-vindas ao meu portfólio
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Aqui você pode conferir alguns projetos que desenvolvi ao longo da
            minha jornada, aplicando boas práticas, design moderno e tecnologias atuais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">

          {/* Projeto 1 */}
          <div className="space-y-6">
            <img
              src={project1Front}
              alt="Projeto 1"
              className="w-full h-72 object-contain"
            />

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Nome do projeto</h3>
              <p className="text-zinc-400 text-sm">
                Breve descrição do projeto, explicando objetivos, desenvolvimento e soluções aplicadas.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                React • TypeScript • Tailwind
              </span>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="space-y-6">
            <img
              src={project2}
              alt="Projeto 2"
              className="w-full h-72 object-contain"
            />

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Nome do projeto</h3>
              <p className="text-zinc-400 text-sm">
                Breve descrição do projeto, explicando objetivos, desenvolvimento e soluções aplicadas.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                Vue • JavaScript • CSS
              </span>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="space-y-6">
            <img
              src={project3}
              alt="Projeto 3"
              className="w-full h-72 object-contain"
            />

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Nome do projeto</h3>
              <p className="text-zinc-400 text-sm">
                Breve descrição do projeto, explicando objetivos, desenvolvimento e soluções aplicadas.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                Python • Django • PostgreSQL
              </span>
            </div>
          </div>

          {/* Projeto 4 */}
          <div className="space-y-6">
            <img
              src={project4}
              alt="Projeto 4"
              className="w-full h-72 object-contain"
            />

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Nome do projeto</h3>
              <p className="text-zinc-400 text-sm">
                Breve descrição do projeto, explicando objetivos, desenvolvimento e soluções aplicadas.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                Java • Spring • MySQL
              </span>
            </div>
          </div>

          {/* Projeto 5 (Mobile) */}
          <div className="space-y-6 md:col-span-2 flex flex-col items-center">
            <img
              src={project5}
              alt="Projeto Mobile"
              className="w-full max-w-sm h-72 object-contain"
            />

            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold">Nome do projeto</h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                Breve descrição do projeto mobile, explicando objetivos, desenvolvimento e soluções aplicadas.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                React Native • Expo • Firebase
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
