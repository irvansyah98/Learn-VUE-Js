<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>Input is invalid</h2>
            <p>Please enter</p>
        </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components:{
        ErrorAlert
    },
    data(){
        return {
            inputIsInvalid: false
        }
    },
    methods:{
        setGoal(){
            const setgoal = this.$refs.goal.value
            if(setgoal === ''){
                this.inputIsInvalid = true;
            }
        }
    }
}
</script>