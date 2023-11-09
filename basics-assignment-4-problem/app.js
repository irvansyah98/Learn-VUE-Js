const app = Vue.createApp({
    data(){
        return{
            user : '',
            isVisible : true,
            userColor : ''
        }
    },
    computed:{
        styleClass() {
            return {
                user1: this.user === 'user1',
                user2: this.user === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            };
        }
    },
    methods : {
        btnVisible (){
            this.isVisible = !this.isVisible
        }
    }
});

app.mount('#assignment')