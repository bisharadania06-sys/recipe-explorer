// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { searchMeals } from '../services/mealService';
import { SearchBar } from '../components/SearchBar';
import { RecipeCard } from '../components/RecipeCard';
import { ErrorMessage } from '../components/ErrorMessage';
import type { Meal } from '../types';

export const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string>('chicken');
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchMeals(searchQuery);
      if (results) {
        setMeals(results);
      } else {
        setMeals([]);
      }
    } catch (err) {
      setError('אירעה שגיאה בחיפוש המתכונים. אנא בדוק את חיבור הרשת ונסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(query);
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>גלה את המתכון הבא שלך</h1>

      <SearchBar query={query} setQuery={setQuery} onSearch={() => handleSearch(query)} />

      {/* מצב 1: טוען */}
      {loading && <p>טוען מתכונים...</p>}

      {/* מצב 2: שגיאה */}
      {error && <ErrorMessage message={error} />}

      {/* מצב 3: יש מידע / תוצאות */}
      {!loading && !error && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {meals.length > 0 ? (
            meals.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))
          ) : (
            <p>לא נמצאו מתכונים תואמים.</p>
          )}
        </div>
      )}
    </div>
  );
};