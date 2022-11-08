<script setup></script>

<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div
          class="left-side col d-flex align-items-center justify-content-end"
        >
          <div class="left-side-div w-75">
            <h1>Naslov</h1>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              at tempore atque repudiandae minus ea ipsum odit sequi veritatis
              facere.
            </p>
            <button class="btn btn-primary btn-lg">Nesto</button>
          </div>
        </div>

        <div class="right-side col d-flex justify-content-center">
          <div class="right-side-div">
            <img class="image1" src="../../assets/img/5.jpg" alt="" />
            <img class="image2" src="../../assets/img/67661.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-side-div {
}

.right-side-div {
  position: relative;
}

.image1 {
  height: 150px;
  position: absolute;
  left: -75px;
  bottom: 40px;
}
.image2 {
  height: 300px;
}

.image1,
.image2 {
  border-radius: 15px;
}
</style>
