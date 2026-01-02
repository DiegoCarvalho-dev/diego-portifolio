export default function SkillsSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Habilidades
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Tecnologias que fazem parte da minha trajetória como desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="h-[360px] border border-white/70 flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">JavaScript</h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                JavaScript foi essencial para minha evolução no desenvolvimento web,
                permitindo criar aplicações dinâmicas e interativas.
              </p>
            </div>
          </div>

          <div className="h-[360px] border border-white/70 flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">HTML</h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                HTML foi minha base inicial, onde aprendi estruturação,
                semântica e organização de conteúdo.
              </p>
            </div>
          </div>

          <div className="h-[360px] border border-white/70 flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">CSS</h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Com CSS desenvolvi senso de design, responsividade
                e atenção aos detalhes visuais.
              </p>
            </div>
          </div>

          <div className="h-[360px] border border-white/70 flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Python</h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Python me ajudou a fortalecer lógica, automações
                e integração com APIs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
