<script setup></script>

<template>
  <div>
    <div class="container py-5">
      <div class="top-div w-50 mx-auto text-center">
        <h1>Naslov neki</h1>
        <p class="my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          sit! Aut odit doloribus blanditiis animi ratione itaque earum. Porro
          architecto, maxime consequuntur facere placeat adipisci, doloremque
          illum esse ipsum pariatur atque asperiores voluptatum eum dolore animi
          beatae ea a ratione.
        </p>
      </div>

      <div class="row mt-5">
        <div class="left-side col d-flex justify-content-end">
          <div class="left-side-div">
            <img class="image2" src="../../assets/img/5.jpg" alt="" />
          </div>
        </div>

        <div
          class="middle-side col-3 d-flex justify-content-center align-items-center"
        >
          <button class="btn btn-primary btn-lg">Nesto</button>
        </div>

        <div class="right-side col">
          <div class="right-side-div">
            <img class="image2" src="../../assets/img/5.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.middle-side-div {
  position: relative;
}

.image2 {
  height: 250px;
}

.image1,
.image2,
.image3 {
  border-radius: 15px;
}
</style>
