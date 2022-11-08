<template>

      <navbar></navbar>
      <navigation></navigation>

</template>

<script>
import navigation from '@/components/navigation.vue'
import navbar from '@/components/navbar.vue'

export default {
    components:{
        navigation,
        navbar
    },
    data(){
        return{
            coucou:"coucou"
        }
    }
}
</script>