<script setup>
import sourceData from "@/data.json";
import { useRoute } from "vue-router";
import VLazyImage from "v-lazy-image";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";

const route = useRoute();
const paramId = parseInt(route.params.id);

var data = sourceData.data.find((d) => d.id === paramId);

document.body.scrollTop = document.documentElement.scrollTop = 0;

//carousel

var totalImages = ref(1);
var currentIndex = ref(1);

onMounted(() => {
  totalImages.value = $(".carousel-item").length;
});

function updateNumber() {
  currentIndex.value = $(".active").index() + 1;
}
</script>

<template>
  <section id="main-div" class="item-section py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 item-info">
          <div class="num"></div>
          <div class="col-9 m-auto">
            <p class="mb-5 menu-title">{{ data.name }}</p>
            <p class="item-description">
              {{ data.description }}
            </p>

            <div v-if="data.soldout" class="my-5">
              <h1>RASPRODANO</h1>
            </div>

            <div class="age-div my-5">
              <p>Za uzraste od:</p>
              <div class="age">{{ data.age }}</div>
            </div>

            <div class="sizes-div">
              <p>Dostupne veličine:</p>
              <ul>
                <li v-for="size in data.sizes" :key="size.id">{{ size }}</li>
              </ul>
            </div>

            <div class="my-5 p-4 ingredients">
              <p>Korišteni materijali:</p>
              <ul>
                <li v-for="material in data.materials" :key="material.id">
                  {{ material }}
                </li>
              </ul>
            </div>

            <div class="reviews-div">
              <p class="title">Recenzije</p>

              <div class="my-5">
                <p class="name">Netko</p>
                <p class="review">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>

              <div class="my-5">
                <p class="name">Netko 2</p>
                <p class="review">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore amet dicta harum!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="right-side col-6">
          <div class="slider-div col-8 m-auto">
            <div class="" style="position: relative">
              <button
                class="carousel-prev"
                type="button"
                data-bs-target="#singleItemCarousel"
                data-bs-slide="prev"
                v-on:click="updateNumber()"
              >
                <img src="../assets/img/left-chevron.png" alt="" />
                <span class="visually-hidden">Previous</span>
              </button>

              <div
                id="singleItemCarousel"
                class="carousel carousel-fade carousel-dark"
                data-bs-ride="carousel"
                data-bs-interval="false"
              >
                <div class="carousel-inner h-100">
                  <div
                    v-for="image in data.images"
                    :class="{ active: image.isActive }"
                    :key="image.id"
                    class="carousel-item"
                  >
                    <v-lazy-image class="d-block" v-bind:src="image.path" />
                  </div>
                </div>
              </div>

              <button
                class="carousel-next"
                type="button"
                data-bs-target="#singleItemCarousel"
                data-bs-slide="next"
                v-on:click="updateNumber()"
              >
                <img src="../assets/img/chevron.png" alt="" />
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <p class="carousel-numbers text-center mt-4">
              {{ currentIndex }}/{{ totalImages }}
            </p>
          </div>
        </div>
      </div>

      <div class="row demo mt-5">
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: 39.06px;
}
.name {
  font-size: 31.25px;
}
.demo {
  justify-content: center;
  gap: 25px;
}
.demo .col-2 {
  background-color: rgb(205, 180, 219);
  height: 200px;
  border-radius: 15px;
}

/* for real */

.menu-title {
  font-size: 48.83px;
  text-align: center;
}

.item-info {
  font-size: 25px;
}

.age-div .age {
  background-color: rgb(205, 180, 219);
  width: 75px;
  height: 75px;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sizes-div ul {
  list-style-type: none;
  display: flex;
  gap: 15px;
}
.sizes-div ul li {
  background-color: rgb(205, 180, 219);
  width: 70px;
  height: 70px;
  padding: 1rem;
  text-align: center;
  border-radius: 15px;
}

.ingredients {
  border: 2px dashed gray;
  border-radius: 15px;
}

/* right */

.carousel {
  height: 650px;
  box-shadow: 0px 5px 18px grey;
  border-radius: 15px;
  overflow: hidden;
}

.carousel-inner {
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-div {
  position: sticky;
  top: 100px;
}

.carousel-prev {
  left: -35px;
}

.carousel-next {
  right: -35px;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px;
  border: none;
  transition: transform 0.5s;
  background-color: #ffafcc;
  box-shadow: 0 0.25rem 1rem 0 grey;
}

.carousel-prev:hover,
.carousel-next:hover {
  background-color: #ff85b1;
  transform: scale(1.2);
}

.carousel-numbers {
  left: 0;
  right: 0;
  font-size: 48.83px;
}
</style>
