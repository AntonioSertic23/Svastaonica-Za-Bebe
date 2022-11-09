<script setup>
import { RouterLink } from "vue-router";

function CloseNavbar() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if ($(".navbar-toggler").is(":visible")) {
    $(".navbar-collapse").collapse("toggle");
  }
}
</script>

<template>
  <!-- fixed-top maknut -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="brand-icon"> <img src="favicon.ico" /> </span>Svaštaonica
        Za Bebače</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
        <div class="ms-auto navbar-language-div d-grid me-lg-3">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Jezik
              <!-- - {{ $i18n.locale.toUpperCase() }} -->
            </button>

            <a
              class="ms-3"
              style="font-family: Montserrat; color: black"
              href=""
              >+385 99 478 85 86</a
            >

            <!--             <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      $i18n.locale = 'hr';
                    }
                  "
                  ><img src="hr.png" class="me-3" /><span>Croatian</span></a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      $i18n.locale = 'en';
                    }
                  "
                  ><img src="en.png" class="me-3" /><span>English</span></a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="
                    () => {
                      $i18n.locale = 'de';
                    }
                  "
                  ><img src="de.png" class="me-3" /><span>German</span></a
                >
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 62px;
  font-family: bubbleboddyneue;
  background-color: #a2d2ff;
}

.navbar-brand {
  font-family: bubbleboddyneue;
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
  font-family: Montserrat;
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

/* kombinacija da itemi u navbaru ne prelaze preko loga */
@media (min-width: 991.98px) and (max-width: 1199.98px) {
  .navbar-nav {
    padding-left: 10% !important;
  }
}
</style>
