<script setup>
import Navbar from "./components/layout/Navbar.vue";
</script>

<template>
  <Navbar />

  <div class="body-div">
    <RouterView />
  </div>
</template>

<style scoped>
.body-div {
  margin-top: 75.5px;
}

@media (max-width: 992px) {
  .body-div {
    margin-top: 62px;
  }
}
</style>
