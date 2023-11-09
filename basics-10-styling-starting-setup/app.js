const app = Vue.createApp({
    data(){
        return {
            boxASelected : false,
            boxBSelected : false,
            boxCSelected : false,
        }
    },
    computed : {
        boxAClasses(){
            return {active: this.boxASelected}
        },
        boxBClasses(){
            return {active: this.boxBSelected}
        },
        boxCClasses(){
            return {active: this.boxCSelected}
        }
    },
    methods : {
        boxSelected(val){
            if(val === 'A'){
                this.boxASelected = !this.boxASelected;
            }else if(val === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }else if(val === 'C'){
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling');