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
                            // 第一种写法, 传递固定数据
                            // props: {
                            //     id: 12342,
                            //     tittle: "hello world",
                            // },

                            // 第二种写法, 设置为true, 将parmas传入props
                            // props: true,

                            // 第三种写法, 函数式, 靠返回值决定返回传递内容
                            // props(route) { //正常写法
                            props({ query: { id, tittle } }) {
                                //解构赋值写法
                                return {
                                    id,
                                    tittle,
                                };
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
