import { motion } from "framer-motion";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiVite,
  SiTailwindcss,
  SiSqlite,
  SiPython,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

function About() {
  const mainStack = [
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      name: "HTML",
      icon: SiHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "#1572B6",
    },
  ];

  const complementaryStack = [
    {
      name: "Vite",
      icon: SiVite,
      color: "#646CFF",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "SQLite",
      icon: SiSqlite,
      color: "#003B57",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "#FFFFFF",
    },
  ];

  return (
    <section className="about-section" id="sobre-mi">
      <div className="section-container">
        {/* ENCABEZADO */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">02</span>

          <div>
            <span className="section-label">SOBRE MÍ</span>

            <h2>
              Detras
              <br />
              <span>del código...</span>
            </h2>
          </div>
        </motion.div>

        {/* CONTENIDO */}
        <div className="about-grid">
          {/* TEXTO */}
          <motion.div
            className="about-main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-intro">
              Soy <strong>Nahuel Storace</strong>, desarrollador web enfocado en
              crear proyectos modernos, funcionales y con personalidad.
            </p>

            <p>
              Me interesa transformar ideas en experiencias digitales que no
              solo funcionen, sino que también tengan una identidad propia.
            </p>

            <p>
              Trabajo principalmente con tecnologías web y disfruto
              especialmente desarrollar proyectos interactivos y juegos que
              puedan ejecutarse directamente desde el navegador.
            </p>
          </motion.div>

          {/* INFORMACIÓN */}
          <motion.div
            className="about-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="about-item">
              <span>01</span>

              <div>
                <h3>DESARROLLO WEB</h3>

                <p>
                  Páginas modernas centradas en la experiencia del usuario y
                  funcionalidad.
                </p>
              </div>
            </div>

            <div className="about-item">
              <span>02</span>

              <div>
                <h3>CREATIVIDAD</h3>

                <p>
                  Busco que cada proyecto tenga algo diferente que lo haga
                  único.
                </p>
              </div>
            </div>

            <div className="about-item">
              <span>03</span>

              <div>
                <h3>APRENDIZAJE</h3>

                <p>
                  Siempre aprendiendo nuevas tecnologías y formas de mejorar mis
                  proyectos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STACK */}
        <motion.div
          className="about-stack"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* HEADER STACK */}
          <div className="stack-header">
            <span className="stack-number">04</span>

            <div>
              <span className="stack-label">STACK PRINCIPAL</span>

              <p>
                Tecnologías con las que desarrollo la mayoría de mis proyectos.
              </p>
            </div>
          </div>

          {/* STACK PRINCIPAL */}
          <div className="stack-group">
            <span className="stack-group-title">PRINCIPAL</span>

            <div className="stack-list">
              {mainStack.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    className="stack-tech"
                    key={technology.name}
                    style={{
                      "--tech-color": technology.color,
                    }}
                  >
                    <Icon className="stack-tech-icon" />

                    <span>{technology.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STACK COMPLEMENTARIO */}
          <div className="stack-group stack-group-complementary">
            <span className="stack-group-title">COMPLEMENTARIAS</span>

            <div className="stack-list">
              {complementaryStack.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    className="stack-tech"
                    key={technology.name}
                    style={{
                      "--tech-color": technology.color,
                    }}
                  >
                    <Icon className="stack-tech-icon" />

                    <span>{technology.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
