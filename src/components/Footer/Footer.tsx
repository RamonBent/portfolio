import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Ramon Bento. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="https://github.com/RamonBent" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ramon-bento-oliveira/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ramon.bento.oliver@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer