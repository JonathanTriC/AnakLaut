<template>
	<Nav />
	<SearchResult />
	
	<Footer class="mt-6" />
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import SearchResult from "@/components/SearchResult.vue";
import Footer from "@/components/Footer.vue";
import detailsImg1 from "../assets/images/content/details-img_1.png";

export default {
	data: function() {
		return {
			detailsImg1: detailsImg1,
		};
	},
	name: "Search",
	components: {
		Nav,
		SearchResult,
		Footer,
	},
};
</script>
