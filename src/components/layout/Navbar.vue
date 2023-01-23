<script setup>
import { RouterLink } from "vue-router";
import NavbarMobile from "./NavbarMobile.vue";
import { ref } from "vue";

// defining emits so we can call them from this script tags
const emit = defineEmits(["updateNavbar"]);

var isMobile = ref(false);

// we see screen width end set which navbar to use (desktop or mobile)
if ($(window).width() < 992) {
  isMobile.value = true;
} else {
  isMobile.value = false;
}
// when screen is resized we check screen width again to set right navbar
$(window).on("resize", function () {
  if ($(window).width() < 992) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});

// if link in DESKTOP navbar is pressed we scroll to top smoothly
/* function closeDesktopNavbar() {
  window.scrollTo({ top: 0, behavior: "smooth" });
} */

// if MOBILE navbar button is pressed we emit to update navbar
function switchMobileNavbar() {
  emit("updateNavbar");
}

// if link in MOBILE navbar is pressed this is function that is called after emit
function closeMobileNavbar() {
  //window.scrollTo({ top: 0, behavior: "smooth" });
  emit("updateNavbar");
  if ($(".navbar-toggler").is(":visible")) {
    $(".navbar-collapse").collapse("toggle");
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light py-4 px-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Svaštaonica Za Bebe</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="switchMobileNavbar()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <NavbarMobile
          v-if="isMobile"
          @close-mobile-navbar="closeMobileNavbar"
        />

        <div v-if="!isMobile" class="navbar-nav mx-auto">
          <RouterLink class="nav-link" @click="closeDesktopNavbar()" to="/"
            >Početna</RouterLink
          >
          <RouterLink
            class="nav-link"
            @click="closeDesktopNavbar()"
            to="/gallery"
            >Galerija</RouterLink
          >
          <RouterLink
            class="nav-link"
            @click="closeDesktopNavbar()"
            to="/aboutus"
            >O nama</RouterLink
          >
          <RouterLink
            class="nav-link"
            @click="closeDesktopNavbar()"
            to="/contact"
            >Kontakt</RouterLink
          >
          <!-- <RouterLink class="nav-link" @click="closeDesktopNavbar()" to="/fonts"
            >Fonts</RouterLink
          > -->
        </div>
        <div
          v-if="!isMobile"
          class="ms-auto navbar-language-div d-flex me-lg-3 pe-4"
        >
          <div class="input-group search-div me-4">
            <input type="text" class="form-control" placeholder="" />
            <button
              class="btn btn-outline-secondary px-3"
              type="button"
              id="button-addon2"
            >
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 62px;
  position: relative;
}

.navbar-brand {
  font-weight: 600;
  font-size: 25px;
  color: #222;
}
.brand-icon img {
  width: 40px;
}

.navbar-nav {
  gap: 1rem;
}

.nav-link {
  display: flex !important;
  justify-content: center;
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 25px !important;
  color: #444 !important;
}

.dropdown button {
  background-color: #ffafcc;
  text-transform: capitalize;
  font-size: 20px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.dropdown-item img {
  height: 40px;
  width: 40px;
}

#dropdownMenuButton1 {
  font-weight: 600;
  border-radius: 15px;
  box-shadow: 4px 4px 4px lightgrey;
}

.form-control:focus {
  border: none;
  z-index: 0 !important;
  box-shadow: none !important;
}

.btn-outline-secondary:focus {
  box-shadow: none !important;
}

.btn-outline-secondary {
  background-color: rgb(205, 180, 219);
  color: #222;
  border: none;
}
.btn-outline-secondary:hover {
  background-color: #a375bd;
  color: #222;
}

.search-div {
  box-shadow: 4px 4px 4px lightgrey;
  border-radius: 15px;
  overflow: hidden;
}

.search-div input {
  border: none;
}

/* kad je mobile da bude pozadina roza */
@media (max-width: 992px) {
  .dropdown button {
    width: 100%;
    height: 54px;
    margin-top: 3px;
  }
  .dropdown ul {
    width: 100%;
    position: static;
  }

  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: #ede4f2;
  }
}

/* podigne lijevu i desnu stranu da bi ovo uzelo u sredini cijelu duzinu i onda postavi u sredinu */
@media (min-width: 992px) {
  .navbar-brand,
  .navbar-language-div {
    position: absolute;
  }

  .navbar-language-div {
    right: 0;
  }
}
</style>
