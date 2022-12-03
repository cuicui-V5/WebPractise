import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/bar",
            name: "bar",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/bar.vue"),
        },
        {
            path: "/pie",
            name: "pie",
            component: () => import("../views/pie.vue"),
        },
        {
            path: "/line",
            component: () => import("../views/line.vue"),
        },
        {
            path: "/scatter",
            component: () => import("../views/scatter.vue"),
        },
        {
            path: "/candlerStick",
            component: () => import("../views/candlerStick.vue"),
        },
        {
            path: "/radar",
            component: () => import("../views/radar.vue"),
        },
        {
            path: "/funnel",
            component: () => import("../views/Funnel.vue"),
        },
        {
            path: "/gauge",
            component: () => import("../views/gauge.vue"),
        },
        {
            path: "/tree",
            component: () => import("../views/tree.vue"),
        },
    ],
});

export default router;
