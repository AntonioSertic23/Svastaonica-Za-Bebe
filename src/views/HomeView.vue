<script setup>
import Jumbotron1 from "../components/layout/Jumbotron.vue";
import Jumbotron2 from "../components/layout/Jumbotron2.vue";
import Jumbotron3 from "../components/layout/Jumbotron3.vue";
import Jumbotron4 from "../components/layout/Jumbotron4.vue";
import Jumbotron5 from "../components/layout/Jumbotron5.vue";
import AboutUsShort from "../components/layout/AboutUsShort.vue";
import AboutUsShort2 from "../components/layout/AboutUsShort2.vue";
import Products1 from "../components/layout/Products.vue";
import Products1v2 from "../components/layout/Products-v2.vue";
import Products2 from "../components/layout/Products2.vue";
import Products3 from "../components/layout/Products3.vue";
import Badges from "../components/layout/Badges.vue";
</script>

<template>
  <Jumbotron3 />
  <!-- 
  <div class="w-75 mx-auto py-5">
    <h1 class="text-center mt-5">
      What I have got from my childhood aren't toys, but memories. And happy
      memories are better than any toy.
    </h1>
    <h1 class="text-end mb-5"><i>River Phoenix</i></h1>
  </div>
   -->
  <div class="w-75 mx-auto py-5">
    <h1 class="text-center mt-5" style="font-family: Poiret_One">
      What I have got from my childhood aren't toys, but memories. And happy
      memories are better than any toy.
    </h1>
  </div>

  <!-- 
  <hr />
  <Jumbotron1 />
  <hr />
  <Jumbotron2 />
  <hr />
  <Jumbotron4 />
  <hr />
  <Jumbotron5 />
  <hr />
  <AboutUsShort />
  <hr />
 -->
  <AboutUsShort2 />
  <hr />
  <Products1 />
  <hr />
  <Products1v2 />
  <hr />
  <Products2 />
  <hr />
  <Products3 />
  <hr />
  <Badges />
  <hr />
  <div class="container">
    <h1>Toys as art</h1>
    <h1>Toys for modern families</h1>
    <h1>Toys to spend time together</h1>

    <div class="w-75 mx-auto">
      <h1 class="text-center mt-5">
        We are kids. The only difference is the toy we have.
      </h1>
      <h1 class="text-end mb-5"><i>Pablo Larrain</i></h1>

      <h1 class="text-center mt-5">
        Give children toys that are powered by their imagination, not by
        batteries.
      </h1>
      <h1 class="text-end mb-5"><i>H. Jackson Brown, Jr.</i></h1>

      <h1 class="text-center mt-5">
        What I have got from my childhood aren't toys, but memories. And happy
        memories are better than any toy.
      </h1>
      <h1 class="text-end mb-5"><i>River Phoenix</i></h1>
    </div>
  </div>
</template>
