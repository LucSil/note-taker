import { createApp } from "vue";
import App from "./App.vue";
import "./app.css";
import mitt from "mitt";
const emitter = mitt();
export default emitter;

createApp(App).mount("#app");
