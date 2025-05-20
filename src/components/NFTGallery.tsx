import React, { useState, useEffect, useCallback } from 'react';
import NFTCart from './NFTCart.tsx';
import NFTFavorites from './NFTFavorites.tsx';
import NFTFilters from './NFTFilters.tsx';
import styles from './NFTGallery.module.css';
import { NFTS } from './nftData';

const FAVORITES_KEY = 'nft_favorites';
const CART_KEY = 'nft_cart';

// Tipos
export type NFT = typeof NFTS[0];

const NFTGallery: React.FC = () => {
  // Estado para filtro de rareza
  const [filter, setFilter] = useState<string>('todos');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  // Cargar favoritos y carrito de localStorage
  useEffect(() => {
    const fav = localStorage.getItem(FAVORITES_KEY);
    if (fav) setFavorites(JSON.parse(fav));
    const crt = localStorage.getItem(CART_KEY);
    if (crt) setCart(JSON.parse(crt));
  }, []);

  // Guardar favoritos y carrito en localStorage
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  // Favorito toggle
  const toggleFavorite = useCallback((id: number) => {
    setFavorites(favs => favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);
  }, []);

  // Drag & drop
  const onDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData('nftId', id.toString());
  };
  const onDrop = (e: React.DragEvent) => {
    const id = parseInt(e.dataTransfer.getData('nftId'));
    if (!cart.includes(id)) setCart([...cart, id]);
  };
  const onDragOver = (e: React.DragEvent) => e.preventDefault();

  // Filtro de NFTs
  const filteredNFTs = filter === 'todos' ? NFTS : NFTS.filter(nft => nft.rarity === filter);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Galería de NFTs</h2>
      <NFTFilters filter={filter} setFilter={setFilter} />
      <div className={styles.nftGrid}>
        {filteredNFTs.map(nft => (
          <div
            key={nft.id}
            className={styles.nftCard}
            draggable
            onDragStart={e => onDragStart(e, nft.id)}
          >
            <img src={nft.img} alt={nft.name} className={styles.nftImg} />
            <div className={styles.nftInfo}>
              <span className={styles.nftName}>{nft.name}</span>
              <span className={styles.nftRarity + ' ' + styles['rarity-' + nft.rarity]}>{nft.rarity}</span>
              <span className={styles.nftPrice}>{nft.price} ETH</span>
            </div>
            <button
              onClick={() => toggleFavorite(nft.id)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 24,
                color: favorites.includes(nft.id) ? '#8AFF00' : '#6C63FF',
                filter: favorites.includes(nft.id) ? 'drop-shadow(0 0 8px #8aff00cc)' : 'none',
                transition: 'color 0.2s, filter 0.2s',
              }}
              aria-label={favorites.includes(nft.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              {favorites.includes(nft.id) ? '★' : '☆'}
            </button>
          </div>
        ))}
      </div>
      {/* Carrito con drop */}
      <div onDrop={onDrop} onDragOver={onDragOver} style={{minHeight: 120}}>
        <NFTCart />
      </div>
      <NFTFavorites />
    </section>
  );
};

export default NFTGallery;
