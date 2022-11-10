<template lang="">
  <div class="sidenav"> 
    <nav>
      <ul>
        <li><a href=""><span class=" active material-symbols-outlined">
          home
          </span> Dashboard</a></li>
        <li><a href=""><span class="material-symbols-outlined">
          paid
          </span> Transaction</a></li>
        <li><a href=""><span class="material-symbols-outlined">
          credit_card
          </span> My Cards</a></li>
        <li><a href=""> 
          <span class="material-symbols-outlined">
          insights
          </span>
          Insight</a></li>
        <li><a href=""> <span class="material-symbols-outlined">
          contact_support
          </span>Help</a></li>

      </ul>
    </nav>
    <div class="welcome">
      <div class="information">
        <img src="@/assets/img/carre.jpeg" alt="">
        <h1>Welcome back  <span>CAMILLIA</span></h1>
       
      </div>
      <button> <span class="material-symbols-outlined">
        logout
        </span>Sign Out</button>
    </div>
  </div>
</template>
<script scoped>

export default {
  data(){
    return{
      name:"André",
      response:"",
      data:"",
      post: {}
      
    }
   
  }, 
  
  methods:{
   getData() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => this.post = data)
      console.log(this.post)

    }
  },
  mounted() {
    this.getData()

  }

}
</script>
