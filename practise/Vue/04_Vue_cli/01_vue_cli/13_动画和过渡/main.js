import App from "./App.vue";
import Vue from "vue";

new Vue({
    el: ".root",
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
});
