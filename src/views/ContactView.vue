<script setup></script>

<template>
  <section class="contact-section py-4">
    <div class="container">
      <div class="row text-center">
        <p class="mb-5 menu-title">Kontakt</p>
      </div>

      <div class="col-8 p-4 py-0 mx-auto">
        <div class="contact-information px-md-4 mb-4">
          <div class="mb-5 text-center">
            <p class="contact-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              facilis tempora porro, suscipit ducimus delectus quaerat alias
              corporis a obcaecati, molestiae expedita dolorem nisi commodi
              maxime nulla exercitationem illo dolores.
            </p>
          </div>

          <div class="social-media py-5 mb-5 text-center">
            <a href="#" class="m-4">
              <img src="../assets/img/social-media/facebook-messenger.png" />
            </a>
            <a href="#" class="m-4">
              <img src="../assets/img/social-media/whatsapp.png" />
            </a>
            <a href="#" class="m-4">
              <img src="../assets/img/social-media/facebook.png" />
            </a>
            <a href="#" class="m-4">
              <img src="../assets/img/social-media/instagram.png" />
            </a>
            <a href="#" class="m-4">
              <img src="../assets/img/social-media/viber.png" />
            </a>
            <a href="#" class="m-4">
              <img src="../assets/img/social-media/google.png" />
            </a>
          </div>

          <a class="call-btn btn mb-5 mx-auto py-3 px-4" href="tel:0919375976"
            ><i class="fa fa-phone me-2"></i>
            0919375976
          </a>

          <div class="aboutus-cards-div row mt-4 py-5">
            <div class="col-4">
              <img src="../assets/img/house.png" alt="" />
              <h6 class="naslov">Mjesto</h6>
              <p class="info">Našice, Hrvatska</p>
            </div>

            <div class="col-4">
              <img src="../assets/img/call.png" alt="" />
              <h6 class="naslov">Telefon</h6>
              <p class="info">+091/091091</p>
            </div>

            <div class="col-4">
              <img src="../assets/img/email.png" alt="" />
              <h6 class="naslov">Email</h6>
              <p class="info">john.doe@gmail.com</p>
            </div>
          </div>
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

.menu-title {
  font-size: 48.83px;
}

.contact-information {
  display: flex;
  flex-direction: column;
}

.contact-description {
  font-size: 25px;
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
  box-shadow: -2px 2px 8px grey;
}
.call-btn:hover {
  background-color: #a375bd;
}

.aboutus-cards-div .col-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aboutus-cards-div img {
  width: 128px;
}

.aboutus-cards-div .naslov {
  margin-bottom: 0.5rem !important;
  margin-top: 2rem !important;
  font-size: 31.25px;
}

.social-media img {
  width: 64px;
  transition: transform 0.5s;
}

.social-media img:hover {
  transform: scale(1.4);
}
</style>
