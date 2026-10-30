// src/pages/RandomRecipePage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRandomMeal } from '../services/mealService';
import type { Meal } from '../types';

export const RandomRecipePage: React.FC = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRandom = async () => {
    setLoading(true);
    const data = await getRandomMeal();
    setMeal(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>בוחר עבורך מתכון אקראי...</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🎲 מתכון אקראי בשבילך</h1>
      <button
        onClick={fetchRandom}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', marginBottom: '1.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        הגהה מתכון אקראי אחר
      </button>

      {meal && (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', background: '#fff' }}>
          <h2>{meal.strMeal}</h2>
          <p><strong>קטגוריה:</strong> {meal.strCategory} | <strong>אזור:</strong> {meal.strArea}</p>
          <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '6px', margin: '1rem 0' }} />
          <h3>הוראות הכנה</h3>
          <p style={{ lineHeight: '1.6', whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>
          <Link to={`/recipe/${meal.idMeal}`} style={{ display: 'inline-block', marginTop: '1rem', color: '#007bff', fontWeight: 'bold' }}>
            צפה בעמוד המלא של המתכון &rarr;
          </Link>
        </div>
      )}
    </div>
  );
};