<template>
  <v-container id="id-research" fluid class="bg-black pa-15">
    <v-row class="mt-15">
      <v-col
        cols="12"
        sm="6"
        class="text-h5 text-sm-h4 d-flex align-center my-15"
      >
        <h2 style="line-height: 1.4">
          Advancing Society through Artificial Intelligence
        </h2>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="text-subtitle-1 text-sm-h5 d-flex align-center"
      >
        <div class="d-flex flex-column" style="line-height: 1.4">
          <p>
            Through relentless exploration and experimentation, we're shaping a
            future where AI becomes an invaluable partner, enhancing human
            capabilities across diverse domains.
          </p>
        </div>
      </v-col>
      <v-col cols="12" class="my-15">
        <img src="~/assets/ceo1.jpg" alt="Image Description" class="img-1" />
      </v-col>
      <v-col cols="12" class="borderline my-15"></v-col>
      <v-col
        cols="12"
        sm="6"
        class="text-h5 text-sm-h4 d-flex align-center my-15"
      >
        <h2 class="" style="line-height: 1.4">Focus areas</h2>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="text-subtitle-1 text-sm-h5 d-flex align-center"
      >
        <div class="d-flex flex-column text-justify" style="line-height: 1.4">
          <p>
            We build our generative models using a technology called deep
            learning, which leverages large amounts of data to train an AI
            system to perform a task.
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="my-15">
        <div class="img-sq">
          <img src="~/assets/sq1.jpg" alt="Image Description" />
        </div>
        <p class="my-5 font-weight-bold">
          Aligning language models to follow instructions
        </p>
        <p>
          We’ve trained language models that are much better at following user
          intentions than other AI models
        </p>
      </v-col>

      <v-col cols="12" sm="4" class="my-15">
        <div class="img-sq">
          <img src="~/assets/sq2.jpg" alt="Image Description" />
        </div>
        <p class="my-5 font-weight-bold">
          Summarizing books with human feedback
        </p>
        <p>
          We've trained a model to summarize entire books with human feedback.
        </p>
      </v-col>

      <v-col cols="12" sm="4" class="my-15">
        <div class="img-sq">
          <img src="~/assets/sq3.jpg" alt="Image Description" />
        </div>
        <p class="my-5 font-weight-bold">
          Language models are few-shot learners
        </p>
        <p>
          We trained Ariana, an autoregressive language model with 175 billion
          parameters.
        </p>
      </v-col>
      <v-col cols="12" class="borderline my-15"></v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style>
.borderline {
  border-top: 2px solid white;
}
.img-frame {
  width: 50%;
}
.img-1 {
  width: 100%;
}
.img-sq {
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
}

.img-sq img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
