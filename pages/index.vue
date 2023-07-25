<template>
  <v-container fluid class="h-screen bg-black text-center">
    <v-row>
      <v-col cols="12" class="text-center pt-10">
        <h1>Hello World</h1>
        <v-btn class="ma-2 text-none" color="error" @click="handleRecording">
          {{ recBtn }}
          <v-icon
            v-if="!isRecording"
            end
            icon="mdi-checkbox-marked-circle"
          ></v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" class="text-center d-flex justify-center pt-10">
        <v-textarea
          label="Label"
          variant="outlined"
          clearable
          auto-grow
          class="textarea pa-5"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const isRecording = ref(false);
const recBtn = ref("Record");

const handleRecording = () => {
  if (isRecording.value === false) {
    isRecording.value = true;
    recBtn.value = "Recording...";
  } else {
    isRecording.value = false;
    recBtn.value = "Record";
  }
};
</script>

<style scoped>
.textarea {
  max-width: 50vw;
  max-height: 50vh;
  overflow: auto;
}
</style>
