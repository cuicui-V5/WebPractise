import App from "./App.vue";
import Vue from "vue";

import { plugin } from "./plugins/plugin";

Vue.use(plugin);

new Vue({
    el: ".root",
    render: h => h(App),
});
