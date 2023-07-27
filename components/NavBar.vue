<template>
  <v-container class="bg-black">
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <v-app-bar-title>Neo.AI</v-app-bar-title>
      <div class="links">
        <a
          v-for="(items, i) in links"
          :key="i"
          class="text-white mx-5 text-decoration-none"
          :href="items.url"
        >
          <span class="white underline_left"></span>
          {{ items.title }}
          <span class="white underline_right"></span>
        </a>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: [
      {
        url: "#",
        icon: "mdi mdi-home",
        title: "Home",
      },
      {
        url: "#",
        icon: "ri-user-line",
        title: "Research",
      },
      {
        url: "#",
        icon: "ri-service-line",
        title: "Product",
      },
      {
        url: "#",
        icon: "ri-contacts-line",
        title: "Company",
      },
    ],
  }),
};
</script>

<style></style>
