import React, { useEffect, useState } from 'react';
import { NFTS } from './nftData';

// Tipos
export type NFT = typeof NFTS[0];

const FAVORITES_KEY = 'nft_favorites';

const NFTFavorites: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_KEY);
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const removeFavorite = (id: number) => {
    const updated = favorites.filter(favId => favId !== id);
    setFavorites(updated);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  const favoriteNFTs = NFTS.filter(nft => favorites.includes(nft.id));

  return (
    <section style={{marginTop: 32}}>
      <h3 style={{color: '#6C63FF', fontWeight: 700, fontSize: '2rem', textAlign: 'center', marginBottom: 24}}>Favoritos</h3>
      {favoriteNFTs.length === 0 ? (
        <div style={{color: '#6C63FF', textAlign: 'center', fontWeight: 700, fontSize: '1.2rem', background: 'rgba(30,40,60,0.7)', borderRadius: 12, padding: 18, border: '1.5px solid #8aff0044', boxShadow: '0 0 16px #8aff0033'}}>No hay favoritos aún</div>
      ) : (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center'}}>
          {favoriteNFTs.map(nft => (
            <div key={nft.id} style={{background: 'rgba(30,40,60,0.7)', borderRadius: 14, boxShadow: '0 0 24px #6c63ff33', border: '1.5px solid #6c63ff44', padding: 16, minWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
              <img src={nft.img} alt={nft.name} style={{width: 120, height: 80, objectFit: 'cover', borderRadius: 8, marginBottom: 10}} />
              <span style={{fontWeight: 700, color: '#8AFF00', fontSize: '1.1rem'}}>{nft.name}</span>
              <span style={{color: '#6C63FF', fontWeight: 600, fontSize: '1rem'}}>{nft.rarity}</span>
              <span style={{color: '#fff', fontWeight: 600, fontSize: '1rem'}}>{nft.price} ETH</span>
              <button onClick={() => removeFavorite(nft.id)} style={{marginTop: 10, background: 'none', color: '#ff4a4a', border: 'none', fontWeight: 700, cursor: 'pointer'}}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default NFTFavorites;
