<template>
  <div>
    <v-container fluid class="h-screen video-container">
      <v-row>
        <v-col class="h-screen d-flex align-center justify-center">
          <h1 class="text-h1 text-front text-white text-center">Hello World</h1>
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
