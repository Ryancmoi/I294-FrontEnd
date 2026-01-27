app.component("cart-display", {
  props: {
    cart: {
      type: Array,
      required: true,
    },
    cartTotal: {
      type: Number,
      required: true,
    },
    discountedTotal: {
      type: Number,
      required: true,
    },
  },
  template: /*html*/ `
    <div class="cart">
        <h2>🛒 Mon Panier ({{ cart.length }})</h2>
        <ul>
          <li v-for="(gadget, index) in cart" :key="index">
            <p>{{ gadget.name }} - {{ gadget.price }}€</p>
            <button>➖</button>
            <h2>{{ gadget.quantity }}</h2>
            <button>➕</button>
            <button class="remove-btn" @click="removeFromCart(index)">
              ❌
            </button>
          </li>
        </ul>
        <p v-if="cart.length===0">Votre panier est vide.</p>
        <h3>
          💰 Total :
          <span v-if="discountedTotal < cartTotal">
            <s>{{ cartTotal }}€</s> ➝
            <strong>{{ discountedTotal.toFixed(2) }}€ (-10%)</strong>
          </span>
          <span v-else> {{ cartTotal }}€ </span>
        </h3>
      </div>
        `,
  methods: {
    removeFromCart(index) {
      this.$emit("remove-from-cart", index);
    },
  },
  computed: {},
});
