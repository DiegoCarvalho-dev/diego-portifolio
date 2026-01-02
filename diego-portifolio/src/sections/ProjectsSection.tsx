export default function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 relative z-10">
      <div className="w-full max-w-6xl px-6 space-y-16">
        
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

        {/* Placeholder dos projetos */}
        <div className="space-y-24">
          
          {/* Projeto placeholder */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Mockup */}
            <div className="w-full md:w-1/2 h-64 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
              Mockup do projeto (Notebook + celular)
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">
                Nome do projeto
              </h3>

              <p className="text-zinc-400">
                Breve descrição do projeto, explicando o objetivo e o que foi desenvolvido.
              </p>

              <span className="text-sm text-zinc-500 uppercase tracking-widest">
                Tecnologias utilizadas
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            
            <div className="w-full md:w-1/2 h-64 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
              Mockup do projeto (Notebook + celular)
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">
                Nome do projeto
              </h3>

              <p className="text-zinc-400">
                Breve descrição do projeto, explicando o objetivo e o que foi desenvolvido.
              </p>

              <span className="text-sm text-zinc-500 uppercase tracking-widest">
                Tecnologias utilizadas
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
