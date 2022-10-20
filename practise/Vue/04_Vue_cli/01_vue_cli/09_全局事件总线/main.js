import Vue from "vue";
import App from "./App.vue";

new Vue({
    el: ".root",
    render: h => h(App),
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
});
