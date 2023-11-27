<template>
  <button @click="changeSaved">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return{
      changeSaved2 : false
    }
  },
  methods: {
    changeSaved(){
      this.changeSaved2 = true
    }
  },
  beforeRouteLeave(_, _2, next){
    if(this.changeSaved2){
      next()
    }else{
      const userWantsToLeave = confirm('Are you sure?')
      next(userWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>