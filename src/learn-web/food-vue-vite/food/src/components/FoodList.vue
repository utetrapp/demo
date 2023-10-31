<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useFoodListStore } from '@/stores/food'
//Item.vue defines an export default, here we name this default to be FoodItem
import FoodItem from './FoodItem.vue'

const store = useFoodListStore()
const { query, status, foodList } = storeToRefs(store)
watch(query, () => {
  console.log('query')
  store.fetchData()
})
</script>
<template>
  <p v-if="status">{{ status }}</p>
  <div v-if="foodList">
    <div class="d-flex flex-row mb-3 flex-wrap">
      <food-item
        v-for="item in foodList"
        :title="item.product_name_de"
        :score="item.nutriscore_grade"
        :url="item.image_front_small_url"
        :key="item.id"
      />
    </div>
  </div>
</template>
