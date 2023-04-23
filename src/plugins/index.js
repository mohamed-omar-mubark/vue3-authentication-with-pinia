/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins

// markRaw
import { markRaw } from "vue";

// router
import router from "../router";

// pinia
import { createPinia } from "pinia";
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

// axios
import "./axios";

export function registerPlugins(app) {
  app.use(router).use(pinia);
}
