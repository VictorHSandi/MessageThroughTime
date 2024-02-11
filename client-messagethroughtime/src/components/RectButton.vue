<template>
    <button class="rectangular-button" @click="handleClick">
      {{ buttonText }}
    </button>
  </template>
  
  <script>
  export default {
    name: "RectButton",
    props: {
      buttonText: {
        type: String,
        default: 'Click me' // Default button text
      },
      eventName: {
        type: String,
        default: "custom-click"
      }
    },
    methods: {
      handleClick() {
        // Handle button click event here
        console.log(this.eventName);
        this.$emit(this.eventName);
      }
    }
  }
  </script>
  
  <style scoped>
  .rectangular-button {
      background-color: #fffafa;
      border: 'black';
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
  