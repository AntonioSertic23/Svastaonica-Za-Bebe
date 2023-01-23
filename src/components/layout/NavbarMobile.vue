<script setup>
import { RouterLink } from "vue-router";

// defining emits so we can call them from this script tags
const emit = defineEmits(["closeMobileNavbar"]);

// if link in MOBILE navbar is pressed we emit
function closeNavbar() {
  emit("closeMobileNavbar");
}
</script>

<template>
  <div class="navbar-nav">
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

      <RouterLink class="nav-link mt-3" to="">+385 99 478 85 86</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.navbar-nav {
  height: calc(100vh - 95.5px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Poiret_One;
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
  width: 100%;
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
