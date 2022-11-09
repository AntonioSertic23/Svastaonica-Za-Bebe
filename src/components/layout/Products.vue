<script setup></script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="item-big">
          <img src="../../assets/img/55.jpg" alt="" />
          <div class="mask">
            <p class="ms-3 mb-3">Naziv proizvoda</p>
          </div>
        </div>
      </div>

      <div class="col subrow">
        <div class="row">
          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/55.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>

          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/55.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/55.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>

          <div class="item col-6">
            <div class="item-small">
              <img src="../../assets/img/55.jpg" alt="" />
              <div class="mask">
                <p class="ms-3 mb-3">Naziv proizvoda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

.item-big {
  width: 100%;
  height: 100%;
}

.item,
.item-big {
  position: relative;
}

.mask {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  color: white;
}

.mask:hover {
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: 0.8s;
  color: black;
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
</style>
