import React, { useState, useEffect } from 'react';

const WALLET_KEY = 'wallet_connected';

const WalletSimulator: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(WALLET_KEY);
    if (saved === 'true') setConnected(true);
  }, []);

  const handleConnect = () => {
    setConnected(true);
    localStorage.setItem(WALLET_KEY, 'true');
  };
  const handleDisconnect = () => {
    setConnected(false);
    localStorage.removeItem(WALLET_KEY);
  };

  return (
    <div style={{margin: '32px auto', textAlign: 'center'}}>
      {connected ? (
        <>
          <span style={{color: '#8AFF00', fontWeight: 700, fontSize: '1.2rem', marginRight: 16}}>Wallet conectada</span>
          <button onClick={handleDisconnect} style={{background: '#23244a', color: '#fff', border: '1.5px solid #6C63FF', borderRadius: 10, padding: '10px 24px', fontWeight: 700, cursor: 'pointer'}}>Desconectar</button>
        </>
      ) : (
        <button onClick={handleConnect} style={{background: 'linear-gradient(90deg, #6C63FF 0%, #8AFF00 100%)', color: '#fff', border: 'none', borderRadius: 10, padding: '14px 32px', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 0 16px #8aff00cc'}}>Conectar Wallet</button>
      )}
    </div>
  );
};
export default WalletSimulator;
