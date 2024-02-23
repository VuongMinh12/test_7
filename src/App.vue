<template>
  <base-nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "../src/components/NavBav.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "TestRouter",
  components: {
    BaseNav: Nav,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
