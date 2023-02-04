import { createWebHistory, createRouter } from "vue-router";
import home from "./pages/home.vue";
import dashbord from "./pages/dashbord.vue";
import login from "./pages/login.vue";
import registr from "./pages/registr.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/dashbord",
        name: "dashbord",
        component: dashbord,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/registr",
        name: "registr",
        component: registr,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
