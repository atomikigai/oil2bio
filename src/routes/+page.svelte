<script lang="ts">
	import { ChartNoAxesCombined, Cpu, Link, MoveRight, Play, Sprout, Wallet } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import BeneficiosAmbientales from './components/beneficiosAmbientales.svelte';
	import BeneficiosEconomicosConsumidor from './components/beneficiosEconomicosConsumidor.svelte';
	import BeneficiosEconomicosEmpresas from './components/beneficiosEconomicosEmpresas.svelte';
	import Innovacion from './components/innovacion.svelte';
</script>

<div class="w-full min-h-screen flex flex-col justify-center items-center">
	<nav class="w-fit p-2 bg-white shadow-sm border fixed top-0 right-10 mt-8 rounded-md">
		<Button variant="ghost" class="font-bold">Sobre nosotros</Button>
		<Button variant="ghost" class="font-bold">Proyecto</Button>
		<Button variant="ghost" class="font-bold">Inversores</Button>
		<Button variant="ghost" class="font-bold">Noticias</Button>
		<Button variant="default" class="font-bold">Contacto</Button>
	</nav>

	<div
		class="h-[140vh] bg-cover text-center flex justify-center items-center flex-col w-full"
		id="home"
	>
		<h3 class="uppercase text-[3rem] font-extrabold">
			Transformamos residuos <br /> en energía limpia
		</h3>

		<p class="text-xl">
			Convertimos residuos petroleros en biocombustibles sostenibles. <br /> Ofrecemos soluciones
			innovadoras y rentables a empresas en Arabia Saudita y Kuwait, <br /> contribuyendo a un futuro
			más limpio y sostenible para la industria.
		</p>

		<div class="my-12 space-x-4 flex items-center">
			<Button
				variant="outline"
				class="font-bold text-xl p-6  bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white "
			>
				Invierte con nosotros <MoveRight class="ml-2" /></Button
			>
		</div>

		<div class="flex justify-center items-center mt-4 rounded-lg w-[60rem] h-[30rem] bg-black">
			<Play color="#fff" size={50} />
		</div>
	</div>

	<!-- <BeneficiosAmbientales />

	<BeneficiosEconomicosEmpresas />

	<BeneficiosEconomicosConsumidor />

	<Innovacion /> -->
</div>
