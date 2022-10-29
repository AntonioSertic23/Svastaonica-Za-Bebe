<script setup>
import PageTitle from "../components/ui/PageTitle.vue";
</script>

<template>
  <section class="container contact-section">
    <PageTitle pageTitle="Kontakt" />

    <div class="col-lg-8 col-xxl-6 p-4 py-0 mx-auto">
      <div class="contact-information px-md-4 mt-5 mb-4">
        <div class="my-5 text-center">
          <a class="call-btn btn mb-0 mx-auto w-auto" href="tel:0919375976"
            ><i class="fa fa-phone me-2"></i>
            0919375976
          </a>
        </div>

        <div class="social-media my-5 text-center">
          <a href="#" class="m-2">
            <img src="../assets/img/facebook-messenger.png" />
          </a>
          <a href="#" class="m-2">
            <img src="../assets/img/whatsapp.png" />
          </a>
          <a href="#" class="m-2">
            <img src="../assets/img/facebook.png" />
          </a>
          <a href="#" class="m-2">
            <img src="../assets/img/instagram.png" />
          </a>
          <a href="#" class="m-2">
            <img src="../assets/img/viber.png" />
          </a>
          <a href="#" class="m-2">
            <img src="../assets/img/google.png" />
          </a>
        </div>

        <div
          class="more-information mt-5 d-flex align-items-center flex-column"
        >
          <p><span class="fw-bold me-2">MJESTO:</span>Našice</p>
          <p><span class="fw-bold me-2">TEL:</span>091/9375976</p>
          <p>
            <span class="fw-bold me-2">EMAIL:</span>svastaonicazabebe@gmail.com
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  font-size: 20px;
}

@media (max-width: 767.98px) {
  .contact-section {
    font-size: 20px;
  }
}

.call-btn {
  font-size: 25px !important;
  background-color: #f977aa !important;
  box-shadow: 0 0.25rem 1rem 0 grey;
}

.social-media img {
  width: 40px;
  height: 40px;
}
</style>
