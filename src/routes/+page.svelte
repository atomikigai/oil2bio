<script lang="ts">
	import { ChartNoAxesCombined, Cpu, Link, MoveRight, Play, Sprout, Wallet } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import BeneficiosAmbientales from './components/beneficiosAmbientales.svelte';
	import BeneficiosEconomicosConsumidor from './components/beneficiosEconomicosConsumidor.svelte';
	import BeneficiosEconomicosEmpresas from './components/beneficiosEconomicosEmpresas.svelte';
	import Innovacion from './components/innovacion.svelte';
	import HeroSection from './components/heroSection.svelte';
	import Navbar from './components/navbar.svelte';
	import Beneficios from './components/beneficios.svelte';
</script>

<div class="w-full relative min-h-screen flex flex-col justify-center items-center">
	<HeroSection />
	<Navbar />

	<Beneficios />
	<!-- <div class="flex justify-center items-center mt-4 rounded-lg w-[60rem] h-[30rem] bg-black">
		<Play color="#fff" size={50} />
	</div> -->

	<!-- <BeneficiosAmbientales />

	<BeneficiosEconomicosEmpresas />

	<BeneficiosEconomicosConsumidor />

	<Innovacion /> -->
</div>
