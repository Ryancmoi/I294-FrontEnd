const app = Vue.createApp({
  data() {
    return {
      title: "Vue Gadget Shop",
      description:
        "Découvrez les derniers gadgets électroniques de haute technologie !",
      gadget: {
        phone: {
          title: "Smartphone",
          description: "smarphone stylé",
          nom: "Smartphone XZ",
          prix: "799€",
          image: "./assets/phone.jpg",
          inStock: true,
        },
      },
    };
  },
  methods: {
    inStock() {},
  },
  computed: {},
});
