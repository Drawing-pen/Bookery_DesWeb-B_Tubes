import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MenuPage from "../pages/MenuPage.vue";
import LibraryPage from "../pages/LibraryPage.vue";
import StorePage from "../pages/StorePage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/menu',
        name: 'Menu',
        component: MenuPage
    },
    {
        path: '/library',
        name: 'Library',
        component: LibraryPage
    },
    {
        path: '/store',
        name: 'Store',
        component: StorePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutUsPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router