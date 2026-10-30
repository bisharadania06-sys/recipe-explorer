// src/pages/RecipeDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMealById } from '../services/mealService';
import type { Meal } from '../types';

export const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMealDetails = async () => {
      if (id) {
        setLoading(true);
        const data = await getMealById(id);
        setMeal(data);
        setLoading(false);
      }
    };
    fetchMealDetails();
  }, [id]);

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>טוען את פרטי המתכון...</div>;
  if (!meal) return <div style={{ padding: '2rem', textAlign: 'center' }}>המתכון לא נמצא.</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
        &larr; חזרה לחיפוש מתכונים
      </Link>

      <h1 style={{ marginTop: '1rem' }}>{meal.strMeal}</h1>
      <p style={{ color: '#555' }}>
        <strong>קטגוריה:</strong> {meal.strCategory} | <strong>אזור:</strong> {meal.strArea}
      </p>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', margin: '1rem 0' }}
      />

      <h2>הוראות הכנה</h2>
      <p style={{ lineHeight: '1.6', whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>

      {meal.strYoutube && (
        <div style={{ marginTop: '2rem' }}>
          <h3>סרטון הדרכה</h3>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" style={{ color: '#ff0000', fontWeight: 'bold' }}>
            צפה בסרטון ב-YouTube 🎥
          </a>
        </div>
      )}
    </div>
  );
};