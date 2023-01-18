<script setup>
import sourceData from "@/data.json";
import VLazyImage from "v-lazy-image";
import ProductCard from "../components/ui/ProductCard.vue";

var data = sourceData.data;
</script>

<template>
  <section class="gallery-section py-4">
    <div class="container">
      <div class="row justify-content-center text-center">
        <p class="mb-5 menu-title">Gallery</p>
        <div class="col-8">
          <p class="gallery-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            facilis tempora porro, suscipit ducimus delectus quaerat alias
            corporis a obcaecati, molestiae expedita dolorem nisi commodi maxime
            nulla exercitationem illo dolores.
          </p>
        </div>
      </div>

      <!-- gallery cards -->
      <div class="row my-5 py-5">
        <div class="d-flex justify-content-center">
          <a class="mx-2 category-link" href="">U trendu</a>
          <a class="mx-2 category-link" href="">Novo u ponudi</a>
          <a class="mx-2 category-link" href="">Akcija</a>
          <a class="mx-2 category-link" href="">Paketi</a>
        </div>
      </div>
      <div class="section-cards row justify-content-evenly mb-5">
        <div class="container text-center">
          <div class="row row-cols-3 g-5">
            <div class="col" v-for="item in data" :key="item.id">
              <ProductCard :cardData="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-title {
  font-size: 48.83px;
}

.gallery-description {
  font-size: 25px;
}

.category-link {
  color: #222;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgb(205, 180, 219);
  border-radius: 15px;
  padding: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 4px 4px 4px lightgrey;
}
.category-link:hover {
  background-color: #a375bd;
}
</style>
