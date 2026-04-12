const BASE_URL = 'https://dummyjson.com';

// Fetches all recipes
export async function getAllRecipes() {
  const response = await $fetch(`${BASE_URL}/recipes`);
  return response;
}


// Fetches a single recipe by its ID.
export async function getRecipeById(id: string) {
  const response = await $fetch(`${BASE_URL}/recipes/${id}`);
  return response;
}


// Searches recipes by name.
export async function searchRecipes(query: string) {
  const response = await $fetch(`${BASE_URL}/recipes/search?q=${query}`);
  return response;
}