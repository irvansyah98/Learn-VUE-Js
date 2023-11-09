const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      fullname: '',
    };
  },
  watch:{
    name(value){
      if(value === ''){
        this.fullname = '';
      }else{
        this.fullname = value + ' ' + this.lastname;
      }
    },
    lastname(value){
      if(value === ''){
        this.fullname = '';
      }else{
        this.fullname = this.name + ' ' + value;
      }
    }
  },
  computed:{
    // fullname(){
    //   if(this.name === ''){
    //     return ''
    //   }
    //   return this.name + ' ' + 'Test'
    // },
  },
  methods: {
    outputFullname(){
      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'Test'
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset(){
      this.name = ''
    }
  }
});

app.mount('#events');
