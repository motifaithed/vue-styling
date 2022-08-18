const app = Vue.createApp({
  data() {
    return {
      boxSelectedA: false,
      boxSelectedB: false,
      boxSelectedC: false,
    };
  },
  methods: {
    selectBox(box) {
      console.log(box);
      if (box === "A") {
        this.boxSelectedA = !this.boxSelectedA;
      } else if (box === "B") {
        this.boxSelectedB = !this.boxSelectedB;
      } else {
        this.boxSelectedC = !this.boxSelectedC;
      }
    },
  },
});

app.mount("#styling");
