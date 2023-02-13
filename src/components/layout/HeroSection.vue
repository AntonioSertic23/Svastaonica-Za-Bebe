<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <div class="container mb-5 mt-0 mt-lg-3 pt-0 pt-lg-3">
      <div class="row row-cols-1 row-cols-lg-3 px-4 px-lg-0">
        <div class="order-2 order-lg-1 left-side d-flex">
          <div class="left-side-div pe-0 pe-lg-5 mt-4 mt-lg-0">
            <h1>Dobrodošli na</h1>
            <p class="mt-2 mb-4 my-lg-4">
              sretno mjesto na internetu gdje se mogu pronaći razne igračke za
              bebe!
            </p>

            <RouterLink class="category-link mt-5 px-4" to="/gallery"
              >Galerija</RouterLink
            >
          </div>
        </div>

        <div
          class="order-1 order-lg-2 middle-side d-flex justify-content-center"
        >
          <div class="middle-side-div">
            <img class="image2" src="/public/logo.jpg" alt="" />
            <img class="image3" src="../../assets/img/bow.png" alt="" />
          </div>
        </div>

        <div
          class="order-3 order-lg-3 right-side d-flex justify-content-center align-items-top px-2"
        >
          <div class="right-side-div ps-0 ps-lg-5">
            <p class="text-center">
              "Svi smo djeca. Jedina razlika je igračka koju imamo."
            </p>
            <p class="text-center fst-italic fw-bold">Pablo Larrain</p>
          </div>
        </div>
      </div>

      <img class="gif" src="../../assets/img/gif.gif" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.right-side,
.left-side {
  position: relative;
}

.left-side-div h1 {
  font-size: 48.83px;
}

.left-side-div p,
.right-side-div p {
  font-size: 25px;
}

.category-link {
  display: inline-block;
  color: #222;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgb(205, 180, 219);
  border-radius: 15px;
  padding: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  position: absolute;
  bottom: 50px;
  box-shadow: -2px 2px 8px grey;
  width: fit-content;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.category-link:hover {
  background-color: #a375bd;
}

.middle-side-div {
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 5px 18px grey;
  width: 100%;
}

.image2 {
  width: 100%;
  height: 364px;
  object-fit: cover;
}
.image3 {
  height: 100px;
  position: absolute;
  right: -25px;
  top: 15px;
}

.image2,
.image3 {
  border-radius: 15px;
}

.gif {
  width: 192px;
  position: absolute;
  right: 100px;
  bottom: 0;
}

@media (max-width: 991.98px) {
  .image3 {
    height: 75px;
    right: -25px;
    top: 10px;
  }

  .left-side-div h1 {
    font-size: 31.25px;
  }
  .left-side-div p,
  .right-side-div p {
    font-size: 20px;
  }

  .category-link {
    position: relative;
  }

  .image2 {
    height: 210px;
  }

  .gif {
    display: none;
  }
}
</style>
