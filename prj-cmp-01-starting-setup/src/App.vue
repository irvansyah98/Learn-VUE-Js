<template>
    <the-header title="Remember Me"></the-header>
    <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/learning-resources/TheResource.vue'

export default {
    components:{
        TheHeader,
        TheResources
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}

html{
    font-family: sans-serif;
}

body{
    margin: 0;
}
</style>