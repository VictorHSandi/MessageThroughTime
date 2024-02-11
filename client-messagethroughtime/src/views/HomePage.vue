<template>
  <!-- <div>
    <StaticEffect />
  </div>
   -->
  <div class="container">
    
    <div class="WelcomeMessage">
      <h1>Welcome to Message through Time</h1>
    </div>

    <div class="PageInfo">
      <p>Type a message and click "Generate" to print your encrypted message!</p>
    </div>
    <!-- for encrypting -->
    <div class="window">
      <div class="tab">Encrypt Message</div>
        <div class="content">
          <div class="messagebox">
           <MessageInput type="text" label=""></MessageInput>
          </div>
        </div>
      </div>
    
      <br>
     
    <div class="window">
      <div class="tab">Decrypt Message</div>
      <div class="content">
        <div class="recieveMessage">
          <MessageImport type="text" label=""></MessageImport>
        </div>
      </div>
      
    </div>
    
  </div>
  <StaticEffect/>
</template>

<script>
import MessageInput from "@/components/MessageInput.vue";
import MessageImport from "@/components/MessageImport.vue";
import StaticEffect from '@/components/StaticEffect.vue';

export default {
  name: "HomePage",
  components: {
    MessageInput,
    MessageImport,
    StaticEffect,
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
.tab {
  background-color: green;
  padding: 5px 10px;
  border-top-left-radius: 5px;
  margin: 0;
}
.window {
  border: 2px solid green;
  border-radius: 5px;
  width: auto; /* Adjust width as needed */
}
.content {
  padding: 20px;
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