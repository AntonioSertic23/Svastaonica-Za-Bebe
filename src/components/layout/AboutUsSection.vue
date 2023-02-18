<script setup></script>

<template>
  <div class="container py-5 px-3 px-lg-5">
    <p class="title text-center mb-5">Proces narudžbe</p>

    <div class="row gy-5 mx-lg-5">
      <div class="item col-lg-4">
        <img class="" src="/assets/img/message.png" alt="" />
        <p class="mt-4 heading">Kontakt</p>
        <p class="mt-3 text-center px-3">
          Za sve informacije obratite nam se putem mreže po vašem izboru.
          Posjetite našu <a href="">kontakt stranicu</a>.
        </p>
      </div>

      <div class="item col-lg-4">
        <img class="" src="/assets/img/handcraft.png" alt="" />
        <p class="mt-4 heading">Izrada</p>
        <p class="mt-3 text-center px-3">
          Vašu narudžbu izađujemo u najkraćem mogućem roku, te po izradi
          dobivate fotografiju narudžbe prije samog slanja.
        </p>
      </div>

      <div class="item col-lg-4">
        <img class="" src="/assets/img/delivery.png" alt="" />
        <p class="mt-4 heading">Dostava</p>
        <p class="mt-3 text-center px-3">
          Vašu narudžbu dostavljamo putem: <b>Hrvatske pošte</b>,
          <b>Paketomata</b>, <b>Tiska</b>, a moguće je i
          <b>osobno preuzimanje</b>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 48.83px;
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

@media (max-width: 991.98px) {
  .title {
    font-size: 39.06px;
  }
}
</style>
