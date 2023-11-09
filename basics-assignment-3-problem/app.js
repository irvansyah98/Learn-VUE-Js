const app = Vue.createApp({
  data() {
    return {
      result: 0, // Initial result value
    };
  },
  computed: {
    resultText() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result === 37) {
        return "Reached 37!";
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(value) {
      this.result += value; // Increment the result by the given value
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.result = 0; // Reset the result to 0 after 5 seconds
      }, 5000);
    },
  },
});

app.mount("#assignment");
