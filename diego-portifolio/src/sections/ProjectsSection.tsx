import project1Front from "../assets/project1-front.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiVuedotjs, SiTailwindcss, SiQuasar, SiKotlin, SiTypescript } from "react-icons/si";

export default function ProjectsSection() {
  return (
    <section className="bg-black py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 md:space-y-24">

        {/* Cabeçalho */}
        <div
          className="text-center space-y-3 sm:space-y-4"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight px-2">
            Boas-vindas ao meu portfólio
          </h2>

          <p className="text-zinc-400 text-xs xs:text-sm sm:text-base md:text-lg max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-2">
            Aqui você pode conferir alguns projetos que desenvolvi ao longo da
            minha jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-24 gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-32">

          {/* Projeto 1 */}
          <div
            className="space-y-4 sm:space-y-6 text-center"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src={project1Front}
              alt="Projeto 1"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain lg:-translate-x-8 xl:-translate-x-12 mx-auto"
            />

            <div className="space-y-2 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center lg:-translate-x-8 xl:-translate-x-10 px-2 sm:px-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">MicroPigmentação Capilar</h3>
              <p className="text-zinc-400 text-xs xs:text-sm sm:text-sm md:text-sm leading-relaxed">
                Um site institucional moderno e responsivo, desenvolvido para apresentar serviços de Micropigmentação Capilar, com foco em conversão, clareza de informação e experiência do usuário.
              </p>

              <div className="flex justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-xl">
                <FaHtml5 className="text-orange-500" />
                <SiVuedotjs className="text-green-500" />
                <SiTailwindcss className="text-sky-400" />
              </div>
            </div>
          </div>

          {/* Projeto 2 */}
          <div
            className="space-y-4 sm:space-y-6 text-center"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img
              src={project2}
              alt="Projeto 2"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain lg:translate-x-8 xl:translate-x-12 mx-auto"
            />

            <div className="space-y-2 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center lg:translate-x-8 xl:translate-x-10 px-2 sm:px-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Site Executaí</h3>
              <p className="text-zinc-400 text-xs xs:text-sm sm:text-sm md:text-sm leading-relaxed">
                Este site foi desenvolvido com foco em apresentar uma solução digital de forma clara, moderna e responsiva.
              </p>

              <div className="flex justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-xl">
                <SiVuedotjs className="text-green-500" />
                <FaJs className="text-yellow-400" />
                <SiQuasar className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Projeto 3 */}
          <div
            className="space-y-4 sm:space-y-6 text-center"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src={project3}
              alt="Projeto 3"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain lg:-translate-x-8 xl:-translate-x-12 mx-auto"
            />

            <div className="space-y-2 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center lg:-translate-x-8 xl:-translate-x-10 px-2 sm:px-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Robótica DocaEdu</h3>
              <p className="text-zinc-400 text-xs xs:text-sm sm:text-sm md:text-sm leading-relaxed">
                Site institucional desenvolvido para apresentar o programa de Robótica Educacional da DocaEdu, com design responsivo e foco educacional.
              </p>

              <div className="flex justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-xl">
                <FaHtml5 className="text-orange-500" />
                <FaCss3Alt className="text-blue-500" />
                <FaJs className="text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Projeto 4 */}
          <div
            className="space-y-4 sm:space-y-6 text-center"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img
              src={project4}
              alt="Projeto 4"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain lg:translate-x-8 xl:translate-x-12 mx-auto"
            />

            <div className="space-y-2 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center lg:translate-x-8 xl:translate-x-10 px-2 sm:px-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Dashboard B2bit</h3>
              <p className="text-zinc-400 text-xs xs:text-sm sm:text-sm md:text-sm leading-relaxed">
                Painel administrativo moderno com dashboard interativo, relatórios e gerenciamento de usuários.
              </p>

              <div className="flex justify-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-xl">
                <FaReact className="text-cyan-400" />
                <FaNodeJs className="text-green-500" />
              </div>
            </div>
          </div>

          {/* Projeto Mobile 5 */}
          <div
            className="space-y-4 sm:space-y-6 text-center"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src={project5}
              alt="Projeto Mobile 1"
              className="w-full max-w-xs mx-auto h-48 sm:h-56 md:h-64 lg:h-72 object-contain lg:-translate-x-8 xl:-translate-x-12"
            />

            <div className="space-y-2 max-w-xs mx-auto text-center px-2 lg:-translate-x-8 xl:-translate-x-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">FocusFlow</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Aplicativo mobile focado em produtividade utilizando técnica Pomodoro.
              </p>

              <div className="flex justify-center gap-3 text-lg">
                <SiKotlin className="text-purple-600" />
              </div>
            </div>
          </div>

          {/* Projeto Mobile 6 */}
          <div
            className="space-y-4 sm:space-y-6 text-center"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img
              src={project6}
              alt="Projeto Mobile 2"
              className="w-full max-w-xs mx-auto h-48 sm:h-56 md:h-64 lg:h-72 object-contain lg:translate-x-8 xl:translate-x-12"
            />

            <div className="space-y-2 max-w-xs mx-auto text-center px-2 lg:translate-x-8 xl:translate-x-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">GymPro</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                O GymPro é um SaaS completo para academias. Ele conecta Personal Trainers e Alunos em uma única plataforma, permitindo a criação, gestão e execução de treinos personalizados.
              </p>

              <div className="flex justify-center gap-3 text-lg">
                <FaReact className="text-cyan-400" />
                <SiTypescript className="text-blue-500" />
              </div>
            </div>
          </div>
          
          {/* Projeto 7 */}
          <div
            className="md:col-span-2 flex flex-col items-center text-center space-y-6"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <img
              src={project7}
              alt="Projeto Barbearia"
              className="w-full max-w-md h-56 sm:h-64 md:h-72 object-contain"
            />

            <div className="space-y-2 max-w-md text-center px-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Corte Imperial</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Este projeto é um site institucional completo desenvolvido para a Barbearia Corte Imperial, uma barbearia premium com foco em experiência do cliente e serviços de alta qualidade.
              </p>

              <div className="flex justify-center gap-3 text-lg">
                <FaReact className="text-cyan-400" />
                <SiTypescript className="text-blue-500" />
                <FaHtml5 className="text-orange-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}