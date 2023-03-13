<template>
  <div class="container mb-5 px-3 px-lg-5 d-flex flex-column">
    <div class="real-numbers-div g-5 mx-1 mx-lg-5 row mt-3 mt-lg-5">
      <div class="col-12 col-lg-4">
        <div class="rn-card p-5">
          <div class="image-div">
            <img src="/assets/img/clock.png" alt="" />
          </div>
          <p class="rn-numbers">200+</p>
          <p class="rn-description">uloženih sati rada</p>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="rn-card p-5">
          <div class="image-div">
            <img src="/assets/img/playtime.png" alt="" />
            <img src="/assets/img/playtime.png" alt="" />
          </div>
          <p class="rn-numbers">100+</p>
          <p class="rn-description">razveseljene djeces</p>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="rn-card p-5">
          <div class="image-div">
            <img src="/assets/img/mother.png" alt="" />
          </div>
          <p class="rn-numbers">100+</p>
          <p class="rn-description">zadovoljnih mama</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.real-numbers-div {
  justify-content: center;
}
.real-numbers-div .col {
  display: flex;
  justify-content: center;
}
.real-numbers-div .rn-card {
  text-align: center;
  background-color: thistle;
  border-radius: 15px;
  box-shadow: 2px 2px 8px grey;
}
.real-numbers-div .rn-card .image-div {
  display: flex;
  justify-content: center;
}
.real-numbers-div .rn-card .image-div img {
  width: 96px;
  height: 96px;
}
.rn-numbers {
  margin-top: 1.5rem;
  font-size: 48.83px;
}
.rn-description {
  font-size: 20px;
}

@media (max-width: 991.98px) {
  .real-numbers-div {
    flex-direction: column;
  }
}
</style>
