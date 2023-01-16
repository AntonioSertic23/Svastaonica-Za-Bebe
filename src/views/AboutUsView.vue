<script setup></script>

<template>
  <section class="aboutus-section py-4">
    <div class="container">
      <div class="row justify-content-center text-center">
        <p class="mb-5 menu-title">Tko smo mi?</p>
        <div class="col-8">
          <p class="aboutus-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            facilis tempora porro, suscipit ducimus delectus quaerat alias
            corporis a obcaecati, molestiae expedita dolorem nisi commodi maxime
            nulla exercitationem illo dolores.
          </p>
        </div>
      </div>

      <div class="section2 row my-5 py-5 justify-content-evenly">
        <div class="background-connector"></div>

        <div class="col-4 section2-left">
          <img class="image1" src="../assets/img/5.jpg" alt="" />

          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            soluta quae reprehenderit dolorem deleniti eos.
          </p>

          <div class="social-media mt-4">
            <a href="#" class="m-2">
              <img src="../assets/img/facebook-messenger.png" />
            </a>
            <a href="#" class="m-2">
              <img src="../assets/img/whatsapp.png" />
            </a>
            <a href="#" class="m-2">
              <img src="../assets/img/facebook.png" />
            </a>
            <a href="#" class="m-2">
              <img src="../assets/img/instagram.png" />
            </a>
            <a href="#" class="m-2">
              <img src="../assets/img/viber.png" />
            </a>
            <a href="#" class="m-2">
              <img src="../assets/img/google.png" />
            </a>
          </div>
        </div>

        <div class="col-4 section2-right">
          <h1 class="my-4">Naslov</h1>
          <img class="image2" src="../assets/img/67661.jpg" alt="" />
        </div>
      </div>

      <div class="section3 row my-5 py-5 justify-content-around">
        <div class="background-image"></div>
        <div class="section3-1 col-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quam amet nemo nesciunt neque nulla autem. Architecto sunt possimus
            minus ab ut recusandae expedita cumque non earum! Similique, sequi
            ipsum.
          </p>
          <button class="btn btn-primary btn-lg mt-3">nesto</button>
        </div>

        <div class="section3-2 col-3">
          <img class="section3-image1" src="../assets/img/55.jpg" alt="" />
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
      </div>

      <div class="container my-5">
        <h1>Igračke kao umjetnost</h1>
        <h1>Igračke za moderne obitelji</h1>
        <h1>Igračke za zajedničko provođenje vremena</h1>
      </div>

      <div class="section4 my-5 py-5">
        <div class="row justify-content-end">
          <div class="col-3 some-text-div me-5">
            <p class="some-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              voluptas voluptate nobis nihil vel veniam? Vero libero voluptates
              laborum consectetur!
            </p>
          </div>
          <div class="col-3">
            <div class="photo-div p-4">
              <div class="mark"></div>
              <img class="photo-photo" src="../assets/img/67661.jpg" alt="" />
              <h1 class="text-center mt-4">Naslov</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <div class="photo2-div p-4">
              <div class="mark"></div>
              <img class="photo-photo" src="../assets/img/67661.jpg" alt="" />
              <h1 class="text-center mt-4">Naslov</h1>
            </div>
          </div>
          <div class="col-3 some-text-div ms-5">
            <p class="some-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum
              dicta vel eaque, dolor architecto commodi et quaerat, tenetur, ad
              repellat adipisci neque nisi consequuntur!
            </p>
          </div>
        </div>

        <div class="row justify-content-end">
          <div class="col-3 some-text-div me-5">
            <p class="some-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              ipsum repellat. Repudiandae modi suscipit dolores!
            </p>
          </div>
          <div class="col-3">
            <div class="photo-div p-4">
              <div class="mark"></div>
              <img class="photo-photo" src="../assets/img/67661.jpg" alt="" />
              <h1 class="text-center mt-4">Naslov</h1>
            </div>
          </div>
        </div>
      </div>

      <h1>Toys as art</h1>
      <h1>Toys for modern families</h1>
      <h1>Toys to spend time together</h1>

      <div class="w-75 mx-auto">
        <h1 class="text-center mt-5">
          We are kids. The only difference is the toy we have.
        </h1>
        <h1 class="text-end mb-5"><i>Pablo Larrain</i></h1>

        <h1 class="text-center mt-5">
          Give children toys that are powered by their imagination, not by
          batteries.
        </h1>
        <h1 class="text-end mb-5"><i>H. Jackson Brown, Jr.</i></h1>

        <h1 class="text-center mt-5">
          What I have got from my childhood aren't toys, but memories. And happy
          memories are better than any toy.
        </h1>
        <h1 class="text-end mb-5"><i>River Phoenix</i></h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutus-section {
  position: relative;
}

.menu-title {
  font-size: 48.83px;
}

.aboutus-description {
  font-size: 25px;
}

/* SECTION 2 > */

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

.section2-left,
.section2-right {
  z-index: 1;
}

.image1,
.image2 {
  width: 100%;
}

.social-media img {
  width: 32px;
  height: 32px;
}

/* < SECTION 2 */

/* SECTION 3 > */

.section3 {
  height: 550px;
}

.background-image {
  position: absolute;
  height: 450px;
  background-color: thistle;
  left: 0;
}

.section3-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
}
.section3-1 p {
  font-size: 20px;
}

.section3-2 {
  background-color: #ede4f2;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}

.section3-image1 {
  width: 480px;
  margin-left: -87px;
  border-radius: 15px;
  border: 2px solid gray;
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
  left: -60px;
  top: 70px;
}
.circle2 {
  right: -60px;
  top: 70px;
}
.circle3 {
  left: -60px;
  bottom: 70px;
}
.circle4 {
  right: -60px;
  bottom: 70px;
}

/* < SECTION 3 */

/* SECTION 4 > */

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
}
.photo2-div {
  background-color: thistle;
  border-radius: 15px;
  position: relative;
  transform: rotate(-10deg);
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
}

/* < SECTION 4 */
</style>
