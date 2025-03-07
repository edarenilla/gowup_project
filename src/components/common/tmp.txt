import { useState } from "react";
import { Link } from "react-scroll";
import "../assets/css/navbar.css"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
        {/* Logo */}
        <a href="#" className="logo">Mi Sitio</a>
      <nav className="nav-container">
        

        {/* Botón hamburguesa (Móvil) */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Menú principal */}
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="inicio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="nosotros" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="servicios" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="portafolio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Portafolio
            </Link>
          </li>
          <li>
            <Link to="feedback" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Feedback
            </Link>
          </li>
          <li>
            <Link to="contacto" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <li className="menu--phone">
            <Link to="contacto" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              (+57) 315 8391 1821
            </Link>
          </li>
        </div>
    </header>
  );
}