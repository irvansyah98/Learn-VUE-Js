const app = Vue.createApp({
  data() {
    return { 
      goalValue : '',
      goals: [],
      isShow: true
    };
  },
  methods: {
    addGoals(){
      this.goals.push(this.goalValue)
    },
    showed(){
        this.isShow = !this.isShow
    }
  }
});

app.mount('#assignment');
