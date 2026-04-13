import { searchRecipes } from '../../services/recipeService';

export default defineEventHandler(async (event) => {
  // getQuery extracts query parameters from the URL
  // For example: /api/recipes/search?q=pasta → { q: 'pasta' }
  const query = getQuery(event);
  const searchTerm = (query.q as string) || '';

  const results = await searchRecipes(searchTerm);
  return results;
});
