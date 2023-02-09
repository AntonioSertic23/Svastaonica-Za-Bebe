<script setup></script>

<template>
  <div class="container my-0 my-lg-5">
    <div class="row row-cols-1 row-cols-lg-3 px-5">
      <div class="item mt-0 mt-lg-5">
        <div class="top-card">
          <div class="image p-4 pb-0">
            <img class="" src="../../assets/img/products/1.jpg" alt="" />
          </div>
          <div id="parallelogram" class="shape1"></div>
        </div>
        <h3 class="text-center mt-3">Neki naslov</h3>
      </div>

      <div class="item">
        <div class="top-card">
          <div class="image p-4 pb-0">
            <img class="" src="../../assets/img/products/2.jpg" alt="" />
          </div>
          <div id="parallelogram" class="shape2"></div>
        </div>
        <h3 class="text-center mt-3 middle-text">Neki naslov</h3>
      </div>

      <div class="item mt-0 mt-lg-5">
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
.row {
  height: 420px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
}

img {
  width: 100%;
  z-index: 1;
  box-shadow: 3px 3px 5px grey;
  border-radius: 15px;
  height: 270px;
  object-fit: cover;
  position: absolute;
  width: 260px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 20px;
  transition: top ease 0.5s;
}
img:hover {
  cursor: pointer;
  top: 0;
}

#parallelogram {
  width: 100%;
  height: 50px;
  background-color: #cdb4db;
  border-radius: 15px;
  margin-top: -20px;
  box-shadow: 3px 3px 5px grey;
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

.middle-text {
  margin-bottom: 56px;
}

@media (max-width: 991.98px) {
  .row {
    height: auto;
  }

  img {
    position: relative;
    width: 100%;
    height: 230px;
    top: 5px;
  }

  .shape1 {
    transform: skew(0deg);
  }
  .shape3 {
    transform: skew(0deg);
  }

  .middle-text {
    margin-bottom: 0.5rem;
  }
}
</style>
