<script lang="ts">
	import HeroSection from './components/heroSection.svelte';
	import Navbar from './components/navbar.svelte';
	import Beneficios from './components/beneficios.svelte';
	import Mosaico from './components/mosaico.svelte';
	import Rentabilidad from './components/rentabilidad.svelte';
	import Footer from './components/footer.svelte';
</script>

<div class="w-full relative min-h-screen flex flex-col justify-center items-center">
	<HeroSection />
	<Navbar isWhite={true} more=" absolute " />

	<Beneficios />
	<Mosaico />
	<Rentabilidad />
	<Footer />
	<!-- <div class="flex justify-center items-center mt-4 rounded-lg w-[60rem] h-[30rem] bg-black">
		<Play color="#fff" size={50} />
	</div> -->

	<!-- <BeneficiosAmbientales />

	<BeneficiosEconomicosEmpresas />

	<BeneficiosEconomicosConsumidor />

	<Innovacion /> -->
</div>
