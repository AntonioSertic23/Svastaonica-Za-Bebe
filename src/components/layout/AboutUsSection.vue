<script setup></script>

<template>
  <div class="container py-5 px-3 px-lg-5">
    <p class="title text-center mb-5">Proces narudžbe</p>

    <div class="row gy-5 mx-lg-5">
      <div class="item col-lg-4">
        <img class="" src="/assets/img/message.png" alt="" />
        <p class="mt-4 heading">Message</p>
        <p class="mt-3 text-center px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div class="item col-lg-4">
        <img class="" src="/assets/img/handcraft.png" alt="" />
        <p class="mt-4 heading">Crafting</p>
        <p class="mt-3 text-center px-3">
          Lorem ipsum dolor, sit amet enim explicabo asperiores exercitationem
          rerum.
        </p>
      </div>

      <div class="item col-lg-4">
        <img class="" src="/assets/img/delivery.png" alt="" />
        <p class="mt-4 heading">Delivery</p>
        <p class="mt-3 text-center px-3">
          Lorem ipsum consectetur adipisicing harum deserunt.
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
