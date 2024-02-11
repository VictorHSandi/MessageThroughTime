<template>
  <div class="container">
    <div class="WelcomeMessage">
      <h1>Welcome to Message through time</h1>
    </div>

    <div class="PageInfo">
      <p>add like a lot of info here to fill page</p>
    </div>

    <div>
      <MessageInput v-model="inputValue" type="text" label="Encrypt" />
    </div>
  </div>
</template>

<script>
// import MessageInput from "@/components/MessageInput.vue";

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
  flex-direction: column;
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: auto; /* Make the container width flexible */
  max-width: 90%; /* Limit the maximum width */
  margin: 0 auto; /* Center the container horizontally */
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