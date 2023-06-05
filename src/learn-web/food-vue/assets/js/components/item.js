export default {
  props: {
    title: String,
    score: String,
    url: String
  },
  computed: {
    // a computed getter
    getScoreClass() {
      let classes = "badge text-end";
      if (this.score.toUpperCase() === "A") return classes + " text-bg-success";
      if (this.score.toUpperCase() >= "D") return classes + " text-bg-danger";
      return classes + " text-bg-secondary";
    }
  },
  template: `
    <div class="d-flex flex-row">
        <div class="card m-2 p-2" style="width:10em">
          <span v-if="score" :class="getScoreClass">{{score.toUpperCase()}}</span>
          <img v-if="url" :src="url" alt="" class="card-img-top" style="max-height:5em;object-fit: cover;" />
          <p v-if="title" class="text-wrap">{{title}}</p>
        </div>
    </div>
    `
};
