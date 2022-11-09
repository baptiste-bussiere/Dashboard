<template lang="">
  <div class="sidenav"> 
    <nav>
      <ul>
        <li><a href="">Dashboard</a></li>
        <li><a href="">Transaction</a></li>
        <li><a href="">My Cards</a></li>
        <li><a href="">Insight</a></li>
        <li><a href="">Help</a></li>

      </ul>
    </nav>
    <div class="welcome">
      <div class="information">
        <img src="" alt="">
        <p>Welcome back</p>
        <span>CAMILLIA</span>
      </div>
      <button>Sign Out</button>
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
    }
  },
  mounted() {
    this.getData()
  }

}
</script>
