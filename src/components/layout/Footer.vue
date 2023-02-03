<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="">
    <footer class="text-center">
      <div class="container">
        <section>
          <div class="row text-center d-flex justify-content-center pt-5">
            <div class="col-md-2">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/">Početna</RouterLink>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/gallery">Galerija</RouterLink>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/aboutus">O nama</RouterLink>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase">
                <RouterLink class="nav-link" to="/contact">Kontakt</RouterLink>
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
          <a href="#">
            <img src="../../assets/img/social-media/facebook-messenger.png" />
          </a>
          <a href="#">
            <img src="../../assets/img/social-media/whatsapp.png" />
          </a>
          <a href="#">
            <img src="../../assets/img/social-media/facebook.png" />
          </a>
          <a href="#">
            <img src="../../assets/img/social-media/instagram.png" />
          </a>
          <a href="#">
            <img src="../../assets/img/social-media/viber.png" />
          </a>
          <a href="#">
            <img src="../../assets/img/social-media/google.png" />
          </a>
        </section>

        <p class="my-4 text-center madeineu">Made in EU</p>
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
  margin-left: 1rem;
  margin-right: 1rem;
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
