<template>
  <v-app class="bg-black fade-in">
    <NavBar />
    <HeroPage />
    <ResearchPage />
    <ProductPage />
    <AboutPage />
    <CareersPage />
    <FooterPage />
  </v-app>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
import HeroPage from "~/components/HeroPage.vue";
import ResearchPage from "~/components/ResearchPage.vue";
import ProductPage from "~/components/ProductPage.vue";
import AboutPage from "~/components/AboutPage.vue";
import CareersPage from "~/components/CareersPage.vue";
import FooterPage from "~/components/FooterPage.vue";

let fadeElements;

onMounted(() => {
  setTimeout(() => {
    fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => element.classList.add("show"));
  }, 200);
});
</script>

<style>
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.show {
  opacity: 1;
}
</style>
