<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FoodList from './components/FoodList.vue'
</script>

<template>
  <header class="d-flex flex-wrap justify-content-center p-3 border-bottom">
    <img
      src="https://fbi.h-da.de/typo3conf/ext/hda/Resources/Public/Logos/i-lgo.svg"
      width="194"
      height="20"
      alt="FBI"
    />
    <h1>Demo of Vue with router, Pinia using FoodApi</h1>
  </header>
  <!-- see https://getbootstrap.com/docs/4.0/components/navs/#base-nav -->
  <nav class="nav nav-pills justify-content-center p-3">
    <RouterLink to="/" class="nav-item nav-link">Food</RouterLink>
    <RouterLink to="/about" class="nav-item nav-link">About</RouterLink>
  </nav>
  <main class="p-2">
    <RouterView />
  </main>
</template>

<style scoped></style>
