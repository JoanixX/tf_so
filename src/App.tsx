import './App.css';

function App() {
  return (
    <>
      {/* Fondo de partículas */}
      <div className="particle-bg">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="particle" key={i} />
        ))}
      </div>

      {/* Main Hero */}
      <main className="main">
        <div className="main-container">
          <div className="content-left">
            <h1 className="title">
              <span className="highlight">NFT</span> e-commerce <span className="highlight-green">futurista</span>
            </h1>
            <p className="description">
              Compra, vende y descubre NFTs únicos en la plataforma más avanzada y segura del mercado.
            </p>
            <a href="#" className="btn btn-primary">Comenzar</a>
          </div>
          <div className="content-right">
            <div className="image-collage">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="NFT 1" />
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="NFT 2" />
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="NFT 3" />
              <img src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" alt="NFT 4" />
            </div>
          </div>
        </div>
      </main>

      {/* Sobre Nosotros */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">Sobre Nosotros</h2>
          <div className="about-content">
            <div className="about-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#8AFF00" opacity="0.2"/>
                <path d="M12 6v6l4 2" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="about-text">
              Somos pioneros en el mundo de los NFTs, conectando artistas y coleccionistas en una experiencia digital segura, transparente y llena de innovación.
            </div>
          </div>
        </div>
      </section>

      {/* Explicación Empresa */}
      <section className="company-section">
        <div className="company-container">
          <h2 className="company-title">¿Qué es Genifty?</h2>
          <div className="company-description">
            Genifty es una plataforma de e-commerce de NFTs donde puedes comprar, vender y descubrir arte digital y coleccionables únicos. Nuestra tecnología blockchain garantiza autenticidad, seguridad y transparencia en cada transacción.
          </div>
          <div className="company-features">
            <div className="feature futuristic-glow">
              <span className="feature-icon">🚀</span>
              Transacciones rápidas y seguras
            </div>
            <div className="feature futuristic-glow">
              <span className="feature-icon">🖼️</span>
              Galería de arte digital exclusiva
            </div>
            <div className="feature futuristic-glow">
              <span className="feature-icon">🔒</span>
              Protección y autenticidad blockchain
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contacto</h2>
          <form className="contact-form">
            <div className="form-group">
              <input className="form-input" type="text" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <input className="form-input" type="email" placeholder="Correo electrónico" required />
            </div>
            <div className="form-group">
              <textarea className="form-input" placeholder="Mensaje" required />
            </div>
            <button className="btn btn-futuristic" type="submit">Enviar</button>
          </form>
          <div className="contact-social">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Discord</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </section>
    </>
  )
}
export default App