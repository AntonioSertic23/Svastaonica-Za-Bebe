<script setup>
import PageTitle from "../components/ui/PageTitle.vue";
</script>

<template>
  <section class="aboutus-section">
    <div class="container">
      <PageTitle
        pageTitle="O Nama"
        pageSubTitle="Kratka priča o nama i našem rastu"
      ></PageTitle>
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <!-- Section Heading-->
          <div class="section_heading text-center">
            <div class="aboutus-description px-4">
              <p>Neki tekst...</p>
              <p>Neki tekst...</p>
              <p>Neki tekst...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutus-description {
  font-size: 20px;
}
</style>
