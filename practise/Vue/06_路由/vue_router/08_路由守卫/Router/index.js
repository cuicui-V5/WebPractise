import MyAbout from "../pages/MyAbout.vue";
import MyHome from "../pages/MyHome.vue";
import MyHome_1 from "../pages/MyHome_1.vue";
import MyHome_2 from "../pages/MyHome_2.vue";
import MyDetail from "../pages/MyDetail.vue";

import VueRouter from "vue-router";
const router = new VueRouter({
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
                    name: "home-1",
                    path: "1", //一定不能写/
                    component: MyHome_1,
                    meta: {
                        auth: true,
                    },
                },
                {
                    name: "home-2",
                    path: "2",
                    component: MyHome_2,
                    meta: {
                        auth: true,
                    },
                    children: [
                        {
                            name: "xiangqing",
                            path: "detail", //接收params参数
                            beforeEnter() {
                                alert("独享路由守卫");
                            },
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

// 全局前置路由守卫--传统写法
// router.beforeEach((to, from, next) => {
//     console.log(`从${from.path}到${to.path}`);
//     if (["/MyHome/1", "/MyHome/2"].includes(to.path)) {
//         if (localStorage.getItem("user") === "admin") {
//             next();
//         } else {
//             alert("无权限");
//         }
//     } else {
//         next();
//     }
// });

// 全局前置路由守卫--meta写法
router.beforeEach((to, from, next) => {
    console.log(`从${from.path}到${to.path}`);
    if (to.meta.auth) {
        if (localStorage.getItem("user") === "admin") {
            next();
        } else {
            alert("无权限");
        }
    } else {
        next();
    }
});
// 全局后置守卫
router.afterEach((to, from) => {
    console.log(`从${from.path}到${to.path}`);
    document.title = to.name;
});

export default router;
