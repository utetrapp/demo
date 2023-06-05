export default {
  props: {
    title: String,
    score: String,
    url: String
  },
  template: `
    <div class="container">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <span class="badge">{{score.toUpperCase()}}</span>
          <img :src="url" alt="" />

          <h3 class="text-center">{{title}}</h3>
        </div>
      </div>
    </div>`
};
