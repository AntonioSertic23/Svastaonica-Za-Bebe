<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container my-0 my-lg-5">
    <div class="row row-cols-1 row-cols-lg-3 mx-lg-5 px-5">
      <div class="item mt-0 mt-lg-5 order-2 order-lg-1">
        <RouterLink to="/singleitem/2">
          <div class="top-card">
            <div class="image-div p-4 pb-0">
              <img class="image" src="/assets/img/slinceki/12.jpg" alt="" />
              <div class="medal-div">
                <img class="medal" src="/assets/img/medal2.png" alt="" />
              </div>
            </div>
            <div id="parallelogram" class="shape1"></div>
          </div>
        </RouterLink>
        <h3 class="text-center mt-3">Slinček</h3>
      </div>

      <div class="item order-3 order-lg-2">
        <RouterLink to="/singleitem/1">
          <div class="top-card">
            <div class="image-div p-4 pb-0">
              <img class="image" src="/assets/img/kocke/23.jpg" alt="" />
              <div class="medal-div">
                <img class="medal" src="/assets/img/medal1.png" alt="" />
              </div>
            </div>
            <div id="parallelogram" class="shape2"></div>
          </div>
        </RouterLink>
        <h3 class="text-center mt-3 middle-text">Didaktička Kocka</h3>
      </div>

      <div class="item mt-0 mt-lg-5 order-1 order-lg-3">
        <RouterLink to="/singleitem/3">
          <div class="top-card">
            <div class="image-div p-4 pb-0">
              <img class="image" src="/assets/img/vezice/10.jpg" alt="" />
              <div class="medal-div">
                <img class="medal" src="/assets/img/medal3.png" alt="" />
              </div>
            </div>
            <div id="parallelogram" class="shape3"></div>
          </div>
        </RouterLink>
        <h3 class="text-center mt-3">Silikonska vezica</h3>
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

.image-div {
  height: 280px;
}

.image {
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
.image:hover {
  cursor: pointer;
  top: 0;
}

.medal-div {
  position: absolute;
  z-index: 1;
  top: -5px;
  right: 20px;
}
.medal {
  width: 80px;
  height: 80px;
  transition: transform 0.5s;
}
.medal:hover {
  transform: scale(1.2);
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

  .image-div {
    height: auto;
  }

  .image {
    position: relative;
    width: 100%;
    height: 230px;
    top: 5px;
  }

  .medal-div {
    top: 5px;
    right: 0;
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

@media (min-width: 992px) {
  .item {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
