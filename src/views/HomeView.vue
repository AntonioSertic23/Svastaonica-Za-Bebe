<script setup>
import Hero from "../components/layout/HeroSection.vue";
import AboutUs from "../components/layout/AboutUsSection.vue";
import PreviewProducts from "../components/layout/PreviewProductsSection.vue";
import TopThreeProducts from "../components/layout/TopThreeProductsSection.vue";
import Slider from "../components/ui/Slider.vue";
</script>

<template>
  <p class="main-title text-center mt-4 mb-5">Svaštaonica Za Bebe</p>

  <Hero />

  <div class="container slajder py-5">
    <Slider />
  </div>

  <div class="w-75 mx-auto pb-5">
    <h1 class="text-center mt-5" style="font-family: Poiret_One">
      What I have got from my childhood aren't toys, but memories. And happy
      memories are better than any toy.
    </h1>
  </div>

  <TopThreeProducts />

  <PreviewProducts />

  <AboutUs />
</template>

<style scoped>
.main-title {
  font-size: 76.28px;
  font-family: "Montserrat";
  font-weight: 300;
}

.slajder {
  display: flex;
  justify-content: center;
}
</style>
