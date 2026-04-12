import { getAllRecipes } from "../services/recipeService";

export default defineEventHandler(async () => {
  const recipes = await getAllRecipes();

  return recipes;
});
