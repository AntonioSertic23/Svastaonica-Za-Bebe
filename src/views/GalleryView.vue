<script setup>
import { ref } from "vue";
import sourceData from "@/data.json";
import ProductCard from "../components/ui/ProductCard.vue";
import { onBeforeRouteUpdate } from "vue-router";

var data = ref(sourceData.data);
var comingSoonData = [];
var soldoutData = [];
data.value = setDefaultGallery();

// kad se ruta promjeni traba ocistiti sortiranje
onBeforeRouteUpdate(localStorage.removeItem("sortData"));

function setDefaultGallery() {
  comingSoonData = [];
  soldoutData = [];
  /* uklanjanje coming soon i soldout proizvoda kako bi se prikazali na kraju */
  var tempData = sourceData.data.filter(function (el) {
    if (el.comingSoon == true) {
      comingSoonData.push(el);
    } else if (el.soldout == true) {
      soldoutData.push(el);
    }
    return el.comingSoon == false || el.soldout == false;
  });

  /* sortiramo po id i onda okrenemo da prikazuje od najnovijih */
  tempData.sort(function (a, b) {
    return a.id - b.id;
  });
  tempData.reverse();

  return tempData;
}

/* SORTIRANJE PO KATEGORIJAMA */
/* klikom na kategoriju hocu da se iz sourceData filtriraju ti ajtemi sa tom kategorijom i dodaju u data */
var currentSort = ref(0);
var lsSortData = localStorage.getItem("sortData");

if (lsSortData != null) {
  currentSort.value = lsSortData;
  data = sourceData.data.filter(function (el) {
    return el.categories.includes(parseInt(currentSort.value));
  });
}

function sortData(x) {
  if (currentSort.value == x) {
    // ako je vrijendost ista znaci da se uklonilo sortiranje
    currentSort.value = 0;
    data.value = setDefaultGallery();
    localStorage.removeItem("sortData");
  } else {
    // ako je vrijendost razlicita znaci da se dodalo sortiranje
    currentSort.value = x;
    data.value = sourceData.data.filter(function (el) {
      return el.categories.includes(x);
    });
    data.value.reverse();
    localStorage.setItem("sortData", x);
  }
}
</script>

<template>
  <section class="gallery-section pt-4">
    <div class="container">
      <div class="row justify-content-center text-center">
        <p class="mb-5 menu-title">Gallery</p>
        <!--         <div class="description-div col col-lg-8 px-4">
          <p class="gallery-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            facilis tempora porro, suscipit ducimus delectus quaerat alias
            corporis a obcaecati, molestiae expedita dolorem nisi commodi maxime
            nulla exercitationem illo dolores.
          </p>
        </div> -->
      </div>

      <div class="row mb-5 pb-5 col-10 mx-auto">
        <div
          class="sort-div d-flex justify-content-center flex-wrap row-cols-1 row-cols-lg-5 text-center"
        >
          <a
            class="category-link"
            v-on:click="sortData(1)"
            v-bind:class="currentSort == 1 ? 'active' : 'notactive'"
            >U trendu</a
          >
          <a
            class="category-link"
            v-on:click="sortData(2)"
            v-bind:class="currentSort == 2 ? 'active' : 'notactive'"
            >Novo u ponudi</a
          >
          <a
            class="category-link"
            v-on:click="sortData(3)"
            v-bind:class="currentSort == 3 ? 'active' : 'notactive'"
            >Akcija</a
          >
          <a
            class="category-link"
            v-on:click="sortData(4)"
            v-bind:class="currentSort == 4 ? 'active' : 'notactive'"
            >Paketi</a
          >
        </div>
      </div>
      <div class="section-cards row justify-content-evenly mb-5">
        <div class="container text-center">
          <div class="row row-cols-1 row-cols-lg-3 gy-5 g-lg-5">
            <div class="col px-4" v-for="item in data" :key="item.id">
              <ProductCard :cardData="item" />
            </div>
            <template v-if="currentSort == 0">
              <div class="col px-4" v-for="item in soldoutData" :key="item.id">
                <ProductCard :cardData="item" />
              </div>
              <div
                class="col px-4"
                v-for="item in comingSoonData"
                :key="item.id"
              >
                <ProductCard :cardData="item" />
              </div>
            </template>
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

.description-div {
  position: relative;
}

.sort-div {
  gap: 24px;
}

.category-link {
  color: #222;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 15px;
  padding: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: 4px 4px 4px lightgrey;
}

.active {
  background-color: #a375bd;
}
.notactive {
  background-color: rgb(205, 180, 219);
}

@media (max-width: 991.98px) {
  .gallery-description {
    font-size: 20px;
  }
}

@media (min-width: 992px) {
  .category-link:hover {
    background-color: #a375bd;
    cursor: pointer;
  }
}
</style>
