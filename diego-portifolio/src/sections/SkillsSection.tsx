export default function SkillsSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Habilidades
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Tecnologias e linguagens que utilizo no desenvolvimento de projetos,
            sempre focando em boas práticas e evolução contínua.
          </p>
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          
          {/* Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-zinc-700 transition">
            <div className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
              Logo
            </div>
            <span className="text-white font-semibold tracking-wide">
              JavaScript
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-zinc-700 transition">
            <div className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
              Logo
            </div>
            <span className="text-white font-semibold tracking-wide">
              React
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-zinc-700 transition">
            <div className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
              Logo
            </div>
            <span className="text-white font-semibold tracking-wide">
              TypeScript
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-zinc-700 transition">
            <div className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
              Logo
            </div>
            <span className="text-white font-semibold tracking-wide">
              Tailwind CSS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
