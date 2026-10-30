// src/services/mealService.ts
import type { Meal } from '../types';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

// פונקציה לחיפוש מתכונים לפי שם
export async function searchMeals(query: string): Promise<Meal[]> {
  try {
    const response = await fetch(`${BASE_URL}search.php?s=${query}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

// פונקציה לקבלת מתכון בודד לפי מזהה (ID)
export async function getMealById(id: string): Promise<Meal | null> {
  try {
    const response = await fetch(`${BASE_URL}lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching meal details:', error);
    return null;
  }
}

// הוסף ל- src/services/mealService.ts אם טרם קיים
export const getRandomMeal = async (): Promise<Meal | null> => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};