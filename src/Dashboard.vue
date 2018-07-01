<template>
  <div>   
      <div class="container">
        <div class="row">
            <div class="column" id="hero">
            <h3>The house 7</h3>
            </div>        
        </div><!-- row -->
        <hr>
        <div class="row">
          <div class="column column-40 column-offset-10"">  
          <h4>code of conduct</h4>     
          <blockquote>
            <p>
              <em>{{thoughts[0]}}</em>
            </p>
          </blockquote>
          <button class="button-large" @click="change">go to results</button>
          </div><!-- col 30 -->      
          <div class="column column-40">
          <p>secondly lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div><!-- col 70 -->

        </div><!-- row -->
      </div>  <!-- container -->
      </div>

</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      thoughts:[
      "trust in the Lord",
      "Honor thry parents"
      ]      
    }
  },
   methods: {
      
    }
}
</script>

<style>
</style>
