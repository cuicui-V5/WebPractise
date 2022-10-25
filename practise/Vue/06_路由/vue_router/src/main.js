import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueRouter from "vue-router";

const vueRouter = new VueRouter({});
new Vue({
    render: h => h(App),
    router: vueRouter,
}).$mount("#app");
