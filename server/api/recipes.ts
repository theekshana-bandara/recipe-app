export default defineEventHandler(async () => {
  const recipes = await $fetch("https://dummyjson.com/recipes");

  return recipes;
});
