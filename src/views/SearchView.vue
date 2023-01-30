<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";
import ProductCard from "../components/ui/ProductCard.vue";
import SearchBar from "../components/ui/SearchBar.vue";

var data = ref(sourceData.data);

const route = useRoute();
data.value = sourceData.data.filter(function (el) {
  return el.name.includes(route.params.search);
});

function FindData(text) {
  data.value = sourceData.data.filter(function (el) {
    console.log(el.name.toLowerCase());
    console.log(text.value.toLowerCase());
    if (el.name.toLowerCase().includes(text.value.toLowerCase())) {
      return el;
    }
  });
}
</script>

<template>
  <section class="container d-flex flex-column align-items-center my-5">
    <div class="searchbar-div mb-5">
      <SearchBar @find-data="FindData" :isForNavbar="false" />
    </div>

    <div class="section-cards row justify-content-evenly my-5">
      <div class="container text-center">
        <div class="row row-cols-3 g-5">
          <div class="col" v-for="item in data" :key="item.id">
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
</style>
