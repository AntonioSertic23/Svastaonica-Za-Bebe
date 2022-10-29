<script setup>
import PageTitle from "../components/ui/PageTitle.vue";
</script>

<template>
  <section class="container mb-2 menu-section">
    <PageTitle pageTitle="Galerija" />

    <div class="p-4 pt-0">
      <div class="category-section my-5">
        <p class="menu-subtitle mb-4">Kategorija 1</p>
        <div
          class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 justify-content-center"
        >
          <div class="col">
            <div class="card border-0 card-popular">
              <img src="../assets/img/Food/plata_1.jpg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Proizvod 1</h5>
                <p class="card-text">
                  (Pljeskavica, Rolani hamburger, lepinja, umaci, povrće)
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0 card-popular">
              <img src="../assets/img/Food/plata_1.jpg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Proizvod 2</h5>
                <p class="card-text">
                  (Pljeskavica, Rolani hamburger, lepinja, umaci, povrće)
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0 card-popular">
              <img src="../assets/img/Food/plata_1.jpg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Proizvod 3</h5>
                <p class="card-text">
                  (Pljeskavica, Rolani hamburger, lepinja, umaci, povrće)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-section my-5">
        <p class="menu-subtitle mb-4">Kategorija 2</p>
      </div>

      <div class="category-section my-5">
        <p class="menu-subtitle mb-4">Kategorija 3</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-subtitle {
  text-align: center;
  font-family: "PinkPanther";
  font-size: 31.25px;
}

.category-section .card-popular {
  /*   height: 100%;
  display: flex;
  box-shadow: 0 0.25rem 1rem 0 grey;
  border-radius: 15px;
  background-color: pink; */
}

.card-popular img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.category-section .card-body {
  /*   display: flex;
  justify-content: space-between;
  flex-direction: column; */
}

.card-title {
  font-size: 25px;
}
</style>
