import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles['footer-futuristic']}>
    <div className={`container ${styles['footer-container']}`}>
      <span>© 2025 Genifty. Todos los derechos reservados.</span>
      <div className={styles['footer-social']}>
        <a href="#" className={styles['footer-link']} aria-label="Twitter">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#4ad1ff" d="M22 5.924a8.4 8.4 0 0 1-2.357.646A4.13 4.13 0 0 0 21.448 4.1a8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 11.034 9.03a11.65 11.65 0 0 1-8.457-4.287a4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 2 9.097v.052a4.106 4.106 0 0 0 3.292 4.025a4.093 4.093 0 0 1-1.852.07a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 19.13a11.616 11.616 0 0 0 6.29 1.844c7.547 0 11.675-6.155 11.675-11.495c0-.175-.004-.35-.012-.523A8.18 8.18 0 0 0 22 5.924Z"/></svg>
        </a>
        <a href="#" className={styles['footer-link']} aria-label="Discord">
          {/* SVG oficial y limpio de Discord, estilo línea y color consistente */}
          <svg width="22" height="22" viewBox="0 0 245 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="245" height="240" rx="30" fill="#5865F2"/>
            <path fill="#FFFFFF" d="M104.4 104.1c-5.7 0-10.2 4.9-10.2 10.9s4.6 10.9 10.2 10.9c5.7 0 10.3-4.9 10.2-10.9 0-6-4.5-10.9-10.2-10.9Zm36.2 0c-5.7 0-10.2 4.9-10.2 10.9s4.6 10.9 10.2 10.9c5.7 0 10.3-4.9 10.2-10.9 0-6-4.5-10.9-10.2-10.9Z"/>
            <path fill="#FFFFFF" d="M191.1 20h-137c-17.7 0-32.1 14.4-32.1 32.1v137.7c0 17.7 14.4 32.1 32.1 32.1h115.8l-5.4-18.9 13 12.1 12.3 11.2 21.8 19.3V52.1c0-17.7-14.4-32.1-32.1-32.1ZM155.4 159s-5.1-6.1-9.4-11.5c18.7-5.3 25.7-16.8 25.7-16.8-5.8 3.8-11.4 6.5-16.4 8.3-7.1 3-14 5-20.7 6.1-13.7 2.5-26.3 1.8-37.2-.1-8.2-1.6-15.2-3.9-21-6.1-3.3-1.2-6.9-2.8-10.5-4.8-.4-.2-.8-.4-1.2-.6-.3-.2-.5-.3-.7-.4-3.2-1.8-5-3.1-5-3.1s6.8 11.3 24.8 16.8c-4.2 5.3-9.5 11.7-9.5 11.7-31.4-1-43.4-21.6-43.4-21.6 0-45.8 20.5-82.9 20.5-82.9 20.5-15.3 40-14.9 40-14.9l1.4 1.6c-25.7 7.4-37.5 18.6-37.5 18.6s3.1-1.8 8.3-4.3c15-6.6 27-8.4 31.8-8.8.8-.1 1.6-.2 2.5-.2 9-.7 19.1-.9 29.3.2 13.8 1.6 28.6 5.7 43.7 14.1 0 0-11.3-10.7-35.6-18.1l2-2.3s19.4-.4 39.9 14.9c0 0 20.5 37.1 20.5 82.9 0 0-12.3 20.6-43.8 21.5Z"/>
          </svg>

        </a>
        <a href="#" className={styles['footer-link']} aria-label="Instagram">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" fill="#4ad1ff"/><circle cx="12" cy="12" r="4.5" fill="#181a2a"/><circle cx="17" cy="7" r="1.5" fill="#181a2a"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
