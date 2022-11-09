<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <Navbar />

  <div class="body-div">
    <RouterView />
  </div>

  <Footer />
</template>

<style scoped>
@media (max-width: 992px) {
  .body-div {
    margin-top: 62px;
  }
}
</style>
