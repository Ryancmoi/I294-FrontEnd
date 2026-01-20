const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      console.log(`Parent ${id}`);
      if (id) {
        this.cart.push(id);
      } else {
        console.log(`ERROR PAS ID`);
      }
    },
    removeCart() {
      this.cart.pop();
    },
  },
});
