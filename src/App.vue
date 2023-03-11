<script setup>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import ScrollToTop from "./components/ui/ScrollToTop.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

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

// postavljanje pozadine u odnosu na stranicu na kojoj se nalazimo
const route = useRoute();
watch(
  () => route.name,
  () => {
    const appElement = document.getElementById("app");
    appElement.className = "";
    if (route.name === "home") {
      $("#app").addClass("pozadina-pocetna");
    } else if (route.name === "gallery") {
      $("#app").addClass("pozadina-galerija");
    } else if (route.name === "aboutus") {
      $("#app").addClass("pozadina-onama");
    } else if (route.name === "contact") {
      $("#app").addClass("pozadina-kontakt");
    } else if (route.name === "singleitem") {
      $("#app").addClass("pozadina-singleitem");
    } else if (route.name === "pagenotfound") {
      $("#app").addClass("pozadina-notfound");
    } else if (route.name === "search") {
      $("#app").addClass("pozadina-pretraga");
    }
  }
);
</script>

<template>
  <Navbar @update-navbar="updateNavbar" />

  <div class="body-div">
    <RouterView :key="$route.fullPath" />
  </div>

  <ScrollToTop />

  <Footer />
</template>

<style scoped>
@media (max-width: 992px) {
  .body-div {
    margin-top: 88px;
  }
}
</style>
