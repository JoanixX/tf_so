import React, { useEffect, useState } from 'react';

const DARK_KEY = 'dark_mode';

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(DARK_KEY);
    return saved === null ? true : saved === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
    document.body.classList.toggle('light-mode', !dark);
    localStorage.setItem(DARK_KEY, dark ? 'true' : 'false');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 100,
        background: dark ? '#23244a' : 'linear-gradient(90deg, #6C63FF 0%, #8AFF00 100%)',
        color: dark ? '#8AFF00' : '#fff',
        border: '1.5px solid #6C63FF',
        borderRadius: 12,
        padding: '12px 28px',
        fontWeight: 700,
        fontSize: '1.1rem',
        boxShadow: '0 0 16px #8aff00cc',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >
      {dark ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};
export default DarkModeToggle;
