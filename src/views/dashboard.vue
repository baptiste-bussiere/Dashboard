<template>

      <navbar></navbar>   
       <div class="main">
      <navigation></navigation>

        <div class="dashboard">
            <div class="dash">
                <section>
                    <div class="balance">
                        <div class="balance_left">
                            <div class="header_left">
                                <h1>My Balance</h1>
                                <button><span class="material-symbols-outlined">
                                    more_horiz
                                    </span>
                                    </button>
    
                            </div>
                        </div>
                       
                        <div class="balance_right">
                            <div class="header_left">
                                <h1>My Credits cards</h1>
                                <button><span class="material-symbols-outlined">
                                    more_horiz
                                    </span>
                                    </button>
    
                            </div>
                        </div>
                    </div>
                </section>
                <section>              

                    <div class="card">
                        <div class="header_card">
                            <h1>My Credits cards</h1>
                            <button><span class="material-symbols-outlined">
                                more_horiz
                                </span>
                                </button>

                        </div>
                        <div class="main_card">coucou</div>

                    </div>
                    <div class="card">
                        <div class="header_card">
                            <h1>Last Transactions</h1>
                            <button><span class="material-symbols-outlined">
                                arrow_right_alt
                                </span></button>
                        </div>
                        <div class="main_card">coucou</div>
                    </div>
                </section>
            </div>
            <div class="news">

                <div class="card">

                </div>
                <div class="card">
             
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


