import { FoodInfo } from "./modules/foodinfo.js";


const input = document.querySelector("input");
const button = document.querySelector("button");

const foodInfo = new FoodInfo("#results");


button.addEventListener("click", () => {
  const query = input.value;
  input.value = "";
  foodInfo.search(query);
});