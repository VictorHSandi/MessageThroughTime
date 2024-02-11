import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import HomePageTest from "../views/HomePageTest.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: "/",
        component: HomePage,
    },
    //a page for testing ideas
    {
        path: "/test",
        component: HomePageTest,
    }
    
   ]
});

export default router;