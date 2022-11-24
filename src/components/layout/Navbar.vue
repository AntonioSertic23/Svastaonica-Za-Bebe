<script setup>
import { RouterLink } from "vue-router";
import NavbarMobile from "./NavbarMobile.vue";

function CloseNavbar() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if ($(".navbar-toggler").is(":visible")) {
    $(".navbar-collapse").collapse("toggle");
  }
}
</script>

<template>
  <!-- fixed-top maknut -->
  <nav class="navbar navbar-expand-lg navbar-light p-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Svaštaonica Za Bebače</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="$emit('openCloseNavbar')"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <NavbarMobile />
        <!-- 
        <div class="navbar-nav mx-auto">
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/"
            >Početna</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/gallery"
            >Galerija</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/aboutus"
            >O nama</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/contact"
            >Kontakt</RouterLink
          >
          <RouterLink class="nav-link" @click="CloseNavbar()" to="/fonts"
            >Fonts</RouterLink
          >
        </div>
        <div class="ms-auto navbar-language-div d-grid me-lg-3 pe-4">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Jezik
            </button>

            <a
              class="ms-3"
              style="font-family: Montserrat; color: black"
              href=""
              >+385 99 478 85 86</a
            >
          </div>
        </div>
       -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 62px;
  font-family: Poiret_One;
  background-color: #eff7f6;
  position: relative;
}

.navbar-brand {
  font-family: Poiret_One;
  font-weight: bold;
  font-size: 25px;
  color: #222;
}
.brand-icon img {
  width: 40px;
}

.nav-link {
  display: flex !important;
  justify-content: center;
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 25px !important;
  color: #222;
}

.dropdown button {
  background-color: #ffafcc;
  text-transform: capitalize;
  font-family: Poiret_One;
  font-size: 25px;
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
  font-weight: bold;
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
