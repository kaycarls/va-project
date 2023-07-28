<template>
  <v-container id="id-product" fluid="h-screen">
    <v-parallax
      height="100%"
      src="https://cdn.dribbble.com/users/1373613/screenshots/5385718/media/53dcc789f5aa17d54d3912f7c2716ccd.gif"
      alt="Background Image"
      class="bg-black d-flex align-center px-15"
    >
      <v-row class="mt-15">
        <v-col cols="12" md="6" class="mt-15">
          <h1 class="text-h5 text-sm-h3 text-shadow text-no-wrap">
            Introducing Ariana: <br />
            Your Personal Assistant <br />
            for Seamless Efficiency!
          </h1>
          <h2
            class="text-subtitle-2 text-sm-h6 text-shadow subheading mt-10 text-justify"
          >
            Unlock the power of cutting-edge technology with Ariana, your new
            personal assistant! Seamlessly bridging the gap between your tasks
            and productivity, Ariana is ready to transform the way you work and
            elevate your efficiency to new heights.
          </h2>
        </v-col>
        <v-col cols="12" md="6" class="mt-15 text-center">
          <v-btn
            class="glow-on-hover ma-5"
            prepend-icon="mdi mdi-play"
            stacked
            variant="outlined"
            color="success"
            size="x-large"
            @click="speakIntro"
            >Speak</v-btn
          >
          <v-btn
            class="glow-on-hover ma-5"
            prepend-icon="mdi mdi-record"
            stacked
            variant="outlined"
            color="red"
            size="x-large"
            @click="handleRecording"
            >{{ recBtn }}</v-btn
          >
          <div class="mt-15">
            <v-textarea
              v-model="transcript"
              variant="outlined"
              bg-color="grey-lighten-2"
              clearable
              auto-grow
              class="my-sm-5 mx-sm-15"
            ></v-textarea>
            <v-btn class="text-none ma-5" color="blue" @click="handleSearch">
              Search Google
              <v-icon end icon="mdi mdi-google"></v-icon>
            </v-btn>
            <v-btn
              class="text-none ma-5"
              color="white"
              variant="outlined"
              @click="handleCopy"
            >
              Copy Text
              <v-icon end icon="mdi mdi-content-copy"></v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="snackbar"
        class="ma-10"
        variant="tonal"
        :color="snackbarColor"
      >
        <p class="text-center">{{ snackbarText }}</p>
      </v-snackbar>
    </v-parallax>
  </v-container>
</template>

<script setup>
const isRecording = ref(false);
const recBtn = ref("Record");
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("");
const transcript = ref(
  "Hi, I'm Ariana. Your Personal Assistant for Seamless Efficiency!",
);
let speech;

const speakIntro = () => {
  const introText = transcript.value;
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    // eslint-disable-next-line no-console
    console.error("Ariana is currently speaking");
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

<style>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}
.glow-on-hover {
  transition: box-shadow 0.3s ease;
}
.glow-on-hover:hover {
  box-shadow: 0 0 100px #02f3fd;
}
.outlined-text {
  color: #fff;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
