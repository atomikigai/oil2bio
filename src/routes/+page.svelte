<script>
	import { Button } from '$lib/components/ui/button';
	import { Droplet } from 'lucide-svelte';
	import About from './components/about.svelte';
</script>

<div class="w-full min-h-screen flex flex-col justify-center items-center">
	<div class="h-screen text-center flex justify-center items-center flex-col space-y-6 w-[35rem]">
		<div class="flex space-x-1 justify-center">
			<h3 class="text-xl font-bold uppercase">Oil2Bio</h3>
			<Droplet color="#4ea971" />
		</div>
		<div>
			<h3 class="uppercase text-4xl font-extrabold w-[35rem]">
				Transformando residuos en <span class="text-[#4ea971]">energía</span> limpia.
			</h3>

			<p class="text-xs mt-2 text-muted-foreground">
				Oil2Bio convierte residuos petroleros en biocombustibles sostenibles. Colabora con compañías
				en Arabia Saudita y Kuwait, ofreciendo una solución innovadora y rentable.
			</p>
		</div>

		<Button class="bg-[#4ea971] w-1/4 text-xs hover:bg-[#70b389] ">Conocer más</Button>
	</div>

	<About />
</div>
