const app = Vue.createApp({
    data(){
        return {
            name : 'irfan',
            age : 20,
            rand : Math.random(),
            vueLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSseFt3R56pnq8laRc8N5HFL3Jnbb6Gd9kqyvPyln&s'
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

app.mount('#assignment');