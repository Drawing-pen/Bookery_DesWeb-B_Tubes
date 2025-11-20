import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MenuPage from "../pages/MenuPage.vue";
import LibraryPage from "../pages/LibraryPage.vue";
import StorePage from "../pages/StorePage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/menu',
        component: MenuPage
    },
    {
        path: '/library',
        component: LibraryPage
    },
    {
        path: '/store',
        component: StorePage
    },
    {
        path: '/about',
        component: AboutUsPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router