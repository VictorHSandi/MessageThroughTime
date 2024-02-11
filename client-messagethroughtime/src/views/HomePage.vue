<template>
  <div class="container">
    <div class="typed1">
      <h1>Welcome to Message through time</h1>
    </div>

    <div class="typed2">
      <p>add like a lot of info here to fill page</p>
    </div>

    <div>
      <MessageInput v-model="inputValue" type="text" label="Encrypt" />
    </div>
  </div>
</template>

<script>
import MessageInput from "@/components/MessageInput.vue";

export default {
  name: "HomePage",
  components: {
    MessageInput
  },
  data() {
    return {
      inputValue: "" //data to bind to input
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #000000; /* Black background */
  color: #01bd01; /* Green text color */
  text-align: center;
  font-family: "Audiowide", sans-serif; /* Use Audiowide font */
  font-size: 24px;
  flex-direction: column;
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: auto; /* Make the container width flexible */
  max-width: 90%; /* Limit the maximum width */
  margin: 0 auto; /* Center the container horizontally */
}

.typed1 {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 3s steps(30, end) forwards;
}

.typed2 {
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.5px solid transparent; /* Initially set border color to transparent */
  width: 0;
  animation: typing 2s 3s steps(30, end) forwards, blinking 1s 5s infinite; /* Start blinking animation after typing animation finishes (delayed by 3s) */
}

@keyframes typing {
  from { width: 0 }
  to { width: 85% }
}

@keyframes blinking {
  0% { border-color: transparent } /* Initially transparent */
  50% { border-color: #01bd01 } /* Change to green */
  25% { border-color: transparent } /* Back to transparent */
}
</style>

