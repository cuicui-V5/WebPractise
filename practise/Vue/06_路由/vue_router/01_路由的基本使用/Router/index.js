import MyAbout from "../pages/MyAbout.vue";
import MyHome from "../pages/MyHome.vue";

import VueRouter from "vue-router";
export default new VueRouter({
    routes: [
        {
            path: "/MyAbout",
            component: MyAbout,
        },
        {
            path: "/MyHome",
            component: MyHome,
        },
    ],
});
