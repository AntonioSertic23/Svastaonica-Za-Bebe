<script setup></script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="d-flex justify-content-center">
        <a class="mx-3 category-link" href="">U trendu</a>
        <a class="mx-3 category-link" href="">Novo u ponudi</a>
        <a class="mx-3 category-link" href="">Akcija</a>
      </div>
    </div>

    <div class="row mt-5">
      <div class="container text-center">
        <div class="row row-cols-4 g-5">
          <div class="col">
            <div class="image-div2">
              <img src="../../assets/img/new.png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div">
              <img src="../../assets/img/new (1).png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div2">
              <img src="../../assets/img/new (2).png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div2">
              <img src="../../assets/img/promotional.png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div">
              <img src="../../assets/img/tag.png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div">
              <img src="../../assets/img/trending.png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div">
              <img src="../../assets/img/best-seller.png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div2">
              <img src="../../assets/img/discount.png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div">
              <img src="../../assets/img/flash-sale.png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div">
              <img src="../../assets/img/new (3).png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>

          <div class="col">
            <div class="image-div">
              <img src="../../assets/img/new (4).png" alt="" />
            </div>
            <div class="p-3 border bg-light"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-link {
  color: #222;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgb(205, 180, 219);
  border-radius: 15px;
  padding: 1rem;
}

.border {
  height: 250px;
  border-radius: 15px;
}

img {
  width: 64px;
  position: absolute;
  right: 0;
}
.image-div,
.image-div2 {
  position: relative;
}
.image-div2 img {
  margin-top: -20px;
  margin-right: -20px;
}
</style>
