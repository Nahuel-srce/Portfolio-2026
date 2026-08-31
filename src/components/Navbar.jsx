function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="logo-mark">N</span>
        <span className="logo-name">NAHUEL STORACE</span>
      </div>

      <nav className="navbar-links">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div className="navbar-status">
        <span></span>
        Disponible
      </div>
    </header>
  );
}

export default Navbar;
