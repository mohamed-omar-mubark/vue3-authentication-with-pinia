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
import "./axios";

export function registerPlugins(app) {
  app.use(router).use(createPinia());
}
