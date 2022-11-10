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
                            <span>income</span>
                            <h1>$ 3,345.<span>21</span></h1>
                            <div v-if="pourcentage_spend > 0" class="state green">
                                <span class="material-symbols-outlined">
                                    north_east
                                    </span>
                                  
                                        
                                     {{pourcentage_in}}%
                            </div>
                            <div v-else class="state red">
                                <span class="material-symbols-outlined">
                                    south_east
                                    </span>
                                  
                                        
                                     {{pourcentage_in}}%
                            </div>
                            <hr>
                            <span>spending</span>
                            <h1>$ 1,335.<span>97</span></h1>
                            <div v-if="pourcentage_spend > 0" class="state green">
                                <span class="material-symbols-outlined">
                                    north_east
                                    </span>
                                  
                                        
                                     {{pourcentage_spend}}%
                            </div>
                            <div v-else class="state red">
                                <span class="material-symbols-outlined">
                                    south_east
                                    </span>
                                  
                                        
                                     {{pourcentage_spend}}%
                            </div>
                         
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
                        <div class="main_card">
                            <div class="cb_card" v-if="click == false">
                                <img src="@/assets/img/mastercard.png" alt="">
                           <p>
                            5354 5627 **** ****  <button @click="showNumber()"><span class="material-symbols-outlined">
                                visibility
                                </span></button>
                           </p> 
                         
                            </div>   
                            
                            <div class="cb_card" v-else>
                                <img src="@/assets/img/mastercard.png" alt="">
                           <p>
                            5354 5627 2245 7834  <button @click="hideNumber()"><span class="material-symbols-outlined">
                                visibility_off
                                </span></button>
                           </p> 
                         
                            </div>

                            <div class="add_card">
                                New Card ? 
                                <button>
                                    <span class="material-symbols-outlined">
                                        add
                                        </span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="card">
                        <div class="header_card">
                            <h1>Last Transactions</h1>
                            <button><span class="icon material-symbols-outlined">
                                arrow_right_alt
                                </span></button>
                        </div>
                        <div class="main_card">
                            <div class="row_transaction">
                                <span class="icon material-symbols-outlined">
                                    subscriptions
                                    </span>
                            <p>blala <br> <span>blaallaal</span></p>
                            <p class="price">$5.5</p>
                            </div>
                            <div class="row_transaction">
                                <span class="icon material-symbols-outlined">
                                    subscriptions
                                    </span>
                            <p>blala <br> <span>blaallaal</span></p>
                            <p class="price">$5.5</p>
                            </div>
                            <div class="row_transaction">
                                <span class="icon material-symbols-outlined">
                                    subscriptions
                                    </span>
                            <p>blala <br> <span>blaallaal</span></p>
                            <p class="price">$5.5</p>
                            </div>
                            <div class="row_transaction">
                                <span class="icon material-symbols-outlined">
                                    subscriptions
                                    </span>
                            <p>blala <br> <span>blaallaal</span></p>
                            <p class="price">$5.5</p>
                            </div>
                            
                        </div>
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
            coucou:"coucou",
            pourcentage_spend: 1,
            pourcentage_in:2.3,
            click: false

        }
    },
    methods:{
       showNumber(){
       


            this.click = true
            console.log(this.click)

 
            
    },
    hideNumber(){
       

       
           this.click = false
       
       console.log(this.click)

   
           
   },

    

}}
</script>


