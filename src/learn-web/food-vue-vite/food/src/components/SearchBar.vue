<script setup>
import { useFoodListStore } from '@/stores/food'
import { storeToRefs } from 'pinia'

const store = useFoodListStore()

// for reactivity/two way binding/v-model
// see https://vuejs.org/guide/components/v-model.html
// and https://pinia.vuejs.org/api/modules/pinia.html#storeToRefs
const { query } = storeToRefs(store)

const search = () => {
  console.log('search')
  store.fetchData()
}
</script>
<template>
  <div class="d-flex p-2 justify-content-end">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search Food"
      aria-label="Search"
      v-model="query"
      id="query"
    />
    <button @click="search" class="btn btn-outline-success" type="submit">Search</button>
  </div>
</template>
