import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Details from "../views/Details.vue";
import Checkout from "../views/Checkout.vue";
import Success from "../views/Success.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/Signup", name: "Signup", component: Signup },
	{ path: "/Signin", name: "Signin", component: Signin },
	{ path: "/Details", name: "Details", component: Details },
	{ path: "/Checkout", name: "Checkout", component: Checkout },
	{ path: "/Checkout", name: "Checkout", component: Checkout },
	{ path: "/Checkout", name: "Checkout", component: Checkout },
	{ path: "/Success", name: "Success", component: Success },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
