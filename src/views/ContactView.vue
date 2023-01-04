<script setup>
import PageTitle from "../components/ui/PageTitle.vue";
</script>

<template>
  <section class="contact-section py-4">
    <div class="container">
      <div class="row text-center">
        <p class="mb-5 menu-title">Kontakt</p>
      </div>

      <div class="col-8 p-4 py-0 mx-auto">
        <div class="contact-information px-md-4 mb-4">
          <div class="mb-5 text-center">
            <p class="mb-5" style="font-size: 25px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              facilis tempora porro, suscipit ducimus delectus quaerat alias
              corporis a obcaecati, molestiae expedita dolorem nisi commodi
              maxime nulla exercitationem illo dolores.
            </p>

            <a
              class="call-btn btn mb-0 mx-auto w-auto py-3 px-4"
              href="tel:0919375976"
              ><i class="fa fa-phone me-2"></i>
              0919375976
            </a>
          </div>

          <div class="social-media py-5 text-center">
            <h1 class="getintouch mb-5">Get In Touch</h1>

            <a href="#" class="m-3">
              <img src="../assets/img/facebook-messenger.png" />
            </a>
            <a href="#" class="m-3">
              <img src="../assets/img/whatsapp.png" />
            </a>
            <a href="#" class="m-3">
              <img src="../assets/img/facebook.png" />
            </a>
            <a href="#" class="m-3">
              <img src="../assets/img/instagram.png" />
            </a>
            <a href="#" class="m-3">
              <img src="../assets/img/viber.png" />
            </a>
            <a href="#" class="m-3">
              <img src="../assets/img/google.png" />
            </a>
          </div>

          <div
            class="more-information py-5 d-flex align-items-center flex-column"
          >
            <p><span class="fw-bold me-2">MJESTO:</span>Našice</p>
            <p><span class="fw-bold me-2">TEL:</span>091/9375976</p>
            <p>
              <span class="fw-bold me-2">EMAIL:</span
              >svastaonicazabebe@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-title {
  font-size: 48.83px;
}

.contact-section {
  font-size: 20px;
}

@media (max-width: 767.98px) {
  .contact-section {
    font-size: 20px;
  }
}

.call-btn {
  color: #222;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgb(205, 180, 219);
  border-radius: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 20px;
  box-shadow: 0 0.25rem 1rem 0 grey;
}
.call-btn:hover {
  background-color: #a375bd;
}

.getintouch {
  font-size: 48.83px;
  font-weight: 300;
}

.social-media img {
  width: 50px;
  height: 50px;
}
</style>
