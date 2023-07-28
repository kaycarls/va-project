<template>
  <v-container fluid class="bg-black pa-15 foot">
    <v-row>
      <v-col cols="12" class="borderline"></v-col>
      <v-col cols="6" sm="4" class="text-body-1 text-sm-h6">
        <div>
          <strong>Neo.AI © {{ new Date().getFullYear() }}</strong>
        </div>
        <p>Terms & Policies</p>
        <p>Privacy Policy</p>
        <p>Brand Guidelines</p>
      </v-col>
      <v-col cols="6" sm="8" class="text-subtitle-1">
        <div class="footer">
          <a
            v-for="(items, i) in footer"
            :key="i"
            class="text-white mx-5 text-decoration-none link-hover"
            :href="items.url"
            target="_blank"
          >
            <span class="white underline_left"></span>
            {{ items.title }}
            <span class="white underline_right"></span>
          </a>
        </div>
        <div class="mt-5">
          <a
            class="text-white ml-5 text-decoration-none link-hover"
            @click="scrollToTop"
            >Back to Top <span class="mdi mdi-arrow-up"></span
          ></a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const footer = [
  {
    url: "https://www.twitter.com/",
    title: "Twitter",
  },
  {
    url: "https://www.instagram.com/",
    title: "Instagram",
  },
  {
    url: "https://www.facebook.com/",
    title: "Facebook",
  },
  {
    url: "https://www.linkedin.com/",
    title: "Linkedin",
  },
];
function scrollToTop() {
  if (window.scrollY !== 0) {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
}
</script>
<style>
.foot {
  height: 50vh;
}
</style>
