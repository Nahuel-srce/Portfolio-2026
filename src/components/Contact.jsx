import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      description: "Mis proyectos",
      url: "https://github.com/Nahuel-srce",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      description: "Perfil profesional",
      url: "https://www.linkedin.com/in/nahuel-storace-b99b55351/",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      description: "Perfil personal",
      url: "https://www.instagram.com/nahu_srce",
      icon: FaInstagram,
    },
  ];

  return (
    <section className="contact-section" id="contacto">
      <div className="section-container">
        {/* TITULO */}

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
          <span className="section-number">04</span>

          <div>
            <span className="section-label">CONTACTO</span>

            <h2>Contactame</h2>
          </div>
        </motion.div>

        {/* CONTENIDO */}

        <div className="contact-content">
          {/* MENSAJE */}

          <motion.div
            className="contact-main"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <p className="contact-intro">
              ¿Tenés una idea, un proyecto o una propuesta?
            </p>

            <p className="contact-description">
              Estoy abierto a nuevas oportunidades, proyectos y/o
              colaboraciones.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nstorace05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email"
            >
              nstorace05@gmail.com
            </a>
          </motion.div>

          {/* REDES */}

          <motion.div
            className="contact-links"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-number">0{index + 1}</span>

                  <span className="contact-link-icon">
                    <Icon />
                  </span>

                  <div>
                    <strong>{social.name}</strong>

                    <small>{social.description}</small>
                  </div>

                  <span className="contact-link-arrow">↗</span>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* FOOTER */}

        <motion.div
          className="contact-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <span>DISPONIBLE PARA NUEVOS PROYECTOS</span>

          <span>© 2026 NAHUEL STORACE</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
