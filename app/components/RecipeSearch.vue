<script setup lang="ts">
const {
  searchQuery,
  searchResults,
  isSearching,
  searchError,
  search,
  clearSearch,
} = useRecipeSearch();
</script>

<template>
  <div class="w-full max-w-xl mx-auto mb-8">
    <!-- Search Input -->
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for recipes... (e.g., pizza, pasta, cake)"
        class="w-full px-4 py-3 pr-24 border-2 border-gray-200 rounded-lg text-lg focus:outline-none focus:border-dodgeroll-gold transition-colors"
        @keyup.enter="search"
      />
      <div class="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
        <!-- Clear button (only shows when there's text) -->
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="px-3 py-1 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>
        <!-- Search button -->
        <button
          @click="search"
          class="px-4 py-1 bg-dodgeroll-gold text-white rounded-md cursor-pointer hover:bg-dodgeroll-gold/90 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
    <!-- Loading indicator -->
    <p v-if="isSearching" class="mt-4 text-center text-gray-500">
      Searching...
    </p>
    <!-- Error message -->
    <p v-if="searchError" class="mt-4 text-center text-red-500">
      {{ searchError }}
    </p>
    <!-- Search results summary -->
    <p
      v-if="searchResults && !isSearching"
      class="mt-4 text-center text-gray-600"
    >
      Found {{ searchResults.recipes.length }} recipe(s) for "{{ searchQuery }}"
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
