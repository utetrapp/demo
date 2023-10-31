<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <header class="d-flex flex-wrap p-3 border-bottom">
    <img
      src="https://fbi.h-da.de/typo3conf/ext/hda/Resources/Public/Logos/i-lgo.svg"
      width="194"
      height="20"
      alt="FBI"
    />
    <h1>Demo of Vue with router, Pinia using FoodApi</h1>
  </header>
  <!-- see https://getbootstrap.com/docs/5.3/components/navbar/ -->
  <nav class="navbar nav nav-pills bg-body-tertiary p-3">
    <RouterLink to="/" class="nav-item nav-link">Food</RouterLink>
    <RouterLink to="/about" class="nav-item nav-link">About</RouterLink>
    <SearchBar />
  </nav>
  <main class="p-2">
    <RouterView />
  </main>
</template>

<style scoped></style>
