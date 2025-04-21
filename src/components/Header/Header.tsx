import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">RamonBento.dev</Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header