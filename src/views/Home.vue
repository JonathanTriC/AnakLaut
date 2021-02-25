<template>
	<div class="home">
		<Nav />
		<Hero />
		<Banner class="mx-6 my-6" />
		<Category class="my-6" />
		<Special class="my-6" />
		<Popular class="my-6" />
		<Footer class="mt-6" />
	</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";
import Category from "@/components/Category.vue";
import Special from "@/components/Special.vue";
import Popular from "@/components/Popular.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Home",
	components: {
		Nav,
		Hero,
		Banner,
		Category,
		Special,
		Popular,
		Footer,
	},
};
</script>
