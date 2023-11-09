const app = Vue.createApp({
    data(){
        return {
            courseGoal : 'Finish',
            vueLink : 'https://irvansyah.id'
        }
    },
    methods: {
        outputGoal(){
            const randNumber = Math.random();
            if(randNumber < 0.5){
                return this.courseGoal;
            }else{
                return 'Master';
            }
        }
    }
});

app.mount('#user-goal');