<script setup></script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="item col-3 mt-5">
        <div class="top-card">
          <div class="image p-4 pb-0">
            <img class="" src="../../assets/img/products/1.jpg" alt="" />
          </div>
          <div id="parallelogram" class="shape1"></div>
        </div>
        <h3 class="text-center mt-3">Neki naslov</h3>
      </div>

      <div class="item col-3">
        <div class="top-card">
          <div class="image p-4 pb-0">
            <img class="" src="../../assets/img/products/2.jpg" alt="" />
          </div>
          <div id="parallelogram" class="shape2"></div>
        </div>
        <h3 class="text-center mt-3">Neki naslov</h3>
      </div>

      <div class="item col-3 mt-5">
        <div class="top-card">
          <div class="image p-4 pb-0">
            <img class="" src="../../assets/img/products/3.jpg" alt="" />
          </div>
          <div id="parallelogram" class="shape3"></div>
        </div>
        <h3 class="text-center mt-3">Neki naslov</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
#parallelogram {
  width: 100%;
  height: 50px;
  background-color: #cdb4db;
  border-radius: 15px;
  margin-top: -20px;
  box-shadow: 3px 3px 5px grey;
}

img {
  width: 100%;
  z-index: 1;
  box-shadow: 3px 3px 5px grey;
  border-radius: 15px;
  height: 270px;
  object-fit: cover;
}

img,
#parallelogram {
  position: relative;
}

.shape1 {
  transform: skew(-20deg);
}
.shape2 {
  transform: skew(0deg);
}
.shape3 {
  transform: skew(20deg);
}
</style>
