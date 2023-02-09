<script setup>
import VLazyImage from "v-lazy-image";
</script>

<template>
  <section class="aboutus-section py-4">
    <div class="container d-flex flex-column">
      <!-- SECTION 1 -->
      <div class="row justify-content-center text-center">
        <p class="mb-5 menu-title">Tko smo mi?</p>
        <div class="col col-lg-8 px-4">
          <p class="aboutus-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            facilis tempora porro, suscipit ducimus delectus quaerat alias
            corporis a obcaecati, molestiae expedita dolorem nisi commodi maxime
            nulla exercitationem illo dolores.
          </p>
        </div>
      </div>

      <!-- SECTION 2 -->
      <div class="section2 row my-5 py-lg-5 mx-1 justify-content-evenly">
        <div class="background-connector"></div>

        <div class="col col-lg-4 section2-left order-2 order-lg-1">
          <VLazyImage
            v-bind:src="'/src/assets/img/about-us/aboutus2.jpg'"
            class="image1"
          />

          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            soluta quae reprehenderit dolorem deleniti eos.
          </p>

          <div class="social-media mt-4 d-flex gap-lg-3">
            <a href="#" class="">
              <img src="../assets/img/social-media/facebook-messenger.png" />
            </a>
            <a href="#" class="">
              <img src="../assets/img/social-media/whatsapp.png" />
            </a>
            <a href="#" class="">
              <img src="../assets/img/social-media/facebook.png" />
            </a>
            <a href="#" class="">
              <img src="../assets/img/social-media/instagram.png" />
            </a>
            <a href="#" class="">
              <img src="../assets/img/social-media/viber.png" />
            </a>
            <a href="#" class="">
              <img src="../assets/img/social-media/google.png" />
            </a>
          </div>
        </div>

        <div
          class="col col-lg-4 section2-right order-1 order-lg-2 mb-5 mb-lg-0"
        >
          <p class="mb-3 my-lg-3">Naslov</p>
          <VLazyImage
            v-bind:src="'/src/assets/img/about-us/aboutus1.jpg'"
            class="image2"
          />
        </div>
      </div>

      <!-- SECTION 3 -->
      <div class="section3 row mt-3 mb-5 justify-content-around">
        <div class="background-image"></div>
        <div class="section3-1 px-3 col col-lg-5">
          <div class="item">
            <img src="../assets/img/bullet-points/3.png" alt="" />
            <p>Igračke kao umjetnost</p>
          </div>

          <div class="item">
            <img src="../assets/img/bullet-points/3.png" alt="" />
            <p>Igračke za moderne obitelji</p>
          </div>

          <div class="item">
            <img src="../assets/img/bullet-points/3.png" alt="" />
            <p>Igračke za zajedničko provođenje vremena</p>
          </div>
        </div>

        <div class="section3-2 mt-5 mt-lg-0 col col-lg-3">
          <VLazyImage
            v-bind:src="'/src/assets/img/temp/products-2.jpg'"
            class="section3-image1"
          />
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
      </div>

      <!-- SECTION 4 -->
      <div class="section4 mb-5">
        <div class="row justify-content-end">
          <div class="col px-4 col-lg-3 some-text-div me-5 order-2 order-lg-1">
            <p class="some-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              voluptas voluptate nobis nihil vel veniam? Vero libero voluptates
              laborum consectetur!
            </p>
          </div>
          <div class="col col-lg-3 order-1 order-lg-2">
            <div class="photo-div p-4">
              <div class="mark"></div>
              <VLazyImage
                v-bind:src="'/src/assets/img/about-us/kidplaying1.jpg'"
                class="photo-photo"
              />
              <h1 class="text-center mt-4">Naslov</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col col-lg-4">
            <div class="photo2-div p-4">
              <div class="mark"></div>
              <VLazyImage
                v-bind:src="'/src/assets/img/about-us/kidplaying2.jpg'"
                class="photo-photo"
              />
              <h1 class="text-center mt-4">Naslov</h1>
            </div>
          </div>
          <div class="col px-4 col-lg-3 some-text-div ms-lg-5">
            <p class="some-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum
              dicta vel eaque, dolor architecto commodi et quaerat, tenetur, ad
              repellat adipisci neque nisi consequuntur!
            </p>
          </div>
        </div>

        <div class="row justify-content-end">
          <div class="col px-4 col-lg-3 some-text-div me-5 order-2 order-lg-1">
            <p class="some-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              ipsum repellat. Repudiandae modi suscipit dolores!
            </p>
          </div>
          <div class="col col-lg-3 order-1 order-lg-2">
            <div class="photo-div p-4">
              <div class="mark"></div>
              <VLazyImage
                v-bind:src="'/src/assets/img/about-us/kidplaying1.jpg'"
                class="photo-photo"
              />
              <h1 class="text-center mt-4">Naslov</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* SECTION 1 -> */

.aboutus-section {
  position: relative;
}

.menu-title {
  font-size: 48.83px;
}

.aboutus-description {
  font-size: 25px;
}

@media (max-width: 991.98px) {
  .aboutus-description {
    font-size: 20px;
  }
}

/* SECTION 2 -> */

.section2 {
  position: relative;
}

.background-connector {
  position: absolute;
  height: 180px;
  background-color: thistle;
  z-index: 0;
  margin-top: 140px;
}

.section2-left p {
  font-size: 20px;
}

.section2-left,
.section2-right {
  z-index: 1;
}
.section2-right p {
  font-size: 39.06px;
}

.image1,
.image2 {
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 2px 2px 8px grey;
}
.image1 {
  height: 370px;
}
.image2 {
  height: 420px;
}

.social-media img {
  width: 48px;
  height: 48px;
  transition: transform 0.5s;
}
.social-media img:hover {
  transform: scale(1.3);
}

@media (max-width: 991.98px) {
  .section2 {
    flex-direction: column;
  }

  .background-connector {
    display: none;
  }

  .social-media img {
    width: 40px;
    height: 40px;
  }

  .social-media {
    justify-content: space-around;
  }

  .image1,
  .image2 {
    height: 350px;
  }
}

/* SECTION 3 -> */

.section3 {
  height: 400px;
}

.background-image {
  position: absolute;
  height: 400px;
  background-color: thistle;
  left: 0;
}

.section3-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  row-gap: 15px;
}
.section3-1 .item {
  display: flex;
  align-items: center;
}
.section3-1 p {
  font-size: 31.25px;
  margin: 0;
}
.section3-1 img {
  width: 80px;
  height: 80px;
  margin-right: 1rem;
}

.section3-2 {
  background-color: #ede4f2;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}

.section3-image1 {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 2px 2px 8px grey;
  transform: scale(1.5);
}

.circle1,
.circle2,
.circle3,
.circle4 {
  width: 20px;
  height: 20px;
  background-color: thistle;
  position: absolute;
  border-radius: 50%;
  border: 2px solid gray;
}

.circle1 {
  left: -40px;
  top: 60px;
}
.circle2 {
  right: -40px;
  top: 60px;
}
.circle3 {
  left: -40px;
  bottom: 60px;
}
.circle4 {
  right: -40px;
  bottom: 60px;
}

@media (max-width: 991.98px) {
  .background-image {
    display: none;
  }

  .section3 {
    height: auto;
    flex-direction: column;
  }

  .section3-1 {
    width: 90%;
    background-color: thistle;
    padding-top: 1rem;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-bottom: 1rem;
  }

  .section3-1 p {
    font-size: 20px;
  }
  .section3-1 img {
    width: 56px;
    height: 56px;
  }

  .section3-2 {
    background-color: thistle;
    width: 90%;
    margin-left: auto;
    justify-content: center;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .section3-image1 {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
    transform: scale(1);
  }

  .circle1,
  .circle2,
  .circle3,
  .circle4 {
    display: none;
  }
}

/* SECTION 4 -> */

.some-text-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.some-text {
  font-size: 20px;
  text-align: center;
}

.photo-div {
  background-color: thistle;
  border-radius: 15px;
  position: relative;
  transform: rotate(10deg);
  box-shadow: 4px 4px 4px lightgrey;
}
.photo2-div {
  background-color: thistle;
  border-radius: 15px;
  position: relative;
  transform: rotate(-10deg);
  box-shadow: 4px 4px 4px lightgrey;
}

.photo2-div:before {
  content: "";
  float: left;
  padding-top: 100%; /* initial ratio of 1:1*/
}

.mark {
  background-color: hotpink;
  border-radius: 10px;
  width: 60px;
  height: 70px;
  position: absolute;
  top: -30px;
  left: 60px;
}

.photo-photo {
  width: 100%;
  border-radius: 15px;
  aspect-ratio: 1 /1;
  object-fit: cover;
}

@media (max-width: 991.98px) {
  .section4 .row {
    flex-direction: column;
  }

  .photo-div {
    transform: rotate(5deg) scale(0.7);
  }
  .photo2-div {
    transform: rotate(-5deg) scale(0.8);
  }
}
</style>
