<script setup>
import sourceData from "@/data.json";
import { useRoute, RouterLink } from "vue-router";
import VLazyImage from "v-lazy-image";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";

const route = useRoute();
const paramId = parseInt(route.params.id);

var data = ref(sourceData.data.find((d) => d.id === paramId));

function GetSimilarImagePath(id) {
  var item = sourceData.data.find((d) => d.id === id);
  return item.thumbnail;
}

function GetSimilarItemName(id) {
  var item = sourceData.data.find((d) => d.id === id);
  return item.name;
}

var currentImageToOpen = ref("");
function ChangeCurrentImageToOpen(path) {
  this.currentImageToOpen = path;
}

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

            <div class="keywords-div my-5">
              <div class="row">
                <div class="col" v-for="word in data.keywords" :key="word.id">
                  <v-lazy-image class="d-block" v-bind:src="word.icon" />
                  <p class="mt-3">{{ word.text }}</p>
                </div>
              </div>
            </div>

            <!-- <div class="sizes-div">
              <p>Dostupne veličine:</p>
              <ul>
                <li v-for="size in data.sizes" :key="size.id">{{ size }}</li>
              </ul>
            </div> -->

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

              <div class="my-5 row">
                <div class="col image-div">
                  <img src="/src/assets/img/profile_picture.jpg" alt="" />
                </div>
                <div class="col">
                  <p class="name mb-0">Netko</p>
                  <p class="review">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                    consectetur.
                  </p>
                </div>
              </div>

              <div class="my-5 row">
                <div class="col image-div">
                  <img src="/src/assets/img/profile_picture.jpg" alt="" />
                </div>
                <div class="col">
                  <p class="name mb-0">Netko Nekić</p>
                  <p class="review">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore amet dicta harum!
                  </p>
                </div>
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
                    <v-lazy-image
                      class="d-block"
                      v-bind:src="image.path"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      @click="ChangeCurrentImageToOpen(image.path)"
                    />
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

      <div class="row similar-items-div mt-5">
        <div
          class="col-2 similar-item p-0"
          v-for="item in data.similarItems"
          :key="item.id"
        >
          <RouterLink :to="'/singleitem/' + item">
            <v-lazy-image
              class="d-block product-image"
              v-bind:src="GetSimilarImagePath(item)"
            />

            <div class="mask">
              <img src="/src/assets/img/share2.png" alt="" />
            </div>
            <div class="similar-item-name">
              <p class="ms-3 mb-3">{{ GetSimilarItemName(item) }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <div class="modal-body p-0">
          <v-lazy-image v-bind:src="currentImageToOpen" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviews-div .image-div {
  max-width: 88px;
}
.reviews-div img {
  width: 100%;
  border-radius: 50%;
}

.reviews-div .name {
  font-size: 25px;
  font-weight: 500;
}
.reviews-div .review {
  font-size: 20px;
}

.btn-close {
  position: absolute;
  z-index: 1;
  background-color: white;
  opacity: 1;
  padding: 1rem;
  border-radius: 15px;
  right: 20px;
  top: 20px;
}
.btn-close:hover {
  background-color: #aaa;
  filter: invert(1);
}

.modal-body img {
  width: 100%;
  max-height: 93vh;
}

.modal-content {
  border: none;
  border-radius: 15px;
  overflow: hidden;
}

.title {
  font-size: 39.06px;
}
.name {
  font-size: 31.25px;
}
.similar-items-div {
  justify-content: center;
  gap: 25px;
}
.similar-items-div .similar-item {
  background-color: rgb(205, 180, 219);
  height: 250px;
  border-radius: 15px;
}

.similar-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 4px 4px 4px lightgrey;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.similar-item:hover .product-image {
  filter: brightness(60%);
  transform: scale(1.2);
}

.similar-item:hover .mask {
  visibility: visible;
  opacity: 1;
}

.similar-item:hover .similar-item-name p {
  color: white;
}

.similar-item-name p {
  position: absolute;
  font-size: 20px;
  color: #222;
  bottom: 0;
}

.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: fit-content;
  height: fit-content;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.8s;
}
.mask img {
  filter: invert(100%);
  width: 64px;
}

.active {
  transition: transform 0.5s;
}
.active:hover {
  cursor: pointer;
  transform: scale(1.2);
}

/* for real */

.menu-title {
  font-size: 48.83px;
  text-align: center;
}

.item-info {
  font-size: 25px;
}

.keywords-div img {
  width: 128px;
}
.keywords-div .col {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.slider-div img {
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
