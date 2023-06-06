import FoodItem from "./components/item.js"; //item.js defines an export default, here we name this default to be FoodItem

export default {
  components: {
    FoodItem
  },
  data: () => ({
    query: "",
    status: "",
    foodList: []
  }),
  watch: {
    query: "fetchData"
  },
  methods: {
    fetchData() {
      this.status = "fetching ...";
      fetch(
        `https://de.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${this.query}&sort_by=unique_scans_n&fields=product_name_de,nutriscore_grade,image_front_small_url&json=true`
      )
        .then((response) => {
          this.status = response.status;
          return response.json();
        })
        .then((results) => {
          this.foodList = results.products ?? [];
        });
    }
  }
};
