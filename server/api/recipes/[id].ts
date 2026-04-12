export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const recipe = await $fetch(`https://dummyjson.com/recipes/${id}`);

  return recipe;
});
