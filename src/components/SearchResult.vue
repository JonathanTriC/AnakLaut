<template>
	<h1 class="flex mx-8 mt-4 text-2xl text-bold text-blue-900">
		Hasil Pencarian Anda
	</h1>
	<div class="flex flex-warp">
		<div
			class="flex flex-wrap w-80 h-86 mx-8 my-6 p-4 bg-gray-50 rounded-lg hidden md:block"
		>
			<div class="">
				<h1 class="mt-2 text-xl text-bold text-blue-900">Filters</h1>
				<!-- start lokasi -->
				<h1 class="my-2 text-lg text-bold text-blue-900">Lokasi</h1>
				<!-- start jakarta -->
				<label
					class="select-none container block relative cursor-pointer text-xl pl-8"
					>Jakarta
					<input
						class="absolute opacity-0 left-0 top-0 cursor-pointer"
						type="checkbox"
					/>
					<span
						class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
					></span>
				</label>
				<!-- end jakarta -->
				<!-- start Bekasi -->
				<label
					class="select-none container block relative cursor-pointer text-xl pl-8"
					>Bekasi
					<input
						class="absolute opacity-0 left-0 top-0 cursor-pointer"
						type="checkbox"
					/>
					<span
						class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
					></span>
				</label>
				<!-- end Bekasi -->
				<!-- start Bogor -->
				<label
					class="select-none container block relative cursor-pointer text-xl pl-8"
					>Bogor
					<input
						class="absolute opacity-0 left-0 top-0 cursor-pointer"
						type="checkbox"
					/>
					<span
						class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
					></span>
				</label>
				<!-- end Bogor -->
			</div>
			<!-- end lokasi -->

			<!-- start pembayaran -->
			<div class="">
				<h1 class="my-2 text-lg text-bold text-blue-900">Pembayaran</h1>
				<!-- start cod -->
				<label
					class="select-none container block relative cursor-pointer text-xl pl-8"
					>COD (Cash On Delivery)
					<input
						class="absolute opacity-0 left-0 top-0 cursor-pointer"
						type="checkbox"
					/>
					<span
						class="h-6 w-6 checkmark absolute top-0 left-0 border-2 border-gray-400"
					></span>
				</label>
				<!-- end cod -->
			</div>
			<!-- end pembayaran -->

			<div class="my-6">
				<button type="submit" class="btn btn-primary px-24 mx-3 md:mx-0">
					Terapkan
				</button>
			</div>
		</div>

		<!-- start produk -->
		<div class="mx-6 md:mx-0 flex flex-wrap">
			<!-- start ikan -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="ikanTongkol" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Ikan Tongkol</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 15.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end ikan -->

			<!-- start kepiting -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="kepitingRajungan" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-lg font-semibold -mb-1"
						>Kepiting Rajungan</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 40.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end kepiting -->

			<!-- start lobster -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="lobsterPasir" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Lobster Pasir</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 10.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end lobster -->

			<!-- start udang -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="udangJerbung" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Udang Jerbung</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 25.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end udang -->

			<!-- start cumi -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="cumiCumi" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1">Cumi-cumi</span>
					<span class="block text-black text-md font-light -mb-1">RP. 10.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end cumi -->

			<!-- start ikan -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="ikanTongkol" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Ikan Tongkol</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 15.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end ikan -->

			<!-- start kepiting -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="kepitingRajungan" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-lg font-semibold -mb-1"
						>Kepiting Rajungan</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 40.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end kepiting -->

			<!-- start lobster -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="lobsterPasir" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Lobster Pasir</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 10.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end lobster -->

			<!-- start udang -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="udangJerbung" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1"
						>Udang Jerbung</span
					>
					<span class="block text-black text-md font-light -mb-1">RP. 25.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end udang -->

			<!-- start cumi -->
			<div
				class="flex-shrink-0 my-2 md:my-6 mx-2 relative overflow-hidden h-64 rounded-lg max-w-xs bg-white border border-gray-100"
			>
				<div class="relative flex items-center justify-center">
					<img class="relative w-48 h-32 p-3" :src="cumiCumi" alt="" />
				</div>
				<div class="relative text-white px-6 py-5">
					<span class="block text-black text-xl font-semibold -mb-1">Cumi-cumi</span>
					<span class="block text-black text-md font-light -mb-1">RP. 10.000</span>
				</div>
				<div class="relative px-3 py-1 border-t border-gray-100">
					<div class="relative flex items-end justify-end">
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4 mr-1" :src="starYellow" alt="" />
						<img class="relative w-4" :src="starGray" alt="" />
					</div>
					<span
						class="block text-black flex items-end justify-end text-md font-light"
						>Jakarta Timur</span
					>
				</div>
				<a href="/details" class="stretched-link">
					<!-- fake children -->
				</a>
			</div>
			<!-- end cumi -->
		</div>
		<!-- end produk -->
	</div>
</template>

<style>
.container:hover input ~ .checkmark {
}

.container input:checked ~ .checkmark {
	background-color: #0078d4;
}

.checkmark:after {
	content: "";
	position: absolute;
	display: none;
}

.container input:checked ~ .checkmark:after {
	display: block;
}

.container .checkmark:after {
	left: 7px;
	top: 3px;
	width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
</style>

<script>
// @ is an alias to /src
import ikanTongkol from "../assets/images/content/ikan-tongkol.png";
import kepitingRajungan from "../assets/images/content/kepiting-rajungan.png";
import lobsterPasir from "../assets/images/content/lobster-pasir.png";
import cumiCumi from "../assets/images/content/cumi-cumi.png";
import udangJerbung from "../assets/images/content/udang-jerbung.png";
import starYellow from "../assets/images/design/star-yellow.png";
import starGray from "../assets/images/design/star-gray.png";

export default {
	data: function() {
		return {
			ikanTongkol: ikanTongkol,
			kepitingRajungan: kepitingRajungan,
			lobsterPasir: lobsterPasir,
			cumiCumi: cumiCumi,
			udangJerbung: udangJerbung,
			starYellow: starYellow,
			starGray: starGray,
		};
	},
	name: "Filters",
};
</script>
