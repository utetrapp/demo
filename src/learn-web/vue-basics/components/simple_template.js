import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

//see https://vuejs.org/guide/essentials/watchers.html#basic-example
createApp({
  name: "SimpleTemplateComponent",
  data() {
    return {
      answer: 42
    };
  },
  template: `<p>the answer is {{answer}} </p>`
}).mount("#appTemplateExample");
