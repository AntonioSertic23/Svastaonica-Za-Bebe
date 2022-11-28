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
        </div>

        <div class="col-6">
          <div class="slider-div col-7 m-auto">
            <div
              id="carouselExampleIndicators"
              class="carousel carousel-fade carousel-dark"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
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
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
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

.carousel {
  height: 600px;
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
  position: -webkit-sticky;
  top: 0; /* required */
}
</style>
