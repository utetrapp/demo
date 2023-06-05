import FoodItem from "./item.js"; //item.js defines an export default, here we name this default to be FoodItem

export default {
  components: {
    FoodItem
  },
  data: () => ({
    selectedId: -1,
    currentItem: null,
    status: "status",
    foodList: [
      { id: 10, title: "Mehl" },
      { id: 20, title: "Vollmilch" },
      { id: 30, title: "Wassermelone" }
    ]
  }),
  watch: {
    selectedId: "fetchAndShowDetails"
  },
  methods: {
    fetchAndShowDetails() {
      console.log("currentItem changed");
      if (this.selectedId > 0) {
        const item = this.foodList.find(
          (element) => element.id == this.selectedId
        );
        //see next example to fetch details from server instead of fixed data
        item.url =
          "https://images.openfoodfacts.org/images/products/807/680/208/5738/front_de.3372.200.jpg";
        //item.url = "hello.jpg";
        item.nutritionScore = "d";
        this.currentItem = item;
      }
    }
  }
};
