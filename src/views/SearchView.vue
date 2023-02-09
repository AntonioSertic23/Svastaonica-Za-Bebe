<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";
import ProductCard from "../components/ui/ProductCard.vue";
import SearchBar from "../components/ui/SearchBar.vue";

var data = ref(sourceData.data);

const route = useRoute();
data.value = sourceData.data.filter(function (el) {
  if (el.name.toLowerCase().includes(route.params.search.toLowerCase())) {
    return el;
  }
});

function FindData(text) {
  data.value = sourceData.data.filter(function (el) {
    if (el.name.toLowerCase().includes(text.value.toLowerCase())) {
      return el;
    }
  });
}
</script>

<template>
  <section class="container d-flex flex-column align-items-center mt-5">
    <div class="searchbar-div mb-5 mt-4 mt-lg-0 mx-2">
      <SearchBar @find-data="FindData" :isForNavbar="false" />
    </div>

    <div class="section-cards row justify-content-evenly my-5">
      <div class="container text-center">
        <div class="row row-cols-1 row-cols-lg-3 gy-5 g-lg-5">
          <div class="col px-4" v-for="item in data" :key="item.id">
            <ProductCard :cardData="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.searchbar-div {
  width: 500px;
}

@media (max-width: 991.98px) {
  .searchbar-div {
    width: auto;
  }
}
</style>
