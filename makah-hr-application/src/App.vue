<template>
  <ion-app>
    <ion-router-outlet />
    <div id="app">
      <Splash :isLoading="isLoading" />
      <main v-if="!isLoading">
        <div v-if="logged">
          <Tabs />
        </div>
      </main>
    </div>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import Tabs from "@/views/Tabs.vue";
import Splash from "./components/Splash";

export default {
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    Tabs,
    Splash,
  },
  computed: {
    // if logged in show tab
    logged() {
      return this.$store.state.loggedin;
    },
  },
  data() {
    return { isLoading: true,
    test: false };
  },
  mounted() {
    
    if(this.test==false){
      this.$store.commit("logged", false)
      this.$router.push('/')
      this.test = true
    }
    if(this.logged==false){
      this.test = false
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

</style>