<script setup>
import Login from "./components/Login.vue";

</script>







<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <nav>
        asdasd
      </nav>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon >Icon</v-app-bar-nav-icon>
      <v-app-bar-title> Title </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <div class="container">       
        <Login></Login>  
      
      </div>
    </v-main>

  </v-app>
</template>












<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
