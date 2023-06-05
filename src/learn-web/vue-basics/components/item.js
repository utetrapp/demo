export default {
  props: {
    title: String,
    nutritionScore: String,
    url: String
  },
  template: `
    <div class="container">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img
              :src="url"
              alt=""
            />
            <div class="caption">
              <h3>{{title}}</h3>
              <span class="badge">{{nutritionScore}}</span>
            </div>
          </div>
        </div>
      </div>`
};
