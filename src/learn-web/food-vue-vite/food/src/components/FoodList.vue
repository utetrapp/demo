<script>
//Item.vue defines an export default, here we name this default to be FoodItem
import FoodItem from './FoodItem.vue'

export default {
  name: 'FoodList',
  components: { FoodItem },
  data: () => ({
    query: '',
    status: '',
    foodList: []
  }),
  watch: {
    query: 'fetchData'
  },
  methods: {
    fetchData() {
      this.status = 'fetching ...'
      fetch(
        `https://de.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${this.query}&sort_by=unique_scans_n&fields=id,product_name_de,nutriscore_grade,image_front_small_url&json=true`
      )
        .then((response) => {
          this.status = response.status
          return response.json()
        })
        .then((results) => {
          this.foodList = results.products ?? []
        })
    }
  }
}
</script>
<template>
  <div class="mb-3">
    <label class="form-label" for="query">Suchbegriff</label>
    <input v-model="query" id="query" class="form-control" />
  </div>
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
