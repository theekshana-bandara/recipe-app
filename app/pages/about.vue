<script setup>
definePageMeta({
  ssr: false,
  // Inline Middleware
  middleware: [
    function (to, from) {
      console.log(`[Inline Middleware] Navigating to: ${to.path}`);
      console.log(`[Inline Middleware] Coming from: ${from.path}`);
      // return navigateTo('/');
    },
  ],
});
</script>

<template>
  <main>
    <section class="container py-20">
      <h1 class="text-6xl font-extrabold mb-6 text-balance">
        About Nuxtcipes:
      </h1>
      <p class="text-xl font-extrabold mb-6 text-balance max-w-screen-lg">
        Nuxtcipes is a recipe application based on the dummyJSON API, created by
        John Komarnicki for the
        <span class="font-bold">Build Modern Apps with Nuxt</span> course.
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
