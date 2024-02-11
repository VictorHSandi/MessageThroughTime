<template>
    <div class="static-container">
      <div class="static"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StaticEffect',
  };
  </script>
  
  <style>
  .static-container {
    position: relative;
    width: 200px;
    height: 200px;
  }
  
  .static {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.1;
    animation: static 5s infinite linear;
  }
  
  @keyframes static {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.1;
    }
  }
  </style>