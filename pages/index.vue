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
            icon="mdi mdi-record-circle-outline"
          ></v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" class="text-center pt-10">
        <div class="d-flex justify-center">
          <v-textarea
            v-model="transcript"
            variant="outlined"
            clearable
            auto-grow
            class="textarea pa-5"
          ></v-textarea>
        </div>
        <v-btn class="text-none mx-5" color="blue" @click="handleSearch">
          Search Google
          <v-icon end icon="mdi mdi-google"></v-icon>
        </v-btn>
        <v-btn
          class="text-none mx-5"
          color="success"
          variant="outlined"
          @click="handleCopy"
        >
          Copy Text
          <v-icon end icon="mdi mdi-content-copy"></v-icon>
        </v-btn>
        <v-snackbar
          v-model="snackbar"
          class="ma-10"
          variant="tonal"
          :color="snackbarColor"
        >
          <p class="text-center">{{ snackbarText }}</p>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const transcript = ref("Press Record To Start");
const isRecording = ref(false);
const recBtn = ref("Record");
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("");
let speech;

const initSpeechRecognition = () => {
  const Recognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (Recognition) {
    speech = new Recognition();
    speech.continuous = true;
    speech.interimResults = true;
    speech.onstart = () => {
      snackbarText.value = "Recording Started";
      snackbarColor.value = "success";
      snackbar.value = true;
      isRecording.value = true;
      recBtn.value = "Stop";
    };
    speech.onend = () => {
      snackbarText.value = "Recording Stopped";
      snackbarColor.value = "error";
      snackbar.value = true;
      isRecording.value = false;
      recBtn.value = "Record";
    };

    speech.onresult = (evt) => {
      const script = Array.from(evt.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join(" ");
      transcript.value = script;
    };
  } else {
    snackbarText.value =
      "Speech Recognition is not available in this browser. Please use a different browser.";
    snackbarColor.value = "error";
    snackbar.value = true;
  }
};

onMounted(initSpeechRecognition);

const handleRecording = () => {
  if (speech) {
    if (isRecording.value === false) {
      speech.start();
    } else {
      speech.stop();
    }
  }
};

const handleSearch = () => {
  const searchQuery = encodeURIComponent(transcript.value);
  const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
  window.open(searchUrl, "_blank");
};

const handleCopy = () => {
  navigator.clipboard.writeText(transcript.value);
  snackbarText.value = "Text copied to clipboard!";
  snackbarColor.value = "blue";
  snackbar.value = true;
};
</script>

<style scoped>
.textarea {
  max-width: 50vw;
  max-height: 50vh;
  overflow: auto;
}
</style>
