const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:'1',
                    name:'Manuel',
                    phone: '453467896',
                    email: 'sbtynstsr@gmail.com'
                },
                {
                    id:'2',
                    name:'Manuel 2',
                    phone: '453467896',
                    email: 'sbtynstsr2@gmail.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails()">{{ detailAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data(){
        return {
            detailAreVisible: false,
            friend: {
                id:'1',
                name:'Manuel',
                phone: '453467896',
                email: 'sbtynstsr@gmail.com'
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailAreVisible = !this.detailAreVisible
        }
    }
});

app.mount('#app');