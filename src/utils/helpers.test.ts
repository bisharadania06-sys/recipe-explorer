// src/utils/helpers.test.ts
import { describe, it, expect } from 'vitest';
import { formatRecipeTitle, filterMealsByName, calculateIngredientsCount } from './helpers';

describe('Recipe Application Unit Tests', () => {

  it('1. should format recipe title correctly (trim and uppercase)', () => {
    expect(formatRecipeTitle('  chicken curry  ')).toBe('CHICKEN CURRY');
  });

  it('2. should filter meals by name case-insensitively', () => {
    const meals = [{ strMeal: 'Chicken Curry' }, { strMeal: 'Pasta' }, { strMeal: 'Chicken Soup' }];
    const result = filterMealsByName(meals, 'chicken');
    expect(result.length).toBe(2);
  });

  it('3. should return empty array if no meal matches the search term', () => {
    const meals = [{ strMeal: 'Pasta' }];
    const result = filterMealsByName(meals, 'Pizza');
    expect(result.length).toBe(0);
  });

  it('4. should count only non-empty ingredients correctly', () => {
    const ingredients = ['Flour', '', 'Water', '   ', 'Salt'];
    expect(calculateIngredientsCount(ingredients)).toBe(3);
  });

  it('5. should return zero for an empty ingredients array', () => {
    expect(calculateIngredientsCount([])).toBe(0);
  });

});