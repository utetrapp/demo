<script>
export default {
  name: 'FoodItem',
  props: {
    title: { type: String, required: false },
    score: { type: String, required: false },
    url: { type: String, required: false }
  },
  computed: {
    getScoreClass() {
      let classes = 'badge text-end mb-1'
      if (this.score.toUpperCase() === 'A') return classes + ' text-bg-success'
      if (this.score.toUpperCase() >= 'D') return classes + ' text-bg-danger'
      return classes + ' text-bg-secondary'
    }
  }
}
</script>
<template>
  <div class="card m-2 p-2" style="width: 10em">
    <span v-if="score" :class="getScoreClass">{{ score.toUpperCase() }}</span>
    <img
      v-if="url"
      :src="url"
      alt=""
      class="card-img-top"
      style="max-height: 5em; object-fit: cover"
    />
    <p v-if="title" class="text-wrap">{{ title }}</p>
  </div>
</template>
