<script setup>
import { ref } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";

const emit = defineEmits(["findData"]);

const props = defineProps({
  isForNavbar: Boolean,
});

const route = useRoute();
var text = ref(route.params.search);

function Search() {
  if (text.value != "") {
    router.push({ path: "/search/" + text.value });
  } else {
    router.push({ path: "/search/ " });
  }
  emit("findData", text);
  if (props.isForNavbar) {
    text.value = "";
  }
}
</script>

<template>
  <div class="input-group search-div me-4">
    <input
      type="text"
      class="form-control"
      v-model="text"
      @keyup.enter="Search()"
      v-bind:class="isForNavbar ? '' : 'search-input-page'"
    />
    <button
      class="btn btn-outline-secondary px-3"
      type="button"
      id="button-addon2"
      @click="Search()"
    >
      <i
        class="fa fa-search"
        aria-hidden="true"
        v-bind:class="isForNavbar ? '' : 'search-btn-page'"
      ></i>
    </button>
  </div>
</template>

<style scoped>
.form-control:focus {
  border: none;
  z-index: 0 !important;
  box-shadow: none !important;
}

.btn-outline-secondary:focus {
  box-shadow: none !important;
}

.btn-outline-secondary {
  background-color: rgb(205, 180, 219);
  color: #222;
  border: none;
}
.btn-outline-secondary:hover {
  background-color: #a375bd;
  color: #222;
}
.search-div {
  box-shadow: 4px 4px 4px lightgrey;
  border-radius: 15px;
  overflow: hidden;
}

.search-div input {
  border: none;
}

.search-input-page {
  font-size: 20px;
  padding: 1rem;
}

.search-btn-page {
  font-size: 20px;
}
</style>
