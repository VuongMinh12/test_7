import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import boostrap from "bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(router).use(boostrap).mount("#app");
