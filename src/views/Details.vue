<template>
	<div class="details">
		<Nav />
		<section class="container mx-auto">
			<div class="flex flex-wrap my-4 md:my-12">
				<div class="w-full md:hidden px-4">
					<h2 class="text-4xl text-blue-900 font-semibold">Kepiting Mantul</h2>
					<span class="text-xl">IDR 50.000</span>
				</div>
				<div class="flex-1">
					<div class="slider">
						<div class="preview">
							<div class="item rounded-lg h-full overflow-hidden">
								<img
									:src="detailsImg1"
									alt=""
									class="object-cover w-full h-full rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-1 px-4 md:p-6">
					<div class="hidden md:block">
						<h2 class="text-5xl text-blue-900 font-semibold mt-5 mb-5">
							Kepiting Mantul
						</h2>
						<div class="relative pt-3 pb-6">
							<div class="relative flex">
								<p class="text-xl font-semibold text-blue-900 mr-2">4.0</p>
								<img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
								<img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
								<img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
								<img class="relative w-6 h-6 mr-1" :src="starYellow" alt="" />
								<img class="relative w-6 h-6 mr-2" :src="starGray" alt="" />
								<p class="text-gray-300 flex text-xl font-medium mr-2">|</p>
								<p class="text-blue-900 flex text-xl font-medium mr-2">50</p>
								<p class="text-gray-300 flex text-xl font-medium mr-2">Terjual</p>
							</div>
						</div>
						<div class="flex flex-wrap">
							<p class="text-2xl font-medium text-gray-300 line-through mb-2">
								IDR 100.000
							</p>
							<span
								class="w-auto px-3 py-2 ml-2 rounded-md bg-blue-700 text-sm font-light text-white"
								>50% Off</span
							>
						</div>
						<p class="text-5xl font-medium text-blue-700">IDR 50.000/kg</p>
					</div>

					<div class="py-6">
						<p class="text-gray-300 flex text-xl font-medium mb-1">Pengiriman</p>
						<p class="text-blue-900 flex text-2xl font-medium mb-1">
							Kota Jakarta Barat
							<span class="px-2 py-1"
								><svg
									width="20"
									height="15"
									viewBox="0 0 22 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.738 0.676406V4.72441L11.02 16.3164L0.394001 4.72441V0.676406L11.02 12.2684L21.738 0.676406Z"
										fill="#C7C7C7"
									/>
								</svg>
							</span>
						</p>
						<p class="text-black flex text-xl font-normal mb-1">
							Rp.0 - RP.15,000
							<span class="px-2 py-1"
								><svg
									width="20"
									height="15"
									viewBox="0 0 22 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.738 0.676406V4.72441L11.02 16.3164L0.394001 4.72441V0.676406L11.02 12.2684L21.738 0.676406Z"
										fill="#C7C7C7"
									/>
								</svg>
							</span>
						</p>
					</div>

					<div class="py-4">
						<p class="text-gray-300 flex text-xl font-medium mb-1">Kuantitas</p>
						<div
							class="flex flex-row border h-10 w-56 rounded-lg border-gray-300 relative"
						>
							<button
								class="font-semibold border-r bg-white hover:bg-gray-300 text-blue-900 border-gray-300 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
							>
								<span class="m-auto">-</span>
							</button>
							<input
								type="hidden"
								class="md:p-2 p-1 text-xs md:text-base border-gray-300 focus:outline-none text-center"
								readonly
								name="custom-input-number"
							/>
							<div
								class="bg-white w-56 text-xs md:text-base flex items-center justify-center cursor-default"
							>
								<span>1</span>
							</div>

							<button
								class="font-semibold border-l  bg-white hover:bg-gray-300 text-blue-900 border-gray-300 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
							>
								<span class="m-auto">+</span>
							</button>
						</div>
					</div>

					<div class="mr-3 flex flex-wrap py-4">
						<form method="" action="/" class="flex-none my-2">
							<button type="submit" class="btn btn-secondary px-6 ml-4">
								Kirim Pesan
							</button>
						</form>
						<form method="" action="/" class="flex-none my-2">
							<button type="submit" class="btn btn-primary px-6 ml-4">
								Beli Sekarang
							</button>
						</form>
					</div>
				</div>
			</div>
			<div class="w-100 pb-2">
				<h6 class="text-xl font-semibold mb-4">About the product:</h6>
				<p class="text-xl leading-7 mb-2">
					Kepiting adalah binatang anggota krustasea berkaki sepuluh dari upabangsa
					(infraordo) Brachyura, yang dikenal mempunyai "ekor" yang sangat pendek
					(bahasa Yunani: brachy = pendek, ura = ekor), atau yang perutnya (abdomen)
					sama sekali tersembunyi di bawah dada (thorax). Tubuh kepiting dilindungi
					oleh cangkang yang sangat keras, tersusun dari kitin, dan dipersenjatai
					dengan sepasang capit. Ketam adalah nama lain bagi kepiting.
				</p>
				<p class="text-xl leading-7 mb-6">
					Kepiting terdapat di semua samudra dunia. Ada pula kepiting air tawar dan
					darat, khususnya di wilayah-wilayah tropis.
				</p>
			</div>

			<div class="w-100 px-6 py-3 border-2 border-gray-300 rounded-xl">
				<h1 class="text-3xl font-semibold text-blue-900 pb-4">
					Toko
				</h1>
				<div class="flex flex-wrap">
					<div class="">
						<img :src="tokoImg" alt="" class="px-4 w-50 h-50" />
						<p class="text-xl font-semibold py-2">Nelayan Kece</p>
					</div>
					<div class="mx-3 my-6">
						<p class="text-xl font-medium text-gray-300">Penilaian</p>
						<p class="text-xl font-medium text-blue-600">100RB</p>
					</div>
					<div class="mx-3 my-6">
						<p class="text-xl font-medium text-gray-300">Produk</p>
						<p class="text-xl font-medium text-blue-600">150</p>
					</div>
					<div class="mx-3 my-6">
						<p class="text-xl font-medium text-gray-300">Bergabung</p>
						<p class="text-xl font-medium text-blue-600">1THN</p>
					</div>
					<div class="mx-3 my-6">
						<p class="text-xl font-medium text-gray-300">Pengikut</p>
						<p class="text-xl font-medium text-blue-600">100JT</p>
					</div>
				</div>
			</div>
		</section>
		<Footer class="mt-6" />
	</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import detailsImg1 from "../assets/images/content/details-img_1.png";
import starYellow from "../assets/images/design/star-yellow.png";
import starGray from "../assets/images/design/star-gray.png";
import tokoImg from "../assets/images/content/toko-img.png";

export default {
	data: function() {
		return {
			detailsImg1: detailsImg1,
			starYellow: starYellow,
			starGray: starGray,
			tokoImg: tokoImg,
		};
	},
	name: "Details",
	components: {
		Nav,
		Footer,
	},
};
</script>
