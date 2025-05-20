import React, { useEffect, useState } from 'react';
import { NFTS } from './nftData';

export type NFT = typeof NFTS[0];

const CART_KEY = 'nft_cart';

const NFTCart: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cart.filter(cid => cid !== id);
    setCart(updated);
    localStorage.setItem(CART_KEY, JSON.stringify(updated));
  };

  const cartNFTs = NFTS.filter(nft => cart.includes(nft.id));

  return (
    <aside style={{marginTop: 32}}>
      <h3 style={{color: '#8AFF00', fontWeight: 700, fontSize: '2rem', textAlign: 'center', marginBottom: 24}}>Carrito</h3>
      {cartNFTs.length === 0 ? (
        <div style={{color: '#8AFF00', textAlign: 'center', fontWeight: 700, fontSize: '1.2rem', background: 'rgba(30,40,60,0.7)', borderRadius: 12, padding: 18, border: '1.5px solid #6c63ff44', boxShadow: '0 0 16px #6c63ff33'}}>Carrito vacío</div>
      ) : (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center'}}>
          {cartNFTs.map(nft => (
            <div key={nft.id} style={{background: 'rgba(30,40,60,0.7)', borderRadius: 14, boxShadow: '0 0 24px #6c63ff33', border: '1.5px solid #6c63ff44', padding: 16, minWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
              <img src={nft.img} alt={nft.name} style={{width: 120, height: 80, objectFit: 'cover', borderRadius: 8, marginBottom: 10}} />
              <span style={{fontWeight: 700, color: '#8AFF00', fontSize: '1.1rem'}}>{nft.name}</span>
              <span style={{color: '#6C63FF', fontWeight: 600, fontSize: '1rem'}}>{nft.rarity}</span>
              <span style={{color: '#fff', fontWeight: 600, fontSize: '1rem'}}>{nft.price} ETH</span>
              <button onClick={() => removeFromCart(nft.id)} style={{marginTop: 10, background: 'none', color: '#ff4a4a', border: 'none', fontWeight: 700, cursor: 'pointer'}}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};
export default NFTCart;
