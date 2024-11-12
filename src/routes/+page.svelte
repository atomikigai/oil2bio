<script lang="ts">
	import { CircleArrowDown, Droplet, Menu } from 'lucide-svelte';
	import About from './components/about.svelte';
	import Market from './components/market.svelte';
	import Process from './components/process.svelte';
	import Finance from './components/finance.svelte';
	import Investors from './components/investors.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import MenuList from './components/menu-list.svelte';

	let menu = false;

	function scrollToSection(selected: string) {
		const section = document.getElementById(selected);
		if (section) {
			menu = false;
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="w-full min-h-screen flex flex-col justify-center items-center">
	<!-- Menu para computadoras -->
	<nav
		class="w-full lg:flex hidden justify-center h-12 items-center shadow-md fixed top-0 left-0 bg-white z-10"
	>
		<MenuList {scrollToSection} />
	</nav>

	<!-- Menu para moviles -->

	<nav class="lg:hidden w-full h-12 flex items-center px-4">
		<button onclick={() => (menu = !menu)}>
			<Menu />
		</button>

		<Sheet.Root open={menu} onOpenChange={() => (menu = !menu)}>
			<Sheet.Content side="left">
				<MenuList {scrollToSection} />
			</Sheet.Content>
		</Sheet.Root>
	</nav>

	<div
		class="h-screen text-center flex justify-center items-center flex-col space-y-6 2xl:w-[35rem] w-full px-4"
		id="home"
	>
		<div class="flex space-x-1 justify-center w-full">
			<h3 class="text-xl font-bold uppercase">Oil2Bio</h3>
			<Droplet color="#4ea971" />
		</div>
		<div class="w-full">
			<h3 class="uppercase 2xl:text-4xl font-extrabold 2xl:w-[35rem] text-xl">
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
