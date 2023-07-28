<template>
  <v-app class="bg-black fade-in">
    <NavBar />
    <HeroPage />
    <ResearchPage />
    <v-parallax
      height="100vh"
      src="https://cdn.dribbble.com/users/1373613/screenshots/5385718/media/53dcc789f5aa17d54d3912f7c2716ccd.gif"
      alt="Background Image"
      class="bg-black"
    >
      <v-row class="d-flex align-center fill-height pa-15">
        <v-col cols="12" md="6">
          <h1 class="text-h5 text-sm-h3 text-shadow text-no-wrap fade-in">
            Introducing Ariana: <br />
            Your Personal Assistant <br />
            for Seamless Efficiency!
          </h1>
          <h2
            class="text-subtitle-2 text-sm-h6 text-shadow subheading mt-10 text-justify fade-in"
          >
            Unlock the power of cutting-edge technology with Ariana, your new
            personal assistant! Seamlessly bridging the gap between your tasks
            and productivity, Ariana is ready to transform the way you work and
            elevate your efficiency to new heights.
          </h2>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-btn
            class="glow-on-hover"
            prepend-icon="mdi mdi-play"
            stacked
            variant="outlined"
            color="#01b5dc"
            size="x-large"
            @click="speakIntro"
            >Speak Intro</v-btn
          >
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax height="100vh" src="" class="bg-black">
      <v-row class="d-flex align-center fill-height">
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
  </v-app>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";
import HeroPage from "~/components/HeroPage.vue";
import ResearchPage from "~/components/ResearchPage.vue";

const transcript = ref("Press Record To Start");
const isRecording = ref(false);
const recBtn = ref("Record");
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("");
let fadeElements;
let speech;

onMounted(() => {
  setTimeout(() => {
    fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => element.classList.add("show"));
  }, 200);
});

const speakIntro = () => {
  const introText =
    "Hai, I'm Ariana. Your Personal Assistant for Seamless Efficiency. Allow me to guide u through this process. Please click here to proceed";
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
  box-shadow: 0 0 100px #01b5dc;
}

.outlined-text {
  /* Set the main text color */
  color: #fff;
  /* Set the outline color */
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
.textarea {
  max-width: 50vw;
  max-height: 50vh;
  overflow: auto;
  /* background-color: black; */
}
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.show {
  opacity: 1;
}
</style>
