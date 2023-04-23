/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins

// router
import router from "../router";

// pinia
import { createPinia } from "pinia";

// axios
import axios from "axios";

// vue axios
import VueAxios from "vue-axios";

// axios config
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://staging.drhealthclinics.com/api/";
axios.defaults.headers.common["Accept-Language"] = "en";

export function registerPlugins(app) {
  app.use(router).use(createPinia()).use(VueAxios, axios);
}
