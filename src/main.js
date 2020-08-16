import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// import { cryptoAssetSymbols } from "./config/config";
// console.log("cryptoAssetSymbols", cryptoAssetSymbols);

createApp(App)
  .use(store)
  .mount("#app");
