<script>
import FoodList from '../components/FoodList.vue'
export default {
  name: 'FoodListView',
  components: { FoodList }
}
</script>

<template>
  <section>
    <h1 class="title">Finde mehr über dein Essen heraus :)</h1>
    <FoodList />
  </section>
</template>
