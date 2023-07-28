<template>
  <v-container class="bg-black">
    <v-app-bar class="pa-2" app color="black" dark>
      <div class="logo">
        <img src="~/assets/logo.png" class="logo py-3" />
      </div>
      <v-app-bar-title>Neo.AI</v-app-bar-title>
      <div class="links">
        <a
          v-for="(items, i) in links"
          :key="i"
          class="text-white mx-5 text-decoration-none link-hover"
          @click="scrollToSection(items.url)"
        >
          <span class="white underline_left"></span>
          {{ items.title }}
          <span class="white underline_right"></span>
        </a>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script setup>
const links = [
  {
    url: "#id-home",
    title: "Home",
  },
  {
    url: "#id-research",
    title: "Research",
  },
  {
    url: "#id-product",
    title: "Product",
  },
  {
    url: "#id-about",
    title: "Company",
  },
  {
    url: "#id-careers",
    title: "Careers",
  },
];
function scrollToSection(id) {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style>
.logo {
  height: 100%;
}
.custom-app-bar {
  height: 100px;
}
.link-hover:hover {
  cursor: pointer;
  text-shadow: 0 0 10px rgba(255, 255, 255, 1);
}
</style>
