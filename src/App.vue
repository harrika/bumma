<template>
<div id="app">
   <div class='navbar'>
        <ul>
          <li class="logo"><a href="#">henrys</a></li>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    <Dashboard/>
    <!-- <Home/> -->
  </div> 
</template>

<script>
  import Home from './Home.vue';
  import Dashboard from './Dashboard.vue';

export default {
    name: 'app',
    components: {
      Home, 
      Dashboard    
    }
  }
</script>

<style>
.navbar {
  margin-bottom: 10px;
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #606c76;
}

.navbar li {
    float: right;
    margin-bottom: 0;
}

.navbar li.logo {
    float: left;    
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 700;
    padding-left: 20px;   
}

.navbar li.logo a {
   color: #EDE5AF;
  }

.navbar li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.navbar li a:hover {
    background-color: #ab5dda;
}
#app {
  font-family: 'Robotica', Helvetica, Arial, sans-serif; 
  margin-top: 20px;
}
#hero {
  background-image: linear-gradient(rgba(237, 229, 175,0.5),rgba(237, 229, 175, 0.2)),url("assets/house7.png");
  background-size: cover;
  background-position: center;
  padding: 70px 0px;
  color: orange;
}
</style>
