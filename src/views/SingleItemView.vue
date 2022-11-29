<script setup></script>

<template>
  <section class="item-section py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 item-info">
          <div class="text-center">
            <p class="mb-5 menu-title">Kockica</p>
            <p class="item-description col-7 m-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              facilis tempora porro, suscipit ducimus delectus quaerat alias
              corporis a obcaecati, molestiae expedita dolorem nisi commodi
              maxime nulla exercitationem illo dolores.
            </p>
          </div>

          <div class="col-6 m-auto my-5">
            <p>Neki tekst ovdje:</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div class="text-center">
            <p class="item-description col-7 m-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              facilis tempora porro, suscipit ducimus delectus quaerat alias
              corporis a obcaecati, molestiae expedita dolorem nisi commodi
              maxime nulla exercitationem illo dolores.
            </p>
          </div>

          <div class="col-8 m-auto my-5 p-4 ingredients">
            <p>Neki tekst ovdje:</p>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>

        </div>

        <div class="col-6">
          <div class="slider-div col-8 m-auto">
            <button
                class="carousel-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
              <img src="../assets/img/left-chevron.png" alt="">
                <span class="visually-hidden">Previous</span>
              </button>

            <div
              id="carouselExampleIndicators"
              class="carousel carousel-fade carousel-dark"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner h-100">
                <div class="carousel-item active">
                  <img class="d-block" src="../assets/img/55.jpg" alt="" />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block"
                    src="../assets/img/baby-care-accessories-flat-lay.jpg"
                    alt=""
                  />
                </div>
                <div class="carousel-item">
                  <img class="d-block" src="../assets/img/5.jpg" alt="" />
                </div>
              </div>
            </div>

            <button
                class="carousel-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
              <img src="../assets/img/chevron.png" alt="">
                <span class="visually-hidden">Next</span>
              </button>

            <h1 class="text-center mt-4">3/20</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-title {
  font-size: 48.83px;
}

.item-info {
  font-size: 25px;
}

.ingredients {
  border: 2px dashed gray;
  border-radius: 15px;
}

/* right */

.carousel {
  height: 500px;
}

.carousel-inner {
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.slider-div {
  position: sticky;
  top: 155px;
}

.carousel-prev {
  position: absolute;
  z-index: 2;
  left: -35px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: none;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px;
  background-color: thistle;
  border: 2px solid gray;
}

.carousel-next {
  position: absolute;
  z-index: 2;
  right: -35px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: none;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  padding: 12px;
  background-color: thistle;
  border: 2px solid gray;
}
</style>
