<script setup></script>

<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="left-side col d-flex justify-content-end">
          <div class="left-side-div w-75">
            <h1>Naslov neki</h1>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              at tempore atque repudiandae minus ea ipsum odit sequi veritatis
              facere.
            </p>
          </div>
        </div>

        <div class="middle-side col d-flex justify-content-center">
          <div class="middle-side-div">
            <img class="image1" src="../../assets/img/67661.jpg" alt="" />
            <img class="image2" src="../../assets/img/5.jpg" alt="" />
            <img class="image3" src="../../assets/img/67661.jpg" alt="" />
          </div>
        </div>

        <div
          class="right-side col d-flex justify-content-center align-items-end"
        >
          <div class="right-side-div">
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              at tempore atque repudiandae minus ea ipsum odit sequi veritatis
              facere.
            </p>
            <button class="btn btn-primary btn-lg">Nesto</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 450px;
}
.row {
  height: 330px;
}

.middle-side-div {
  position: relative;
}

.image1 {
  height: 200px;
  position: absolute;
  left: -130px;
  bottom: -50px;
}
.image2 {
  height: 300px;
}
.image3 {
  height: 130px;
  position: absolute;
  right: -75px;
  top: 20px;
}

.image1,
.image2,
.image3 {
  border-radius: 15px;
}
</style>
