<script lang="ts">
	import { CircleArrowDown, Droplet } from 'lucide-svelte';
	import About from './components/about.svelte';
	import Market from './components/market.svelte';
	import Process from './components/process.svelte';
	import Finance from './components/finance.svelte';
	import Investors from './components/investors.svelte';

	function scrollToSection(selected: string) {
		const section = document.getElementById(selected);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="w-full min-h-screen flex flex-col justify-center items-center">
	<nav
		class="w-full flex justify-center h-12 items-center shadow-md fixed top-0 left-0 bg-white z-10"
	>
		<ul class="flex space-x-6 font-medium">
			<button
				onclick={() => scrollToSection('home')}
				class="hover:border-b-[2px] hover:border-[#4ea971]">Inicio</button
			>
			<button
				onclick={() => scrollToSection('tech')}
				class="hover:border-b-[2px] hover:border-[#4ea971]">Nuestra tecnologia</button
			>
			<button
				onclick={() => scrollToSection('market')}
				class="hover:border-b-[2px] hover:border-[#4ea971]">Analisis de mercado</button
			>
			<button
				onclick={() => scrollToSection('process')}
				class="hover:border-b-[2px] hover:border-[#4ea971]">Proceso de conversión</button
			>
			<button
				onclick={() => scrollToSection('finance')}
				class="hover:border-b-[2px] hover:border-[#4ea971]">Plan financiero</button
			>
			<button
				onclick={() => scrollToSection('investors')}
				class="hover:border-b-[2px] hover:border-[#4ea971]">Propuesta de valor</button
			>
		</ul>
	</nav>
	<div
		class="h-screen text-center flex justify-center items-center flex-col space-y-6 w-[35rem]"
		id="home"
	>
		<div class="flex space-x-1 justify-center">
			<h3 class="text-xl font-bold uppercase">Oil2Bio</h3>
			<Droplet color="#4ea971" />
		</div>
		<div>
			<h3 class="uppercase text-4xl font-extrabold w-[35rem]">
				Transformando residuos en <span class="text-[#4ea971]">energía</span> limpia.
			</h3>

			<p class="text-sm mt-2 text-muted-foreground">
				Oil2Bio convierte residuos petroleros en biocombustibles sostenibles. Colabora con compañías
				en Arabia Saudita y Kuwait, ofreciendo una solución innovadora y rentable.
			</p>
		</div>

		<!-- <Button class="bg-[#4ea971] w-1/4 text-xs hover:bg-[#70b389] ">Conocer más</Button> -->

		<CircleArrowDown
			color="#4ea971"
			class="animate-bounce cursor-pointer"
			size={40}
			onclick={() => scrollToSection('tech')}
		/>
	</div>

	<About />

	<Market />

	<Process />

	<Finance />

	<Investors />
</div>
