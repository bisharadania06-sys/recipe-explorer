// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0 }}>🍽️ Recipe Explorer</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>חיפוש מתכונים</Link>
        <Link to="/random" style={{ color: '#fff', textDecoration: 'none' }}>מתכון אקראי 🎲</Link>
        <Link to="/favorites" style={{ color: '#fff', textDecoration: 'none' }}>מועדפים ❤️</Link>
      </div>
    </nav>
  );
};