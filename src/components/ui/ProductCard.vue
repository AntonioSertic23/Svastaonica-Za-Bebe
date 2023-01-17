<script setup>
import { RouterLink } from "vue-router";
import VLazyImage from "v-lazy-image";

const props = defineProps({
  cardData: Object,
});

var item = props.cardData;
</script>

<template>
  <div class="image-div" v-if="item.badges.length == 1">
    <div class="image-div-background oneBadge"></div>
    <v-lazy-image
      v-bind:src="'/src/assets/img/badges/' + item.badges[0] + '.png'"
    />
  </div>

  <div class="image-div" v-if="item.badges.length > 1">
    <div class="image-div-background moreBadges"></div>
    <v-lazy-image
      style="margin-left: 28%"
      v-bind:src="'/src/assets/img/badges/' + item.badges[0] + '.png'"
    />
    <v-lazy-image
      style="margin-right: 28%"
      v-bind:src="'/src/assets/img/badges/' + item.badges[1] + '.png'"
    />
  </div>

  <RouterLink :to="'/singleitem/' + item.id" @click="scrollToTop()">
    <div class="product-image-div">
      <v-lazy-image class="thumbnail" v-bind:src="item.thumbnail" />

      <div class="mask">
        <img src="/src/assets/img/share2.png" alt="" />
      </div>
    </div>
  </RouterLink>

  <h1>{{ item.name }}</h1>
</template>

<style scoped>
.product-image-div {
  height: 400px;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 4px 4px 4px lightgrey;
}

.section-cards .image-div img {
  width: 70px;
  position: absolute;

  margin-top: -35px;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  z-index: 2;
  transition: transform 0.5s;
}
.image-div {
  position: relative;
}

.image-div img:hover {
  transform: scale(1.2);
}

.section-cards2 .image-div img {
  width: 64px;
  position: absolute;
  right: 0;
}
.section-cards2 .product-image-div img {
  width: 100%;
  border-radius: 15px;
}
.section-cards2 .product-image-div {
  height: auto;
  border-radius: 15px;
}
.section-cards2 .product-image-div .btn {
  font-size: 20px;
}

.badge {
  position: absolute;
  background-color: gray;
  left: 20px;
  top: 20px;
  border-radius: 0;
}

.coupon-div {
  border-radius: 30px !important;
}
.coupon-div img {
  border-radius: 30px;
}
.coupon-card {
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  position: absolute;
  border: 5px dashed white;
  top: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 30px;
}

.product-image-div {
  position: relative;
}

.product-image-div img,
.soldout-div .product-image {
  height: 100%;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
}

.image-div-background {
  position: absolute;
  background-color: #ede4f2;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-top: -50px;
  z-index: 1;
}
.oneBadge {
  width: 100px;
  border-radius: 50%;
  height: 100px;
}
.moreBadges {
  width: 55%;
  border-radius: 40%;
  height: 110px;
}

.thumbnail {
  transition: transform 0.5s;
}

.product-image-div:hover .mask {
  visibility: visible;
  opacity: 1;
}
.product-image-div:hover .thumbnail {
  filter: brightness(60%);
  transform: scale(1.2);
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
  width: 96px;
}

.col h1 {
  text-align: center;
  margin-top: 1rem;
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 1rem;
}
</style>
