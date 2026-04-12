import { getRecipeById } from '../../services/recipeService';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Recipe ID is required',
    });
  }

  const recipe = await getRecipeById(id);
  return recipe;
});
