<template>
  <div
    class="container-fluid d-flex flex-column align-items-center position-relative px-0"
    id="landing"
  >
    <navbarmenu />
    <homepage />
    <footerbottom />
  </div>
</template>

<script>
import navbarmenu from "./components/navbar-menu.vue";
import homepage from "./components/home-page.vue";
import footerbottom from "./components/footer-bottom.vue";
export default {
  name: "App",
  components: {
    navbarmenu,
    footerbottom,
    homepage,
  },
};
</script>

<style lang="scss">
</style>
