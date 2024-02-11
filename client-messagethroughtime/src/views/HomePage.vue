<template>
    <div class="container">
      <div class="title">
        <h1 class="typed">Welcome to Message through time</h1> 
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #000000; /* Black background */
    color: #01bd01; /* Green text color */
    text-align: center;
    font-family: "Audiowide", sans-serif; /* Use Audiowide font */
    font-size: 24px;
    display: flex; /* Use flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    width: auto; /* Make the container width flexible */
    max-width: 90%; /* Limit the maximum width */
    margin: 0 auto; /* Center the container horizontally */
  }
  
  .typed {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid;
    width: 0;
    animation: typing 1.5s steps(30, end) forwards, blinking 1s infinite;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blinking {
    0% { border-color: transparent }
    50% { border-color: #01bd01 }
    100% { border-color: transparent }
  }
  </style>
  
  