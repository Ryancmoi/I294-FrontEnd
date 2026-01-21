app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars and
          <br/>
          <p v-if="review.recommand == 'Yes'">Recommand this product</p>
          <p v-else>Doesn't recommand this product</p>
          "{{ review.review }}"
          <br/>
        </li>
      </ul>
    </div>
  `,
});
