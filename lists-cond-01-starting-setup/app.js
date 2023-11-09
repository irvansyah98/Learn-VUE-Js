const app = Vue.createApp({
  data() {
    return { 
      goalValue : '',
      goals: [] 
    };
  },
  methods: {
    addGoals(){
      this.goals.push(this.goalValue)
    },
    removeGoals(idx){
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
