<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import NavbarMobile from "./components/layout/NavbarMobile.vue";
import ScrollToTop from "./components/ui/ScrollToTop.vue";
import { ref } from "vue";

var isNavbarOpen = ref(false);

function openClose() {
  isNavbarOpen.value = !isNavbarOpen.value;
}
</script>

<template>
  <Navbar @open-close-navbar="openClose" />

  <div v-if="!isNavbarOpen" class="body-div">
    <RouterView />
  </div>

  <ScrollToTop />

  <Footer v-if="!isNavbarOpen" />

  <NavbarMobile @open-close-navbar="openClose" v-if="isNavbarOpen" />
</template>

<style scoped>
.body-div {
  background-color: #eff7f6;
}

@media (max-width: 992px) {
  .body-div {
    margin-top: 62px;
  }
}
</style>
