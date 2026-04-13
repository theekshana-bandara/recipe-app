export default defineNuxtRouteMiddleware((to, from) => {
  // Skip on initial page load (from.name is undefined on first load)
  if (!from.name) {
    console.log(`[Page Logger] Initial page load: ${to.path}`);
    return;
  }
  console.log(`[Page Logger] Navigation: ${from.path} → ${to.path}`);
});