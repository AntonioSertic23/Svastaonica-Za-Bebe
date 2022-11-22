<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar-nav">
    <div class="links-div text-center">
      <RouterLink class="nav-link" @click="$emit('openCloseNavbar')" to="/"
        >Početna</RouterLink
      >
      <RouterLink
        class="nav-link"
        @click="$emit('openCloseNavbar')"
        to="/gallery"
        >Galerija</RouterLink
      >
      <RouterLink
        class="nav-link"
        @click="$emit('openCloseNavbar')"
        to="/aboutus"
        >O nama</RouterLink
      >
      <RouterLink
        class="nav-link"
        @click="$emit('openCloseNavbar')"
        to="/contact"
        >Kontakt</RouterLink
      >
      <RouterLink class="nav-link" @click="$emit('openCloseNavbar')" to="/fonts"
        >Fonts</RouterLink
      >
      <button
        class="btn dropdown-toggle language-btn"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Jezik
      </button>
      <RouterLink class="nav-link" to="">+385 99 478 85 86</RouterLink>
    </div>

    <div></div>

    <div class="icons-div">
      <a href="#" class="m-2">
        <img src="../../assets/img/facebook-messenger.png" />
      </a>
      <a href="#" class="m-2">
        <img src="../../assets/img/whatsapp.png" />
      </a>
      <a href="#" class="m-2">
        <img src="../../assets/img/facebook.png" />
      </a>
      <a href="#" class="m-2">
        <img src="../../assets/img/instagram.png" />
      </a>
      <a href="#" class="m-2">
        <img src="../../assets/img/viber.png" />
      </a>
      <a href="#" class="m-2">
        <img src="../../assets/img/google.png" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.navbar-nav {
  margin-top: 95.5px;
  height: calc(100vh - 95.5px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Poiret_One;
  background-color: #eff7f6;
}

.nav-link {
  display: flex !important;
  justify-content: center;
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 25px !important;
  color: #222;
  margin-bottom: 1rem;
}

.language-btn {
  background-color: #ffafcc;
  text-transform: capitalize;
  font-family: Poiret_One;
  font-size: 25px;
}

.icons-div {
  position: absolute;
  bottom: 0;
  margin-bottom: 50px;
}

.icons-div img {
  width: 40px;
  height: 40px;
}
</style>
