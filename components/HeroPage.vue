<template>
  <div>
    <v-container fluid class="h-screen video-container">
      <v-row>
        <v-col class="h-screen d-flex align-center justify-center pa-15">
          <div class="text-front text-white text-center">
            <h1 class="text-h1 pa-10">Neo.AI</h1>
            <h2 class="text-h2 text-justify">
              Unleashing Next-Gen Potential <br />
              To Empower Humanity.
            </h2>
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

<script setup></script>

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
