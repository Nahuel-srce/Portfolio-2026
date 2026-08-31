import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    name: "TRUST NO ONE",
    type: "JUEGO WEB",
    status: "V1.0 TERMINADA",
    description:
      "Juego social multijugador que busca combinar el juego del Impostor y Among Us, basado en misiones secretas, engaño, observación, improvisación, sospecha y deducción.",

    technologies: ["React", "Node.js", "Socket.io"],

    details:
      "Proyecto diseñado para jugar con amigos a través del navegador. La experiencia gira alrededor de misiones secretas que deben cumplirse sin ser descubiertas por los demás jugadores.",

    role: "Desarrollo completo del proyecto, incluyendo la interfaz, lógica del juego y sistema multijugador.",

    projectUrl: "https://trust-no-one-gules.vercel.app",
    githubUrl: "https://github.com/Nahuel-srce/Trust-No-One",
  },

  {
    id: "02",
    name: "ADMINISTRADOR DE NEGOCIO",
    type: "APLICACIÓN DE ESCRITORIO",
    status: "TERMINADO",
    description:
      "Sistema de gestión de negocio desarrollado desde cero para administrar productos, ventas y diferentes operaciones.",

    technologies: ["Python", "Tkinter", "SQLite"],

    details:
      "Aplicación creada para simplificar la administración de un negocio y centralizar diferentes tareas en una única herramienta.",

    role: "Diseño y desarrollo de la aplicación, interfaz gráfica, lógica de funcionamiento y almacenamiento de datos.",

    projectUrl: "",
    githubUrl: "",
  },

  {
    id: "03",
    name: "DE A DOS",
    type: "JUEGO WEB",
    status: "EN DESARROLLO",
    description:
      "Juego web cooperativo centrado en la interacción entre dos jugadores, desarrollado para jugar y compartir experiencias en conjunto.",

    technologies: ["JavaScript", "React", "Phaser"],

    details:
      "Proyecto pensado alrededor de la cooperación entre dos jugadores. La experiencia busca combinar interacción, exploración y diferentes actividades dentro de un mismo mundo.",

    role: "Diseño y desarrollo del concepto, programación de las mecánicas y construcción de la experiencia web.",

    projectUrl: "",
    githubUrl: "",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section className="projects-section" id="proyectos">
      <div className="section-container">
        {/* ENCABEZADO */}
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="section-number">03</span>

          <div>
            <span className="section-label">PROYECTOS</span>

            <h2>
              Cosas que
              <br />
              <span>hice y estoy desarrollando.</span>
            </h2>
          </div>
        </motion.div>

        {/* TARJETAS */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const isOpen = activeProject === project.id;

            return (
              <motion.article
                key={project.id}
                className={`project-card ${isOpen ? "project-card-open" : ""}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={
                  !isOpen
                    ? {
                        y: -6,
                      }
                    : {}
                }
                onClick={() => toggleProject(project.id)}
              >
                {/* PARTE SUPERIOR */}
                <div className="project-card-top">
                  <span className="project-number">{project.id}</span>

                  <span className="project-status">
                    <i></i>
                    {project.status}
                  </span>
                </div>

                {/* CONTENIDO */}
                <div className="project-card-content">
                  <span className="project-type">{project.type}</span>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  {/* INFORMACIÓN EXTRA */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="project-details"
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >
                        <div className="project-detail-block">
                          <span>SOBRE EL PROYECTO</span>

                          <p>{project.details}</p>
                        </div>

                        <div className="project-detail-block">
                          <span>MI PARTICIPACIÓN</span>

                          <p>{project.role}</p>
                        </div>

                        {/* ENLACES */}
                        {(project.projectUrl || project.githubUrl) && (
                          <div
                            className="project-links"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {project.projectUrl && (
                              <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link project-link-primary"
                              >
                                VER PROYECTO
                              </a>
                            )}

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link project-link-secondary"
                              >
                                GITHUB
                              </a>
                            )}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* PARTE INFERIOR */}
                <div className="project-card-bottom">
                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                {/* INDICADOR */}
                <div className="project-click-hint">
                  {isOpen ? "CERRAR" : "VER PROYECTO"}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
