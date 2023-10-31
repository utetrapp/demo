import { defineStore } from 'pinia'

export const useFoodListStore = defineStore({
  id: 'food',
  state: () => ({ foodList: [], status: '', query: '' }),
  actions: {
    // Actions in Pinia are methods that handle asynchronous operations
    async fetchData() {
      console.log('fetch data')
      this.status = 'fetching ...'
      const response = await fetch(
        `https://de.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${this.query}&sort_by=unique_scans_n&fields=id,product_name_de,nutriscore_grade,image_front_small_url&json=true`
      )
      this.status = response.status
      const results = await response.json()
      this.foodList = results.products ?? []
    }
  }
})
