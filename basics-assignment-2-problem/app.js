const app = Vue.createApp({
  data() {
    return {
      output1: 'OUTPUT',
      output2: 'OUTPUT',
    };
  },
  methods:{
    submitForm(){
      alert('submitted')
    },
    setOutput1(event){
      this.output1 = event.target.value
    },
    setOutput2(event){
      this.output2 = event.target.value
    },
  }
});

app.mount('#assignment');
