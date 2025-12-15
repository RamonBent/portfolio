import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>RamonBento.dev</Link>

        {/* 2. Botão do Hambúrguer (Visível apenas em Mobile) */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* 3. Navegação (Recebe a classe 'open' quando o menu está ativo) */}
        <nav 
          className={`nav ${isMenuOpen ? 'open' : ''}`} 
          id="main-navigation"
        >
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>Sobre</Link>
          <Link to="/projects" onClick={closeMenu}>Projetos</Link>
          <Link to="/contact" onClick={closeMenu}>Contato</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header