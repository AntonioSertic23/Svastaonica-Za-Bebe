<script setup>
import Hero from "../components/layout/HeroSection.vue";
import Slider from "../components/ui/Slider.vue";
import TopThreeProducts from "../components/layout/TopThreeProductsSection.vue";
import PreviewProducts from "../components/layout/PreviewProductsSection.vue";
import AboutUs from "../components/layout/AboutUsSection.vue";
</script>

<template>
  <div class="d-flex flex-column">
    <p class="main-title text-center mt-4 mb-5">Svaštaonica Za Bebe</p>

    <Hero />

    <div class="container slider py-5">
      <Slider />
    </div>

    <div class="container mb-5">
      <h1 class="text-center mt-5" style="font-family: Poiret_One">
        Ono što dobijemo od djetinjstva nisu igračke, već uspomene. A sretne
        uspomene bolje su od bilo koje igračke.
      </h1>
    </div>

    <TopThreeProducts />

    <div class="container mb-5">
      <h1 class="text-center mt-5" style="font-family: Poiret_One">
        Darujte djeci igračke koje pokreće njihova mašta, a ne baterije.
      </h1>
    </div>

    <PreviewProducts />

    <AboutUs />
  </div>
</template>

<style scoped>
.main-title {
  font-size: 76.28px;
  font-family: "Montserrat";
  font-weight: 300;
}

.slider {
  display: flex;
  justify-content: center;
}
</style>
