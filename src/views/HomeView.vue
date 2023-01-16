<script setup>
import Hero from "../components/layout/HeroSection.vue";
import AboutUs from "../components/layout/AboutUsSection.vue";
import PreviewProducts from "../components/layout/PreviewProductsSection.vue";
import TopThreeProducts from "../components/layout/TopThreeProductsSection.vue";
</script>

<template>
  <Hero />

  <div class="w-75 mx-auto py-5">
    <h1 class="text-center mt-5" style="font-family: Poiret_One">
      What I have got from my childhood aren't toys, but memories. And happy
      memories are better than any toy.
    </h1>
  </div>

  <TopThreeProducts />

  <PreviewProducts />

  <AboutUs />
</template>
