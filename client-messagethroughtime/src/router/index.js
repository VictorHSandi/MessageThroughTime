import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home-page.vue";

const router = createRouter({
   routes: [
    {
        path: "/",
        component: Home,
    },
   ]
});

export default router;