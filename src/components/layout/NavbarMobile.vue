<script setup>
import { RouterLink } from "vue-router";
import SearchBar from "../ui/SearchBar.vue";

// defining emits so we can call them from this script tags
const emit = defineEmits(["closeMobileNavbar"]);

// if link in MOBILE navbar is pressed we emit
function closeNavbar() {
  emit("closeMobileNavbar");
}
</script>

<template>
  <div class="navbar-nav">
    <div class="searchbar-mobile-div">
      <SearchBar @find-data="closeNavbar()" :isForNavbar="true" />
    </div>

    <div class="links-div text-center w-100 px-5">
      <RouterLink class="nav-link" @click="closeNavbar()" to="/"
        >Početna</RouterLink
      >
      <hr />
      <RouterLink class="nav-link" @click="closeNavbar()" to="/gallery"
        >Galerija</RouterLink
      >
      <hr />
      <RouterLink class="nav-link" @click="closeNavbar()" to="/aboutus"
        >O nama</RouterLink
      >
      <hr />
      <RouterLink class="nav-link" @click="closeNavbar()" to="/contact"
        >Kontakt</RouterLink
      >
    </div>

    <div></div>

    <div class="icons-div">
      <div class="row justify-content-center">
        <div class="col-3 icon-column">
          <a href="#" class="m-2">
            <img src="/assets/img/sm-facebook-messenger.png" />
          </a>
          <a href="#" class="m-2">
            <img src="/assets/img/sm-whatsapp.png" />
          </a>
        </div>

        <div class="col-3 icon-column">
          <a href="#" class="m-2">
            <img src="/assets/img/sm-facebook.png" />
          </a>
          <a href="#" class="m-2">
            <img src="/assets/img/sm-instagram.png" />
          </a>
        </div>

        <div class="col-3 icon-column">
          <a href="#" class="m-2">
            <img src="/assets/img/sm-viber.png" />
          </a>
          <a href="#" class="m-2">
            <img src="/assets/img/sm-google.png" />
          </a>
        </div>
      </div>

      <RouterLink class="nav-link mt-3" to="">+385 99 478 85 86</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.navbar-nav {
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  align-items: center;
  font-family: Poiret_One;
  position: relative;
}

.searchbar-mobile-div {
  position: absolute;
  top: 30px;
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

.links-div {
  animation: fadein 1.2s;
}

.icons-div {
  position: absolute;
  bottom: 0;
  animation: fadein 1.2s;
}

.icons-div img {
  width: 40px;
  height: 40px;
}

.icon-column {
  align-items: center;
  display: flex;
  flex-direction: column;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
