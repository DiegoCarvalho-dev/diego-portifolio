export default function AboutSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="w-56 h-56 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500"
        >
          Foto
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="space-y-6 max-w-xl"
        >
          <h2 className="text-4xl font-extrabold">
            Esse sou eu.
          </h2>

          <h3 className="text-xl text-zinc-300">
            Desenvolvedor Full Stack fascinado por código
          </h3>

          <ul className="text-zinc-400 space-y-2 text-sm">
            <li>📍 Rio Grande do Norte, Natal</li>
            <li>🎓 Estudante de Ciência da Computação — UNP</li>
            <li>💻 Desenvolvedor Full Stack</li>
            <li>🚀 Apaixonado por tecnologia e aprendizado contínuo</li>
          </ul>

          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
            href="/curriculo.pdf"
            download
            className="inline-block mt-6 px-6 py-3 border border-white/70 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}
