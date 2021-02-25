import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/Signup", name: "Signup", component: Signup },
	{ path: "/Signin", name: "Signin", component: Signin },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
