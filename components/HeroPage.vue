<template>
  <div>
    <v-container id="id-home" fluid class="h-screen video-container">
      <v-row>
        <v-col
          cols="12"
          class="h-screen d-flex align-center justify-center pa-15"
        >
          <div class="text-front text-white text-center">
            <h1 class="text-h2 text-sm-h1 text-shadow pa-10">Neo.AI</h1>
            <h2 class="text-h5 text-sm-h2 text-shadow text-center text-sm-left">
              Unleashing Next-Gen Potential <br />
              To Empower Humanity.
            </h2>
            <div class="text-front text-white text-center mt-15">
              <v-btn
                class="text-shadow"
                variant="outlined"
                @click="scrollToSection('#id-research')"
              >
                Learn More
              </v-btn>
            </div>
          </div>
          <video autoplay loop muted class="video-background">
            <source src="~/assets/office.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
function scrollToSection(id) {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style>
.text-front {
  z-index: 1;
}
.video-container {
  position: relative;
  height: 100vh; /* Set the container height to full viewport height */
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
</style>
