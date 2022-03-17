import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import "./app.css";

createApp(App).use(store).mount("#app");
