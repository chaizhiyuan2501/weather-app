﻿import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})