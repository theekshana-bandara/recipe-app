import type { RecipeResponse } from '~~/types/types';

export function useRecipeSearch() {
  // 1. Create a shared reactive variable to hold the search query
  const searchQuery = useState('recipe-search-query', () => '');

  // 2. Create shared reactive variables for the results, loading state, and errors
  const searchResults = useState<RecipeResponse | null>('recipe-search-results', () => null);
  const isSearching = useState('recipe-search-loading', () => false);
  const searchError = useState<string | null>('recipe-search-error', () => null);

  // 3. Create the search function
  async function search() {
    // Don't search if the query is empty
    if (!searchQuery.value.trim()) {
      searchResults.value = null;
      return;
    }

    isSearching.value = true;
    searchError.value = null;

    try {
      // Call our own server API route (the one we created in Feature 2)
      const data = await $fetch<RecipeResponse>(
        `/api/recipes/search?q=${searchQuery.value}`
      );
      searchResults.value = data;
    } catch (err) {
      searchError.value = 'Something went wrong with the search. Please try again.';
      searchResults.value = null;
    } finally {
      isSearching.value = false;
    }
  }

  // 4. Create a function to clear the search
  function clearSearch() {
    searchQuery.value = '';
    searchResults.value = null;
    searchError.value = null;
  }

  // 5. Return everything that components will need
  return {
    searchQuery,
    searchResults,
    isSearching,
    searchError,
    search,
    clearSearch,
  };
}
