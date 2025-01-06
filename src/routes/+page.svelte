<script lang="ts">
	import {
		ChartNoAxesCombined,
		ChevronRight,
		CircleArrowDown,
		Cpu,
		Droplet,
		Menu,
		Play,
		Sprout
	} from 'lucide-svelte';
	import About from './components/about.svelte';
	import Market from './components/market.svelte';
	import Process from './components/process.svelte';
	import Finance from './components/finance.svelte';
	import Investors from './components/investors.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import MenuList from './components/menu-list.svelte';
	import Translator from '$lib/components/app/translator.svelte';
	import TranslatorText from '$lib/components/app/translatorText.svelte';
	import { selectedLanguage } from '$lib/components/app/store';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	let menu = $state(false);

	function scrollToSection(selected: string) {
		const section = document.getElementById(selected);
		if (section) {
			menu = false;
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="w-full min-h-screen flex flex-col justify-center items-center">
	<nav class="w-fit p-2 bg-white fixed top-0 right-10 mt-8 rounded-md">
		<Button variant="ghost" class="font-bold">Demo</Button>
		<Button variant="ghost" class="font-bold">Productos</Button>
		<Button variant="default" class="font-bold">Contacto</Button>
	</nav>

	<div
		class="h-[140vh] bg-cover text-center flex justify-center items-center flex-col w-full bg-[url('/new20.webp')]"
		id="home"
	>
		<h3 class="uppercase text-[3rem] font-extrabold text-white">
			Transformamos residuos <br /> en energía limpia
		</h3>

		<p class="text-xl text-white">
			Convertimos residuos petroleros en biocombustibles sostenibles. <br /> Ofrecemos soluciones
			innovadoras y rentables a empresas en Arabia Saudita y Kuwait, <br /> contribuyendo a un futuro
			más limpio y sostenible para la industria.
		</p>

		<div class="flex flex-row mt-[10%] space-x-4">
			<Card.Root class="w-[450px] bg-[#fff]  border-none">
				<Card.Content>
					<div class="w-full flex justify-end mb-4">
						<div class="flex items-center space-x-1 text-sm font-bold">
							<p>Aprender mas</p>
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

			<Card.Root class="w-[450px] bg-[#fff]  border-none">
				<Card.Content>
					<div class="w-full flex justify-end mb-4">
						<div class="flex items-center space-x-1 text-sm font-bold">
							<p>Aprender mas</p>
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

			<Card.Root class="w-[450px] bg-[#fff]  border-none">
				<Card.Content>
					<div class="w-full flex justify-end mb-4">
						<div class="flex items-center space-x-1 text-sm font-bold">
							<p>Aprender mas</p>
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

	<About />

	<Market />

	<Process />

	<Finance />

	<Investors />
</div>
