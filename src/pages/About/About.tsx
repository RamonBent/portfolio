import './About.css'
import TechBadge from '../../components/TechBadge/TechBadge'
import animationImage from '../../assets/animation/RamonJoinha.png'

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-content">
          <h2>Sobre <span className="highlight">Mim</span></h2>
          <div className="about-text">
          <p>
  Meu nome é <strong>Ramon Bento</strong>, sou desenvolvedor backend com foco em Java, Spring Boot e bancos de dados relacionais. Estou cursando o penúltimo período de Análise e Desenvolvimento de Sistemas no IFPB, onde tenho aprofundado meus conhecimentos tanto em projetos acadêmicos quanto pessoais.
</p>
<p>
  Tenho experiência prática com robótica educacional, participando de iniciativas que unem tecnologia e educação de forma lúdica e interativa. Também sou entusiasta de metodologias ágeis, como Scrum e Kanban, aplicando esses métodos para organizar e otimizar meus projetos.
</p>
<p>
  Atualmente, estou explorando o mundo do frontend, desenvolvendo este portfólio com React e TypeScript, mas minha maior afinidade continua sendo com o backend e a construção da lógica de negócios.
</p>
<p>
  Sou uma pessoa colaborativa, com facilidade para trabalhar em equipe e me adaptar a diferentes ambientes. Valorizo a troca de conhecimento e acredito que boas conexões tornam o processo de desenvolvimento ainda mais eficiente e agradável.
</p>

          </div>
          <div className="about-skills">
            <h3>Minhas Habilidades</h3>
            <div className="skills-grid">
              {[
                'Java', 'Spring Boot', 'Hibernate', 'JPA',
                'PostgreSQL', 'SQL', 'Docker', 'Git',
                'Scrum', 'Kanban', 'React', 'TypeScript',
                'HTML/CSS', 'REST API', 'Microsserviços'
              ].map((skill) => (
                <TechBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
        <div className="about-animation">
          {/* Espaço para sua animação Pixar */}
          <div className="animation-placeholder">
          <img 
            src={animationImage} 
            alt="Animação 3D de Ramon Bento" 
            className="animation-image"
          />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About