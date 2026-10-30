// src/pages/FavoritesPage.tsx
import React, { useState, useEffect } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import type { Meal } from '../types';

export const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>❤️ המתכונים המועדפים שלי</h1>
      {favorites.length === 0 ? (
        <p>עדיין אין לך מתכונים מועדפים. חזור לעמוד הבית והוסף מתכונים למועדפים!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '1.5rem' }}>
          {favorites.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};