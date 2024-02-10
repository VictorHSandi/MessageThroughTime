<script>
import { RouterView } from 'vue-router';
import RectButton from './components/RectButton.vue';


export default {
  name: 'App',
  components: {
    RouterView,
    RectButton,
  }
}

</script>
<template>
  <div>
    <RouterView />
    <RectButton buttonText="Click me"></RectButton>
  </div>
</template>
<style>

#app {
  text-decoration-line: underline;
  text-align: center;
}
</style>
