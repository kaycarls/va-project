<template>
  <div>
    <v-parallax
      height="100vh"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row class="d-flex align-center fill-height text-white pa-15">
        <v-col cols="12" md="6">
          <h1 class="text-h5 text-sm-h3 font-weight-thin text-no-wrap">
            Introducing Ariana: <br />
            Your Personal Assistant <br />
            for Seamless Efficiency!
          </h1>
          <h4 class="subheading mt-10">
            Unlock the power of cutting-edge technology with Ariana, your new
            personal assistant! Seamlessly bridging the gap between your tasks
            and productivity, Ariana is ready to transform the way you work and
            elevate your efficiency to new heights.
          </h4>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <div id="3d-model-container"></div>
          <v-btn @click="speakIntro">Speak Intro</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax src="/img/bg1.jpg" fluid class="h-screen bg-black text-center">
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
              class="textarea ma-5"
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
    </v-parallax>
  </div>
</template>

<script setup>
const transcript = ref("Press Record To Start");
const isRecording = ref(false);
const recBtn = ref("Record");
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("");
let speech;

const speakIntro = () => {
  const introText =
    "Hai, I'm Ariana. Your Personal Assistant for Seamless Efficiency. Enough chit-chat, let me show u what i can do. Please click here to proceed";
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    // eslint-disable-next-line no-console
    console.error("SpeechSynthesisUtterance is currently speaking");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(introText);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.pitch = 1.2;
  synth.speak(utterance);
};

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
.bg {
  background: url("/img/Ariana.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.textarea {
  max-width: 50vw;
  max-height: 50vh;
  overflow: auto;
  /* background-color: black; */
}
</style>
