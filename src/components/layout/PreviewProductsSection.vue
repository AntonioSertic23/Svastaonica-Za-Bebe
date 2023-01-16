<script setup></script>

<template>
  <div class="container py-5 px-5">
    <div class="row main-row px-5">
      <div class="col h-100">
        <div class="item-big">
          <img src="../../assets/img/products/1.jpg" alt="" />
          <div class="mask">
            <p class="ms-3 mb-3">Naziv proizvoda</p>
          </div>
        </div>
      </div>

      <div class="col subrow h-100">
        <div class="row">
          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/products/2.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>

          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/products/3.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/products/4.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>

          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/products/6.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a class="category-link mt-5 px-4" href="">Pogledaj sve</a>
    </div>
  </div>
</template>

<style scoped>
.main-row {
  height: 550px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
img:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.col-6 img {
  height: 263px;
}

.item-big {
  width: 100%;
  height: 100%;
}

.item,
.item-big {
  position: relative;
}

p {
  position: absolute;
  font-size: 20px;
  bottom: 0;
}

.item-big p {
  font-size: 42px;
}

.subrow {
  display: grid;
  gap: 24px;
}

.item-small {
  position: relative;
}

.item-big,
.item-small {
  border-radius: 15px;
  overflow: hidden;
}

.btn {
  background-color: #a2d2ff;
}

.category-link {
  display: inline-block;
  color: #222;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgb(205, 180, 219);
  border-radius: 15px;
  padding: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
}
.category-link:hover {
  background-color: #a375bd;
}
</style>
