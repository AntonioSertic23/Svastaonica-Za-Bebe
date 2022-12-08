<script setup>
import PageTitle from "../components/ui/PageTitle.vue";
</script>

<template>
  <section class="gallery-section py-4">
    <div class="container">
      <div class="row justify-content-center text-center">
        <p class="mb-5 menu-title">Gallery</p>
        <div class="col-6">
          <p class="gallery-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            facilis tempora porro, suscipit ducimus delectus quaerat alias
            corporis a obcaecati, molestiae expedita dolorem nisi commodi maxime
            nulla exercitationem illo dolores.
          </p>
        </div>
      </div>

      <!-- gallery cards -->
      <div class="row my-5 pt-5 pb-4">
        <div class="d-flex justify-content-center">
          <a class="mx-2 category-link" href="">U trendu</a>
          <a class="mx-2 category-link" href="">Novo u ponudi</a>
          <a class="mx-2 category-link" href="">Akcija</a>
          <a class="mx-2 category-link" href="">Ograničeno izdanje</a>
          <a class="mx-2 category-link" href="">Paketi</a>
        </div>
      </div>
      <div class="section-cards row justify-content-evenly">
        <div class="container text-center">
          <div class="row row-cols-4 g-5">
            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/new.png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/new (1).png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/new (2).png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/promotional.png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/tag.png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/trending.png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/best-seller.png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/discount.png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/flash-sale.png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/new (3).png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/new (4).png" alt="" />
              </div>
              <div class="p-3 border bg-light"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- gallery cards 2 -->
      <div class="section-cards2 mt-5 pt-5 row justify-content-evenly">
        <div class="container text-center">
          <div class="row row-cols-3 g-5">
            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/new.png" alt="" />
              </div>
              <div class="p-4 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/new (1).png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/new (2).png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/promotional.png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/tag.png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/trending.png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/best-seller.png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div2">
                <img src="../assets/img/discount.png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/flash-sale.png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/new (3).png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>

            <div class="col">
              <div class="image-div">
                <img src="../assets/img/new (4).png" alt="" />
              </div>
              <div class="p-3 border bg-light">
                <img src="../assets/img/55.jpg" alt="" />

                <h1 class="my-3 text-start">Naziv</h1>

                <button class="btn btn-primary w-100">Pročitaj više</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- gallery cards 3 -->
      <div class="section-cards3 mt-5 pt-5 row justify-content-evenly">
        <div class="container text-center">
          <div class="row row-cols-3 g-5">
            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
            </div>

            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
                <div class="badge px-4">
                  <p class="my-2">SOLD OUT</p>
                </div>
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
            </div>

            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
            </div>

            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
                <div class="badge px-4">
                  <p class="my-2">-70%</p>
                </div>
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
            </div>

            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
            </div>

            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
            </div>

            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
            </div>

            <div class="col">
              <div class="border bg-light">
                <img src="../assets/img/5.jpg" alt="" />
              </div>
              <h1 class="my-3 ms-2 text-start">Naziv</h1>
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

.gallery-description {
  font-size: 25px;
}

.category-link {
  color: #222;
  text-decoration: none;
  text-transform: uppercase;
  background-color: rgb(205, 180, 219);
  border-radius: 15px;
  padding: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 20px;
}

.border {
  height: 250px;
  border-radius: 15px;
}

.section-cards img {
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

.section-cards2 .image-div2 img,
.section-cards2 .image-div img {
  width: 64px;
  position: absolute;
  right: 0;
}
.section-cards2 .border img {
  width: 100%;
  border-radius: 15px;
}
.section-cards2 .border {
  height: auto;
  border-radius: 15px;
}
.section-cards2 .border .btn {
  font-size: 20px;
}

.section-cards3 .border img {
  width: 100%;
}
.section-cards3 .border {
  height: auto;
  border-radius: 0;
}

.badge {
  position: absolute;
  background-color: gray;
  left: 20px;
  top: 20px;
  border-radius: 0;
}

.section-cards3 .border {
  position: relative;
  border: 1px solid #999 !important;
}
.section-cards3 .border p {
  font-size: 16px;
  letter-spacing: 2px;
}
</style>
