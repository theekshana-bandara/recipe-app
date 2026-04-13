export default defineNuxtRouteMiddleware((to, from) => {
  const id = to.params.id;

  if (id && isNaN(Number(id))) {
    console.warn(
      `[validate-id] Invalid recipe ID: "${id}". Redirecting to home.`,
    );
    return navigateTo("/");
  }

  console.log(`[validate-id] ID "${id}" is valid. Proceeding.`);
});
