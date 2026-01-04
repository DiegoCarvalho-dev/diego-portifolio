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
            minha jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">

          {/* Projeto 1 */}
          <div className="space-y-6">
            <img
              src={project1Front}
              alt="Projeto 1"
              className="w-full h-72 object-contain md:-translate-x-8"
            />

            <div className="space-y-2 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold">MicroPigmentação Capilar</h3>
              <p className="text-zinc-400 text-sm">
                um site institucional moderno e responsivo, desenvolvido para apresentar serviços de Micropigmentação Capilar, com foco em conversão, clareza de informação e experiência do usuário.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                HTML5 • Vue.js 3 • Tailwind
              </span>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="space-y-6">
            <img
              src={project2}
              alt="Projeto 2"
              className="w-full h-72 object-contain md:translate-x-8"
            />

            <div className="space-y-2 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold">Site Docax</h3>
              <p className="text-zinc-400 text-sm">
                Este site pedido pela Docax, foi desenvolvido com foco em apresentar uma solução digital de forma clara, moderna e responsiva. O projeto prioriza uma boa experiência do usuário, com layout organizado, navegação intuitiva e adaptação para diferentes tamanhos de tela.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                Vue • JavaScript • Quasar
              </span>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="space-y-6">
            <img
              src={project3}
              alt="Projeto 3"
              className="w-full h-72 object-contain md:-translate-x-8"
            />

            <div className="space-y-2 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold">Robótica DocaEdu</h3>
              <p className="text-zinc-400 text-sm">
                Este site institucional foi desenvolvido sob solicitação da empresa DocaEdu, com foco em apresentar seu programa de Robótica Educacional para escolas de forma clara, profissional e atrativa.
                O projeto contempla páginas informativas, design responsivo, identidade visual educacional e um sistema de contato integrado, pensado para facilitar a comunicação com escolas interessadas em parcerias.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                HTML5 • CSS • JavaScript
              </span>
            </div>
          </div>

          {/* Projeto 4 */}
          <div className="space-y-6">
            <img
              src={project4}
              alt="Projeto 4"
              className="w-full h-72 object-contain md:translate-x-8"
            />

            <div className="space-y-2 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold">Dashboard B2bit</h3>
              <p className="text-zinc-400 text-sm">
                Este projeto é um painel administrativo moderno e responsivo. seguindo boas práticas de design e arquitetura.
                O sistema tem como objetivo fornecer uma plataforma de gestão completa, com dashboard interativo, relatórios, integrações e gerenciamento de usuários.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                React • Vite • Node.js
              </span>
            </div>
          </div>

          {/* Projeto 5 */}
          <div className="space-y-6 md:col-span-2 flex flex-col items-center">
            <img
              src={project5}
              alt="Projeto Mobile"
              className="w-full max-w-sm h-72 object-contain"
            />

            <div className="space-y-2 text-center max-w-md">
              <h3 className="text-2xl font-bold">FocusFlow</h3>
              <p className="text-zinc-400 text-sm">
                O FocusFlow é um aplicativo Android nativo desenvolvido no Android Studio, criado para ajudar na produtividade usando a técnica Pomodoro, com suporte a tarefas diárias, resumo de foco e configurações ajustáveis.
              </p>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">
                Kotlin
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
