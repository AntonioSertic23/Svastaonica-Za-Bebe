<script setup></script>

<template>
  <div>
    <div class="container py-5 my-3">
      <div class="row">
        <div class="left-side col d-flex">
          <div class="left-side-div pe-5">
            <h1>Dobrodošli na</h1>
            <p class="my-4">
              sretno mjesto na internetu gdje se mogu pronaći razne igračke za
              bebe!
            </p>
          </div>
        </div>

        <div class="middle-side col d-flex justify-content-center">
          <div class="middle-side-div">
            <img class="image1" src="../../assets/img/products/5.jpg" alt="" />
            <img class="image2" src="../../assets/img/products/6.jpg" alt="" />

            <img class="image3" src="../../assets/img/bow.png" alt="" />
          </div>
        </div>

        <div
          class="right-side col d-flex justify-content-center align-items-center"
        >
          <div class="right-side-div ps-5">
            <p class="text-center">
              "Svi smo djeca. Jedina razlika je igračka koju imamo."
            </p>
            <p class="text-end fst-italic fw-bold">Pablo Larrain</p>

            <a class="category-link mt-5 px-4" href="">Galerija</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 450px;
}
.row {
  height: 330px;
}

.right-side {
  position: relative;
}

.left-side-div h1 {
  font-size: 48.83px;
}

.left-side-div p,
.right-side-div p {
  font-size: 25px;
}

.middle-side-div {
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 5px 18px grey;
  width: 100%;
}

.image1 {
  height: 200px;
  width: 200px;
  position: absolute;
  left: -130px;
  bottom: -50px;
  object-fit: cover;
  box-shadow: 0px 5px 18px grey;
}
.image2 {
  width: 100%;
  height: 364px;
  object-fit: cover;
}
.image3 {
  height: 100px;
  position: absolute;
  right: -25px;
  top: 15px;
}

.image1,
.image2,
.image3 {
  border-radius: 15px;
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
  position: absolute;
  bottom: 0;
  box-shadow: -2px 2px 8px grey;
}
.category-link:hover {
  background-color: #a375bd;
}
</style>
