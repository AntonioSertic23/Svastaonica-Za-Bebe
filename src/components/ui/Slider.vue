<script setup></script>

<template>
  <section>
    <div class="fading-left"></div>
    <article>
      <div>
        <ul>
          <li>
            <img src="../../assets/img/products/1.jpg" />
          </li>
          <li>
            <img src="../../assets/img/products/2.jpg" />
          </li>
          <li><img src="../../assets/img/products/3.jpg" /></li>
          <li>
            <img src="../../assets/img/products/4.jpg" />
          </li>
          <li>
            <img src="../../assets/img/products/5.jpg" />
          </li>
          <li><img src="../../assets/img/products/6.jpg" /></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src="../../assets/img/products/1.jpg" />
          </li>
          <li>
            <img src="../../assets/img/products/2.jpg" />
          </li>
          <li><img src="../../assets/img/products/3.jpg" /></li>
          <li>
            <img src="../../assets/img/products/4.jpg" />
          </li>
          <li>
            <img src="../../assets/img/products/5.jpg" />
          </li>
          <li><img src="../../assets/img/products/6.jpg" /></li>
        </ul>
      </div>
    </article>
    <div class="fading-right"></div>
  </section>
</template>

<style scoped>
.fading-left {
  position: absolute;
  left: 0px;
  top: 0;
  display: block;
  width: 70px;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    #ede4f2 100%
  );
}
.fading-right {
  position: absolute;
  right: 0px;
  top: 0;
  display: block;
  width: 70px;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    #ede4f2 100%
  );
}

/* ------ */

section {
  position: relative;
  width: 100%;
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

article {
  display: flex;
  width: 200%;
  animation: bannermove 15s linear infinite;
  margin-bottom: 1rem;
}

article.paused {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

div {
  width: 100%;
}

ul {
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

li {
  width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 15px;
  overflow: hidden;
  width: 220px;
  box-shadow: 4px 4px 4px lightgrey;
}

@keyframes bannermove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
