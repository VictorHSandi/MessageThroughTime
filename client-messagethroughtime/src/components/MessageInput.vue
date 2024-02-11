<!-- reuseable input form -->
<template>
  <div class="container">
    <div class="label">
      <label :for="inputId">{{ label }}</label>
    </div>
    <div class="box">
      <div class="input">
        <textarea
          :id="inputId"
          :type="type"
          :label="label"
          @input="handleInput"
          v-model="messageValue"
        />
      </div>
    </div>
    <button class="rectangular-button" @click="handleClick">Generate</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MessageInput",
  props: {
    value: String,
    type: {
      type: String,
      default: "text",
    },
    label: String, //label for input
  },
  //input types
  data() {
    return {
      inputId: `custom-input-${Math.random().toString(36).substr(2, 10)}`,
      messageValue: "",
      maxCharacters: 68,
    };
  },
  methods: {
    //this is for the textarea
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    //submit the thing and do the axios here
    //this is for button
    handleClick() {
      console.log(this.messageValue);
      //open websocket connection
      const socket = new WebSocket("ws://api.messagethroughtime.tech");
      socket.onopen = event => {
        console.log("Websocket connection opened:", event);
      }
      //check for errors
      socket.onerror = (error) => {
        console.log("Websocket error:", error);
      }
      socket.onclose = event => {
        console.log("Websocket connection closed:", event);
      }
      axios({
        method: "get",
        url: "/pdf/generate",
        data: {
          message: this.message,
        },
      })
        .then((res) => {
          // Display the PDF
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //CHARACTER LIMIT!!
    checkCharacterLimit() {
        if (this.message.length > this.maxCharacters) {
            this.message = this.message.substr(0, this.maxCharacters);
        }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.label {
  justify-content: left;
}
/* container for the terminal */
.box {
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  width: 400px;
  max-width: 100%;
}
/* text of the terminal */
.input textarea {
  text-align: left;
  font-size: 20px;
  background: transparent;
  border: none;
  outline: none;
  color: #01bd01;
  font-family: monospace;
  width: calc(100% - 25px);
  height: 30vh;
}
.rectangular-button {
  background-color: #fffafa;
  border: "black";
  color: rgb(0, 0, 0);
  padding: 10px 25px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; /* Adjust to change button corner radius */
  font-family: "Audiowide", sans-serif;
}
</style>
