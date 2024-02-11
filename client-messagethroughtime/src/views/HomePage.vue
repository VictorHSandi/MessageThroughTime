<template>
  <canvas ref="canvas"></canvas>
  <div class="container">
    <div class="WelcomeMessage">
      <h1>Welcome to Message through time</h1>
    </div>

    <div class="PageInfo">
      <p>add like a lot of info here to fill page</p>
    </div>
    <!-- for encrypting -->
    <div class="window">
      <div class="content">
        <div class="messagebox">
          <MessageInput type="text" label="Encrypt"></MessageInput>
        </div>
        <div class="recieveMessage">
          <MessageImport type="text" label="Decrypt Message"></MessageImport>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import MessageInput from "@/components/MessageInput.vue";
import MessageImport from "@/components/MessageImport.vue";

export default {
  name: "HomePage",
  components: {
    MessageInput,
    MessageImport,
  },
  data() {
    return {
      inputValue: "" //data to bind to input
    }
  },
  methods: {
    generateNoise() {
      this.noise = document.createElement('canvas')
      this.noise.height = window.innerHeight * 2
      this.noise.width  = window.innerWidth * 2
      let noiseContext = this.noise.getContext('2d')
      let noiseData = noiseContext.createImageData(
        this.noise.width,
        this.noise.height
      )
      let buffer32 = new Uint32Array(noiseData.data.buffer)
      let len = buffer32.length - 1
      while (len--) {
        buffer32[len] = Math.random() < 0.5 ? 0 : -1 >> 0
      }
      noiseContext.putImageData(noiseData, 0, 0)
    },
    moveNoise() {

    },
    mounted() {

    }
  }
};
</script>

<style scoped>
.container {
  flex-direction: column;
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: auto; /* Make the container width flexible */
  max-width: 90%; /* Limit the maximum width */
  margin: 0 auto; /* Center the container horizontally */
}
.window {
  border: 2px solid green;
  border-radius: 5px;
  width: 300px; /* Adjust width as needed */
}
.canvas{
  height: 100%;
  left: 0;
  mix-blend-mode: soft-light;
  opacity: 0.25;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100000;
}
.WelcomeMessage {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  font-size: 24px;
  animation: typing 3s steps(30, end) forwards;
}

.PageInfo {
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.25em solid transparent; /* Specify a thin border */
  width: 0;
  animation: typing 2s 3s steps(30, end) forwards; /* Start blinking animation after typing animation finishes (delayed by 3s) */
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

</style>