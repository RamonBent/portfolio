import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-section">
        <div className="contact-content">
          <h2>Entre em <span className="highlight">Contato</span></h2>
          <p>Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me enviar uma mensagem!</p>
          
          <form
            action="https://formspree.io/f/xvgapqkq"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensagem</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Outras formas de contato</h3>
          <ul>
            <li>
              <strong>Email:</strong> ramon.bento.oliver@gmail.com
            </li>
            <li>
              <strong>LinkedIn:</strong> linkedin.com/in/ramon-bento-oliveira
            </li>
            <li>
              <strong>GitHub:</strong> github.com/RamonBent
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Contact
