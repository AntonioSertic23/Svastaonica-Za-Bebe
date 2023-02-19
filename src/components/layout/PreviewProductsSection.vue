<script setup>
import sourceData from "@/data.json";
import { RouterLink } from "vue-router";
import VLazyImage from "v-lazy-image";
import { ref } from "vue";

var data = ref(sourceData.data.slice(0, 5));
</script>

<template>
  <div class="container px-4">
    <div class="row main-row px-0 px-lg-5">
      <div class="col h-100">
        <RouterLink v-bind:to="/singleitem/ + data[0].id">
          <div class="item-big">
            <VLazyImage class="product-image" v-bind:src="data[0].thumbnail" />
            <div class="mask">
              <img src="/assets/img/share.png" alt="" />
            </div>
            <div class="product-name">
              <p class="ms-3 mb-3">{{ data[0].name }}</p>
            </div>
          </div>
        </RouterLink>
      </div>

      <div class="col subrow h-100">
        <div class="row">
          <div class="item col-6">
            <RouterLink v-bind:to="/singleitem/ + data[1].id">
              <div class="item-small">
                <VLazyImage
                  class="product-image"
                  v-bind:src="data[1].thumbnail"
                />
                <div class="mask">
                  <img src="/assets/img/share.png" alt="" />
                </div>
                <div class="product-name">
                  <p class="ms-3 mb-3">{{ data[1].name }}</p>
                </div>
              </div>
            </RouterLink>
          </div>

          <div class="item col-6">
            <RouterLink v-bind:to="/singleitem/ + data[2].id">
              <div class="item-small">
                <VLazyImage
                  class="product-image"
                  v-bind:src="data[2].thumbnail"
                />
                <div class="mask">
                  <img src="/assets/img/share.png" alt="" />
                </div>
                <div class="product-name">
                  <p class="ms-3 mb-3">{{ data[2].name }}</p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="row">
          <div class="item col-6">
            <RouterLink v-bind:to="/singleitem/ + data[3].id">
              <div class="item-small">
                <VLazyImage
                  class="product-image"
                  v-bind:src="data[3].thumbnail"
                />
                <div class="mask">
                  <img src="/assets/img/share.png" alt="" />
                </div>
                <div class="product-name">
                  <p class="ms-3 mb-3">{{ data[3].name }}</p>
                </div>
              </div>
            </RouterLink>
          </div>

          <div class="item col-6">
            <RouterLink v-bind:to="/singleitem/ + data[4].id">
              <div class="item-small">
                <VLazyImage
                  class="product-image"
                  v-bind:src="data[4].thumbnail"
                />
                <div class="mask">
                  <img src="/assets/img/share.png" alt="" />
                </div>
                <div class="product-name">
                  <p class="ms-3 mb-3">{{ data[4].name }}</p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <RouterLink class="category-link mt-4 mt-lg-5 px-4" to="/gallery"
        >Pogledaj sve</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.main-row {
  height: 550px;
}

.subrow {
  display: grid;
  gap: 24px;
}

.item-big {
  width: 100%;
  height: 100%;
}

.item,
.item-big {
  position: relative;
}

.item-big:hover .product-image,
.item-small:hover .product-image {
  filter: brightness(60%);
  transform: scale(1.2);
}
.item-big:hover .product-name p,
.item-small:hover .product-name p {
  color: white;
}
.item-big:hover .mask,
.item-small:hover .mask {
  visibility: visible;
  opacity: 1;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.col-6 .product-image {
  height: 263px;
}

.product-name p {
  position: absolute;
  font-size: 20px;
  bottom: 0;
  color: white;
  text-shadow: 3px 3px 3px black;
}

.item-big p {
  font-size: 39.06px;
}

.item-small {
  position: relative;
}

.item-big,
.item-small {
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 4px 4px 4px lightgrey;
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
}

.item-big .mask img {
  width: 128px;
}
.item-small .mask img {
  width: 64px;
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
}
.category-link:hover {
  background-color: #a375bd;
}

@media (max-width: 991.98px) {
  .main-row {
    height: auto;
    flex-direction: column;
    row-gap: 24px;
  }

  .item-big {
    height: 250px;
  }

  .col-6 .product-image {
    height: 200px;
  }

  .item-big p {
    font-size: 31.25px;
  }

  .product-name p {
    color: white;
    text-shadow: 3px 3px 3px black;
  }
}
</style>
