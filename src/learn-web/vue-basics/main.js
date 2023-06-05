import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import FoodInfo from "./components/food.js"; //food.js defines an export default, here we name this default to be FoodInfo

createApp(FoodInfo).mount("#appMoreComplexExample");
