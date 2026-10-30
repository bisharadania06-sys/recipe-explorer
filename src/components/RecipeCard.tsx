// src/components/RecipeCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { Meal } from '../types';

interface RecipeCardProps {
  meal: Meal;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ meal }) => {
  return (
    <Link
      to={`/recipe/${meal.idMeal}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', background: '#fff', cursor: 'pointer', height: '100%' }}>
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', borderRadius: '6px' }} />
        <h3>{meal.strMeal}</h3>
        <p>קטגוריה: {meal.strCategory} | אזור: {meal.strArea}</p>
      </div>
    </Link>
  );
};