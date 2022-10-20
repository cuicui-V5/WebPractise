import App from "./App.vue";
import Vue from "vue";

import { mixin } from "./components/mixin.js";

Vue.mixin(mixin);

new Vue({
    el: ".root",
    render: h => h(App),
});
