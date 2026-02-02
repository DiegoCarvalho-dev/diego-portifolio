export default function AboutSection() {
  const handleDownloadCV = () => {
    const confirmDownload = window.confirm(
      "Aviso:\n\nEste currículo foi criado no início da minha carreira, então algumas informações podem estar desatualizadas.\n\nDeseja continuar?"
    );

    if (confirmDownload) {
      window.open("/cv/Diego_Carvalho_CV.pdf", "_blank");
    }
  };

  return (
    <section className="bg-black py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">

        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden bg-zinc-800 mx-auto md:mx-0"
        >
          <img
            src="/src/assets/foto_perfil.jpeg"
            alt="Foto de Diego Carvalho"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="space-y-4 sm:space-y-5 md:space-y-6 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl text-center md:text-left px-2 sm:px-0"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-extrabold">
            Esse sou eu.
          </h2>

          <h3 className="text-lg sm:text-xl md:text-xl text-zinc-300">
            Desenvolvedor Full Stack fascinado por código
          </h3>

          <ul className="text-zinc-400 space-y-2 text-xs xs:text-sm sm:text-sm md:text-sm">
            <li>📍 Rio Grande do Norte, Natal</li>
            <li>🎓 Estudante de Ciência da Computação — UNP</li>
            <li>💻 Desenvolvedor Full Stack</li>
            <li>🚀 Apaixonado por tecnologia e aprendizado contínuo</li>
          </ul>

          <button
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
            onClick={handleDownloadCV}
            className="inline-block mt-4 sm:mt-5 md:mt-6 px-5 py-2.5 sm:px-6 sm:py-3 border border-white/70 text-white text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            Baixar currículo
          </button>
        </div>
      </div>
    </section>
  );
}