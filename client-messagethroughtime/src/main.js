import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);
axios.defaults.baseURL = "https://api.messagethroughtime.tech/api/v1/";
axios.defaults.withCredentials = true;
app.use(router);
app.mount("#app");
