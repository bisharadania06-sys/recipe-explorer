// src/utils/helpers.ts
import type { Meal } from '../types';

// פונקציה 1: עיצוב כותרת מתכון (הסרת רווחים והפיכה לאותיות גדולות)
export const formatRecipeTitle = (title: string): string => {
  return title.trim().toUpperCase();
};

// פונקציה 2: סינון מתכונים לפי שם
export const filterMealsByName = (meals: { strMeal: string }[], searchTerm: string) => {
  return meals.filter(meal => meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()));
};

// פונקציה 3: ספירת מצרכים תקינים ברשימה
export const calculateIngredientsCount = (ingredients: string[]): number => {
  return ingredients.filter(i => i && i.trim() !== '').length;
};