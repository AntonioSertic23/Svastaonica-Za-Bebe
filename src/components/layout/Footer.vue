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
  <div class="">
    <footer class="text-center" style="background-color: #cdb4db">
      <div class="container">
        <section>
          <div class="row text-center d-flex justify-content-center pt-5">
            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <RouterLink class="nav-link" @click="CloseNavbar()" to="/"
                  >Početna</RouterLink
                >
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <RouterLink
                  class="nav-link"
                  @click="CloseNavbar()"
                  to="/gallery"
                  >Galerija</RouterLink
                >
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <RouterLink
                  class="nav-link"
                  @click="CloseNavbar()"
                  to="/aboutus"
                  >O nama</RouterLink
                >
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase font-weight-bold">
                <RouterLink
                  class="nav-link"
                  @click="CloseNavbar()"
                  to="/contact"
                  >Kontakt</RouterLink
                >
              </h6>
            </div>
          </div>
        </section>

        <hr class="mt-4 mb-5" />

        <section class="mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <p class="footer-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>

        <section class="text-center mb-5 social-media">
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
        </section>
      </div>

      <div
        class="text-center p-3 footer-copyright-text"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2020 Copyright: Svaštaonica za Bebe
      </div>
    </footer>
  </div>
</template>

<style scoped>
.social-media img {
  width: 40px;
  height: 40px;
}

.nav-link {
  color: black;
  font-size: 20px;
}

.footer-text {
  font-size: 20px;
}

.footer-copyright-text {
  font-size: 16px;
}
</style>
