import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

import cv from "../assets/CvNS.pdf";
import foto from "../assets/foto.jpg";

function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Nahuel-srce",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nahuel-storace-b99b55351/",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nahu_srce",
      icon: FaInstagram,
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=nstorace05@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <section className="hero" id="inicio">
      {/* FONDO */}

      <div className="hero-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      {/* CONTENIDO */}

      <div className="hero-content">
        {/* TEXTO */}

        <motion.div
          className="hero-text"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="hero-label">DESARROLLADOR WEB</span>

          <h1>
            Nahuel
            <br />
            <span className="gradient-text">Storace.</span>
          </h1>

          <p className="hero-description">
            Desarrollador web enfocado en crear experiencias digitales,
            aplicaciones y juegos web que combinan funcionalidad, creatividad y
            una buena experiencia al usuario.
          </p>

          {/* BOTONES */}

          <div className="hero-actions">
            <a href="#proyectos" className="button primary">
              Ver proyectos
            </a>

            <a href="#contacto" className="button secondary">
              Contactarme
            </a>

            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="button cv-hero-button"
            >
              Ver CV
            </a>
          </div>
        </motion.div>

        {/* FOTO + REDES */}

        <motion.div
          className="hero-photo-wrapper"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
        >
          <div className="hero-photo-glow"></div>

          <div className="hero-photo">
            <img src={foto} alt="Nahuel Storace" />
          </div>

          {/* REDES */}

          <div className="hero-socials">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* PARTE INFERIOR */}

      <div className="hero-bottom">
        <div className="hero-line"></div>

        <span>DESARROLLO WEB · EXPERIENCIAS DIGITALES · JUEGOS WEB</span>
      </div>
    </section>
  );
}

export default Hero;
