import Lightning from "../components/Lightning";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} />

      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full max-w-3xl mx-auto">

        <span
          className="
            text-sm xs:text-base sm:text-base md:text-lg
            font-bold
            text-zinc-300
            mb-1 sm:mb-2 md:mb-1
            md:-translate-x-6
            w-full px-4 sm:px-0
          "
        >
          Opa! meu nome é
        </span>

        {/* Nome */}
        <h1
          className="
            text-3xl xs:text-4xl sm:text-5xl md:text-7xl
            font-extrabold
            tracking-tight
            mb-2 sm:mb-3 md:mb-3
            md:-translate-x-6
            w-full px-4 sm:px-0
            leading-tight sm:leading-normal
          "
        >
          Diego <span className="text-zinc-400">Carvalho</span>
        </h1>

        {/* Stack */}
        <p
          className="
            text-zinc-300
            text-sm xs:text-base sm:text-lg md:text-2xl
            font-semibold
            tracking-wide
            mt-1 sm:mt-2 md:mt-2
            md:-translate-x-6
            w-full px-4 sm:px-0
          "
        >
          Desenvolvedor Full Stack
        </p>

        {/* Redes sociais */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-6 md:-translate-x-6">
          <a
            href="https://github.com/diegocarvalho-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="float-soft hover:text-zinc-300 transition"
            aria-label="GitHub"
          >
            <svg 
              className="w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-7 md:h-7" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.68 5.4-5.24 5.68.41.36.77 1.08.77 2.18 0 1.57-.02 2.83-.02 3.22 0 .3.21.66.79.55 4.56-1.53 7.84-5.85 7.84-10.95C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/diegocarvalho_06/"
            target="_blank"
            rel="noopener noreferrer"
            className="float-soft float-soft-delay-1 hover:text-zinc-300 transition"
            aria-label="Instagram"
          >
            <svg 
              className="w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-7 md:h-7" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/diegoricardo-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="float-soft float-soft-delay-2 hover:text-zinc-300 transition"
            aria-label="LinkedIn"
          >
            <svg 
              className="w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-7 md:h-7" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 z-10 float-soft">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-zinc-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}