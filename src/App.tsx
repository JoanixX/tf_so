import React, { useRef, useState } from 'react';
import './App.css';
import sectionStyles from './components/Sections.module.css';

function App() {
  const [showSections, setShowSections] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSections(true);
    setTimeout(() => {
      sectionsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
        <div className="main-container section-fadein">
          <div className="content-left">
            <h1 className="title">
              <span className="highlight">NFT</span> e-commerce <span className="highlight-green">futurista</span>
            </h1>
            <p className="description">
              Compra, vende y descubre NFTs únicos en la plataforma más avanzada y segura del mercado.
            </p>
            <a
              href="#secciones"
              className="btn btn-primary"
              onClick={handleStart}
            >
              Comenzar
            </a>
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

      {/* Secciones con animación futurista */}
      <div ref={sectionsRef} id="secciones">
        {/* SOBRE NOSOTROS */}
        <section
          className={`about-section ${showSections ? 'section-fadein-futurist' : 'section-hidden'}`}
        >
          <div className={`${sectionStyles['section-container']}`}>
            <h2 className="about-title">
              <span className="highlight">Sobre</span> <span className="highlight-green">Nosotros</span>
            </h2>
            <div className="about-content">
              <div className="about-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#8AFF00" opacity="0.18"/>
                  <path d="M12 7v5.5a1.5 1.5 0 0 0 1.5 1.5h3" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="6" stroke="#6C63FF" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="about-text">
                <span className="highlight">Genifty</span> es una comunidad de <span className="highlight-green">creadores</span> y <span className="highlight-green">coleccionistas</span> apasionados por el futuro digital.<br /><br />
                Nuestra misión es <span className="highlight">impulsar</span> la innovación y la creatividad, conectando talento y tecnología en un entorno seguro y transparente.<br /><br />
                Creemos en el poder de los <span className="highlight">NFTs</span> para transformar la economía digital y abrir nuevas oportunidades para todos.<br /><br />
                Únete a nosotros y sé parte de la <span className="highlight-green">revolución</span> del arte y los activos digitales.
              </div>
            </div>
          </div>
        </section>

        {/* ¿QUÉ ES GENIFTY? */}
        <section
          className={`company-section ${showSections ? 'section-fadein-futurist' : 'section-hidden'}`}
        >
          <div className={`${sectionStyles['section-container']}`}>
            <h2 className="company-title">
              ¿Qué es <span className="highlight">Genifty</span>?
            </h2>
            <div className="company-description">
              <span className="highlight">Genifty</span> es una plataforma de <span className="highlight-green">NFT e-commerce</span> donde puedes:<br /><br />
              <span className="highlight">•</span> Comprar y vender arte digital y coleccionables únicos.<br />
              <span className="highlight">•</span> Descubrir creaciones de artistas emergentes y reconocidos.<br />
              <span className="highlight">•</span> Disfrutar de una experiencia segura, transparente y sin fronteras.<br /><br />
              Todo respaldado por tecnología <span className="highlight-green">blockchain</span> para garantizar autenticidad y propiedad real.
            </div>
            <div className="company-features">
              <div className="feature futuristic-glow">
                {/* SVG Rápido */}
                <span className="feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h13M9 6l7 6-7 6" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>
                  <span className="highlight">Transacciones</span> rápidas y seguras
                </span>
              </div>
              <div className="feature futuristic-glow">
                {/* SVG Galería */}
                <span className="feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#6C63FF" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="#8AFF00"/>
                    <path d="M21 17l-5-5-4 4-7 7" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span>
                  <span className="highlight-green">Galería</span> de arte digital exclusiva
                </span>
              </div>
              <div className="feature futuristic-glow">
                {/* SVG Seguridad */}
                <span className="feature-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="7" rx="2" stroke="#6C63FF" strokeWidth="2"/>
                    <path d="M12 15v2" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="13" r="1" fill="#8AFF00"/>
                    <path d="M8 11V9a4 4 0 1 1 8 0v2" stroke="#6C63FF" strokeWidth="2"/>
                  </svg>
                </span>
                <span>
                  Protección y <span className="highlight-green">autenticidad blockchain</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          className={`contact-section ${showSections ? 'section-fadein-futurist' : 'section-hidden'}`}
        >
          <div className={`${sectionStyles['section-container']}`}>
            <h2 className={sectionStyles['contact-title']}>Contacto</h2>
            <form className={sectionStyles['contact-form']}>
              <div className={sectionStyles['form-group']}>
                <input className={sectionStyles['form-input']} type="text" placeholder="Nombre" required />
              </div>
              <div className={sectionStyles['form-group']}>
                <input className={sectionStyles['form-input']} type="email" placeholder="Correo electrónico" required />
              </div>
              <div className={sectionStyles['form-group']}>
                <textarea className={sectionStyles['form-input']} placeholder="Mensaje" required />
              </div>
              <button className={`btn ${sectionStyles['btn-futuristic']}`} type="submit">Enviar</button>
            </form>
            <div className={sectionStyles['contact-social']}>
              <a href="#" className={sectionStyles['social-link']}>Twitter</a>
              <a href="#" className={sectionStyles['social-link']}>Discord</a>
              <a href="#" className={sectionStyles['social-link']}>Instagram</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default App