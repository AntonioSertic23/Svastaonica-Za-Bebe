<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="">
    <footer class="text-center">
      <div class="container d-flex flex-column">
        <section>
          <div
            class="row row-cols-1 row-cols-lg-4 justify-content-center g-3 mt-4 col-lg-8 mx-auto"
          >
            <div class="">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/">Početna</RouterLink>
              </h6>
            </div>

            <div class="">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/gallery">Galerija</RouterLink>
              </h6>
            </div>

            <div class="">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/aboutus">O nama</RouterLink>
              </h6>
            </div>

            <div class="">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/contact">Kontakt</RouterLink>
              </h6>
            </div>
          </div>
        </section>

        <hr class="mt-4 mb-5" />

        <section class="mb-4">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8 px-4">
              <p class="footer-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>

        <section class="mb-4 social-media px-3 row g-4 justify-content-center">
          <a href="#">
            <img src="/assets/img/sm-facebook-messenger.png" />
          </a>
          <a href="#">
            <img src="/assets/img/sm-whatsapp.png" />
          </a>
          <a href="#">
            <img src="/assets/img/sm-facebook.png" />
          </a>
          <a href="#">
            <img src="/assets/img/sm-instagram.png" />
          </a>
          <a href="#">
            <img src="/assets/img/sm-viber.png" />
          </a>
          <a href="#">
            <img src="/assets/img/sm-google.png" />
          </a>
        </section>

        <p class="mb-4 text-center madeineu">Made in EU</p>
      </div>

      <div class="text-center p-3 footer-copyright-text">
        © 2020 Copyright: Svaštaonica za Bebe
      </div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  background-color: #cdb4db;
}

.nav-link {
  color: #222;
  font-size: 20px;
}
.nav-link:focus,
.nav-link:hover {
  color: black;
  font-weight: 600;
}

.footer-text {
  font-size: 20px;
}

.social-media a {
  width: fit-content;
}

.social-media img {
  width: 48px;
  height: 48px;
  transition: transform 0.5s;
}

.social-media img:hover {
  transform: scale(1.3);
}

.madeineu {
  font-size: 25px;
}

.footer-copyright-text {
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
