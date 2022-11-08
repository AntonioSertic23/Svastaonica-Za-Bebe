<script setup></script>

<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div
          class="left-side col d-flex align-items-center justify-content-end"
        >
          <div class="left-side-div w-75">
            <h1>Naslov neki..</h1>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              at tempore atque repudiandae minus ea ipsum odit sequi veritatis
              facere.
            </p>
            <button class="btn btn-primary btn-lg mt-3">Nesto</button>
          </div>
        </div>

        <div class="right-side col d-flex justify-content-center">
          <div class="right-side-div">
            <img class="image1" src="../../assets/img/5.jpg" alt="" />
          </div>
        </div>
      </div>

      <div class="bottom row justify-content-center mt-5">
        <div class="circle"></div>
        <div class="circle mx-2"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image1 {
  height: 300px;
}

.image1 {
  border-radius: 15px;
}

.circle {
  width: 25px;
  height: 25px;
  background-color: darkgrey;
  border-radius: 50%;
}
</style>
