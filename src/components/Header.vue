<template>
<header class="site-header">
  <div class="site-identity">
    <h1>Restaurant</h1>
  </div>  
  <nav class="site-navigation">
    <ul class="nav">
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="Add">Add Restaurant</router-link></li> 
      <!-- <li><router-link to="Update">Update Restaurant</router-link></li>  -->
      <li><a v-on:click="logOut">Log Out</a></li> 
    </ul>
  </nav>
</header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logOut(){
            localStorage.removeItem('signUp');
            this.$router.push({
                    name: 'Login'
                });
        }
    },
}
</script>

<style scoped> 
body {
  font-family: Helvetica;
  margin: 0;
}
a {
  text-decoration: none;
  color: #000;
}
.site-header { 
  border-bottom: 1px solid #ccc;
  padding: .5em 1em;
  display: flex;
  justify-content: space-between;
}

.site-identity h1 {
  font-size: 1.5em;
  margin: .6em 0;
  display: inline-block;
}


.site-navigation ul, 
.site-navigation li {
  margin: 0; 
  padding: 0;
}

.site-navigation li {
  display: inline-block;
  margin: 1.4em 1em 1em 1em;
}
</style>
