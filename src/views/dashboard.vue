<template>

      <navbar></navbar>   
       <div class="main">
      <navigation></navigation>

        <div class="dashboard">
            <div class="dash">
                <section>
                    <div class="balance">
                        <div class="balance_left"> partie blanche</div>
                       
                        <div class="balance_right">
                            partie noir
                        </div>
                    </div>
                </section>
                <section>              

                    <div class="card">
                        <div class="header_card">
                            <h1>My Credits cards</h1>
                            <button>...</button>

                        </div>
                        <div class="main_card">coucou</div>

                    </div>
                    <div class="card">
                        <div class="header_card">
                            <h1>Last Transactions</h1>
                            <button>--></button>
                        </div>
                        <div class="main_card">coucou</div>
                    </div>
                </section>
            </div>
            <div class="news">
news
                <div class="card">
newsssss
                </div>
                <div class="card">
                    newssss
                </div>
            </div>
        </div>

      </div>

</template>

<script>
import navigation from '@/components/navigation.vue'
import navbar from '@/components/navbar.vue'
import compo from '@/components/navbar.vue'


export default {
    components:{
        navigation,
        navbar,
        compo
    },
    data(){
        return{
            coucou:"coucou"
        }
    }
}
</script>


