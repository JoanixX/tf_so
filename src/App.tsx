import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NFTGallery from './components/NFTGallery';
import NFTCart from './components/NFTCart';
import NFTFavorites from './components/NFTFavorites';
import WalletSimulator from './components/WalletSimulator';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';
import sectionStyles from './components/Sections.module.css';

const PAGES = {
  inicio: 'Inicio',
  galeria: <NFTGallery />,
  carrito: <NFTCart />,
  favoritos: <NFTFavorites />,
  wallet: <WalletSimulator />,
  modo: <DarkModeToggle />,
} as const;
type PageKey = keyof typeof PAGES;

function App() {
  // Estado para navegación
  const [page, setPage] = useState<PageKey>('inicio');
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [showSections, setShowSections] = useState(false);

  // Navegación por hash
  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageKey;
      if (hash && hash in PAGES) setPage(hash);
      else setPage('inicio');
    };
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Handler para mostrar secciones de la landing
  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSections(true);
    setTimeout(() => {
      sectionsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Navbar />
      <div className="particle-bg">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="particle" key={i} />
        ))}
      </div>
      <main className="main">
        {page === 'inicio' ? (
          <>
            {/* Hero principal de la landing */}
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
            {/* Secciones de la landing */}
            <div ref={sectionsRef} id="secciones">
              {/* SOBRE NOSOTROS */}
              <section className={`about-section ${showSections ? 'section-fadein-futurist' : 'section-hidden'}`}>
                <div className={sectionStyles['section-container']}>
                  <h2 className="about-title">
                    <span className="highlight">Sobre</span> <span className="highlight-green">Nosotros</span>
                  </h2>
                  <div className="about-content">
                    <div className="about-icon">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="28" fill="#8AFF00" opacity="0.10"/>
                        <circle cx="32" cy="32" r="18" stroke="#6C63FF" strokeWidth="2" fill="none"/>
                        <circle cx="32" cy="14" r="4" fill="#6C63FF"/>
                        <circle cx="50" cy="24" r="3" fill="#8AFF00"/>
                        <circle cx="14" cy="24" r="3" fill="#8AFF00"/>
                        <circle cx="24" cy="50" r="3" fill="#8AFF00"/>
                        <circle cx="40" cy="50" r="3" fill="#8AFF00"/>
                        <path d="M32 18v10" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M36 32l10-6" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M28 32l-10-6" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M32 46v-8" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M28 46l-4 4" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M36 46l4 4" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/>
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
              <section className={`company-section ${showSections ? 'section-fadein-futurist' : 'section-hidden'}`}>
                <div className={sectionStyles['section-container']}>
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
                      <span className="feature-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <rect x="6" y="6" width="8" height="8" rx="2" stroke="#6C63FF" strokeWidth="2"/>
                          <rect x="18" y="6" width="8" height="8" rx="2" stroke="#8AFF00" strokeWidth="2"/>
                          <rect x="12" y="18" width="8" height="8" rx="2" stroke="#6C63FF" strokeWidth="2"/>
                          <path d="M14 14v4" stroke="#8AFF00" strokeWidth="2"/>
                          <path d="M18 14v4" stroke="#8AFF00" strokeWidth="2"/>
                          <path d="M14 10h4" stroke="#8AFF00" strokeWidth="2"/>
                          <path d="M22 18l2-4" stroke="#8AFF00" strokeWidth="2"/>
                          <path d="M10 18l-2-4" stroke="#8AFF00" strokeWidth="2"/>
                        </svg>
                      </span>
                      <span>
                        <span className="highlight">Tecnología blockchain</span> avanzada
                      </span>
                    </div>
                    <div className="feature futuristic-glow">
                      <span className="feature-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <rect x="5" y="7" width="22" height="16" rx="4" stroke="#6C63FF" strokeWidth="2"/>
                          <circle cx="11" cy="13" r="2" fill="#8AFF00"/>
                          <path d="M27 23l-6-8-6 7-6-5" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span>
                        <span className="highlight-green">Galería</span> de arte digital exclusiva
                      </span>
                    </div>
                    <div className="feature futuristic-glow">
                      <span className="feature-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d="M16 5l10 4v7c0 7-5.5 11-10 13-4.5-2-10-6-10-13V9l10-4z" stroke="#6C63FF" strokeWidth="2" fill="#8AFF00" fillOpacity="0.10"/>
                          <circle cx="16" cy="16" r="3" stroke="#8AFF00" strokeWidth="2" fill="none"/>
                          <path d="M16 19v2" stroke="#8AFF00" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span>
                        Protección y <span className="highlight-green">autenticidad</span>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              {/* CONTACTO */}
              <section className={`contact-section ${showSections ? 'section-fadein-futurist' : 'section-hidden'}`}>
                <div className={sectionStyles['section-container']}>
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
        ) : (
          <div style={{ width: '100%' }}>{PAGES[page]}</div>
        )}
      </main>
      <Footer />
    </>
  );
}
export default App;