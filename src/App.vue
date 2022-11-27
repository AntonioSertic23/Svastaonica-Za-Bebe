<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import NavbarMobile from "./components/layout/NavbarMobile.vue";
import ScrollToTop from "./components/ui/ScrollToTop.vue";
import { ref } from "vue";

var isNavbarOpen = ref(false);

function updateNavbar() {
  // switch
  isNavbarOpen.value = !isNavbarOpen.value;

  // lock/unlock scrolling
  if (!isNavbarOpen.value) {
    $("body").removeClass("lock-scroll");
  } else {
    $("body").addClass("lock-scroll");
  }

  // show/hide scrolltoTop
  if (!isNavbarOpen.value && $(window).scrollTop() != 0) {
    $("#progress-wrap").addClass("active-progress");
  } else {
    $("#progress-wrap").removeClass("active-progress");
  }
}
</script>

<template>
  <Navbar @update-navbar="updateNavbar" />

  <div class="body-div">
    <RouterView />
  </div>

  <ScrollToTop />

  <Footer />
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
