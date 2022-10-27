import MyAbout from "../pages/MyAbout.vue";
import MyHome from "../pages/MyHome.vue";
import MyHome_1 from "../pages/MyHome_1.vue";
import MyHome_2 from "../pages/MyHome_2.vue";
import MyDetail from "../pages/MyDetail.vue";

import VueRouter from "vue-router";
export default new VueRouter({
    routes: [
        {
            path: "/MyAbout",
            component: MyAbout,
        },
        {
            name: "jia",
            path: "/MyHome",
            component: MyHome,
            children: [
                {
                    path: "1", //一定不能写/
                    component: MyHome_1,
                },
                {
                    path: "2",
                    component: MyHome_2,
                    children: [
                        {
                            name: "xiangqing",
                            path: "detail/:id/:tittle", //接收params参数
                            component: MyDetail,
                        },
                    ],
                },
            ],
        },
    ],
});
