<script setup></script>

<template>
  <div class="container my-3 my-lg-4 py-5 px-3 px-lg-5 d-flex flex-column">
    <p class="title text-center mb-5">Proces narudžbe</p>

    <div class="row gy-5 mx-lg-5 mt-lg-0">
      <div class="item col-lg-4">
        <img class="" src="/assets/img/message.png" alt="" />
        <p class="mt-4 heading">Kontakt</p>
        <p class="mt-3 text-center px-3">
          Za sve informacije obratite nam se putem mreže po vašem izboru.
          Posjetite našu <br />
          <a class="contact-page-link" href="">kontakt stranicu</a>.
        </p>
      </div>

      <div class="arrow-section1">
        <img src="/assets/img/arrow.png" alt="" />
      </div>

      <div class="item col-lg-4">
        <img class="" src="/assets/img/handcraft.png" alt="" />
        <p class="mt-4 heading">Izrada</p>
        <p class="mt-3 text-center px-3">
          Vašu narudžbu izađujemo u najkraćem mogućem roku, te po izradi
          dobivate fotografiju narudžbe prije samog slanja.
        </p>
      </div>

      <div class="arrow-section2">
        <img src="/assets/img/arrow.png" alt="" />
      </div>

      <div class="item col-lg-4">
        <img class="" src="/assets/img/delivery.png" alt="" />
        <p class="mt-4 heading">Dostava</p>
        <p class="mt-3 text-center px-3">
          Vašu narudžbu dostavljamo putem:
          <span class="bolded-text">Hrvatske pošte</span>,
          <span class="bolded-text">Paketomata</span>,
          <span class="bolded-text">Tiska</span>, a moguće je i
          <span class="bolded-text">osobno preuzimanje</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 48.83px;
}

.row {
  position: relative;
  row-gap: 25px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 130px;
}

.item p {
  font-size: 20px;
}
.item .heading {
  font-size: 31.25px;
  font-weight: 500;
  margin-bottom: 0;
}

.arrow-section1,
.arrow-section2 {
  position: absolute;
  width: fit-content;
  height: fit-content;
}
.arrow-section1 {
  left: 27%;
  top: -30px;
  transform: rotate(180deg);
}
.arrow-section2 {
  right: 27%;
  top: 30px;
  transform: scaleX(-1);
}

.contact-page-link {
  text-decoration: none;
}

.bolded-text {
  font-weight: 600;
}

@media (max-width: 991.98px) {
  .title {
    font-size: 39.06px;
  }

  .arrow-section1 {
    left: -16px;
    top: 25%;
    transform: scaleX(-1) rotate(-90deg);
  }
  .arrow-section2 {
    right: -16px;
    top: 62%;
    transform: rotate(-90deg);
  }
}
</style>
