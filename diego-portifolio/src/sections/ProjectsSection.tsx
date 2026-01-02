export default function ProjectsSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Boas-vindas ao meu portfólio
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Aqui você pode conferir alguns projetos que desenvolvi ao longo da
            minha jornada, aplicando boas práticas, design moderno e tecnologias atuais.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">

          {/* Projeto 1 */}
          <div className="space-y-6">
            <div className="h-72 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
              Mockup (Notebook + celular)
            </div>

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
            <div className="h-72 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
              Mockup (Notebook + celular)
            </div>

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
            <div className="h-72 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
              Mockup (Notebook + celular)
            </div>

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
            <div className="h-72 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
              Mockup (Notebook + celular)
            </div>

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

        </div>
      </div>
    </section>
  );
}
