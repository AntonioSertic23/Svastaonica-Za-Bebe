<script setup></script>

<template>
  <div class="container py-5 px-5">
    <div class="row main-row px-5">
      <div class="col h-100">
        <div class="item-big">
          <img
            class="product-image"
            src="../../assets/img/products/1.jpg"
            alt=""
          />
          <div class="mask">
            <img src="../../assets/img/share2.png" alt="" />
          </div>
          <div class="product-name">
            <p class="ms-3 mb-3">Naziv proizvoda</p>
          </div>
        </div>
      </div>

      <div class="col subrow h-100">
        <div class="row">
          <div class="item col-6">
            <div class="item-small">
              <img
                class="product-image"
                src="../../assets/img/products/2.jpg"
                alt=""
              />
              <div class="mask">
                <img src="../../assets/img/share2.png" alt="" />
              </div>
              <div class="product-name">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>

          <div class="item col-6">
            <div class="item-small">
              <img
                class="product-image"
                src="../../assets/img/products/3.jpg"
                alt=""
              />
              <div class="mask">
                <img src="../../assets/img/share2.png" alt="" />
              </div>
              <div class="product-name">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="item col-6">
            <div class="item-small">
              <img
                class="product-image"
                src="../../assets/img/products/4.jpg"
                alt=""
              />
              <div class="mask">
                <img src="../../assets/img/share2.png" alt="" />
              </div>
              <div class="product-name">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>

          <div class="item col-6">
            <div class="item-small">
              <img
                class="product-image"
                src="../../assets/img/products/6.jpg"
                alt=""
              />
              <div class="mask">
                <img src="../../assets/img/share2.png" alt="" />
              </div>
              <div class="product-name">
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

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.col-6 .product-image {
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

.item-big:hover .product-image,
.item-small:hover .product-image {
  filter: brightness(60%);
  transform: scale(1.2);
}
.item-big:hover p,
.item-small:hover p {
  color: white;
}
.item-big:hover .mask,
.item-small:hover .mask {
  visibility: visible;
  opacity: 1;
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
  cursor: pointer;
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
}

.item-big .mask img {
  width: 128px;
}
.item-small .mask img {
  width: 64px;
}
</style>
