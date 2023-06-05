import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

//see https://vuejs.org/guide/essentials/watchers.html#basic-example
createApp({
  data() {
    return {
      question: "",
      answer: 42
    };
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion != oldQuestion && this.question.length > 2) {
        this.generateAnswer();
      }
    }
  },
  methods: {
    generateAnswer() {
      this.answer = Math.floor(Math.random() * 100);
    }
  }
}).mount("#appWatch");
