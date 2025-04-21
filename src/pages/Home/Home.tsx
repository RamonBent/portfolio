import './Home.css'
import { Link } from 'react-router-dom'
import TechBadge from '../../components/TechBadge/TechBadge'
import animationImage from '../../assets/animation/img_pixar.png' // Substitua pelo nome real do seu arquivo

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="greeting">Olá, eu sou</span>
            <span className="name">Ramon Bento</span>
          </h1>
          <h2 className="title">Backend Developer</h2>
          <p className="description">
            Com conhecimento sólido em Java, Spring Boot e bancos de dados relacionais.
            Atualmente explorando o mundo do frontend com React e TypeScript.
          </p>
          <div className="tech-stack">
            {['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript'].map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          <div className="hero-buttons">
            <Link to="/about" className="btn-primary">Sobre Mim</Link>
            <Link to="/projects" className="btn-secondary">Meus Projetos</Link>
          </div>
        </div>
        <div className="hero-animation">
          <img 
            src={animationImage} 
            alt="Animação 3D de Ramon Bento" 
            className="animation-image"
          />
        </div>
      </section>
    </div>
  )
}

export default Home