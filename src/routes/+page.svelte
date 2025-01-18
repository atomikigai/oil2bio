<script lang="ts">
	import { ChartNoAxesCombined, Cpu, Link, Play, Sprout, Wallet } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import BeneficiosAmbientales from './components/beneficiosAmbientales.svelte';
	import BeneficiosEconomicosConsumidor from './components/beneficiosEconomicosConsumidor.svelte';
	import BeneficiosEconomicosEmpresas from './components/beneficiosEconomicosEmpresas.svelte';
</script>

<div class="w-full min-h-screen flex flex-col justify-center items-center">
	<nav class="w-fit p-2 bg-white shadow-md border fixed top-0 right-10 mt-8 rounded-md">
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

		<div class="flex justify-center items-center mt-4 rounded-lg w-[60rem] h-[30rem] bg-black">
			<Play color="#fff" size={50} />
		</div>

		<div class="my-12 space-x-4 flex items-center">
			<Button variant="outline" class="font-bold text-xl p-6  border-dashed border-2 ">
				<Wallet class="mr-2" />
				Invierte con nosotros</Button
			>
		</div>

		<div class="flex flex-row space-x-4">
			<Card.Root class="w-[450px] bg-[#fff]">
				<Card.Content>
					<div class="w-full flex justify-end mb-4">
						<div class="flex items-center space-x-1 text-sm font-bold">
							<p>Aprender más</p>
							<Play size="16" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<Cpu class="mb-4" />
						<h3 class="font-bold text-xl uppercase">Tecnología avanzada</h3>
						<p class="mt-2 text-sm">
							Transforma residuos petroleros en biocombustibles limpios usando tecnologías de punta.
						</p>
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root class="w-[450px] bg-[#fff]">
				<Card.Content>
					<div class="w-full flex justify-end mb-4">
						<div class="flex items-center space-x-1 text-sm font-bold">
							<p>Aprender más</p>
							<Play size="16" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<Sprout class="mb-4" />

						<h3 class="font-bold text-xl uppercase">Impacto ambiental</h3>
						<p class="mt-2 text-sm">
							Reduce la carga ambiental y económica de las refinerías petroleras.
						</p>
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root class="w-[450px] bg-[#fff]">
				<Card.Content>
					<div class="w-full flex justify-end mb-4">
						<div class="flex items-center space-x-1 text-sm font-bold">
							<p>Aprender más</p>
							<Play size="16" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<ChartNoAxesCombined class="mb-4" />
						<h3 class="font-bold text-xl uppercase">Demanda Creciente</h3>
						<p class="mt-2 text-sm">
							Ofrece un producto de alta demanda en un mercado en transición energética.
						</p>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>

	<BeneficiosAmbientales />

	<BeneficiosEconomicosEmpresas />

	<BeneficiosEconomicosConsumidor />
</div>
