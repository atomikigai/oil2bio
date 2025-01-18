<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Sprout } from 'lucide-svelte';

	let items = $state({
		one: true,
		two: false,
		three: false
	});
</script>

<div class="p-12">
	<div class="my-4">
		<div class="text-4xl font-bold flex items-center space-x-4">
			<Sprout color="#72c488" size={50} />
			<h3>Beneficios ambientales</h3>
		</div>
		<p class="text-muted-foreground">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt quos temporibus earum
			nostrum facere consequatur, ipsum tenetur eaque eos cum voluptatum voluptatibus cupiditate
			saepe labore quasi ex ipsam ipsa.
		</p>
	</div>

	<div class="flex flex-row space-x-4">
		<div class="flex flex-col items-start p-6 !shadow-none border-t rounded-none">
			<p class="font-bold text-lg">Reducción de emisiones</p>
			<p>Fin uses all of your support knowledge to generate.</p>
		</div>
		<div class="px-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa reprehenderit
			cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius doloremque vel? Minima
			beatae culpa nobis illo.
		</div>
	</div>

	<div class="flex flex-row space-x-4">
		<div class="flex flex-col items-start p-6 !shadow-none border-t rounded-none">
			<p class="font-bold text-lg">Gestión eficiente de residuos</p>
			<p>Fin uses all of your support knowledge to generate.</p>
		</div>
		<div class="px-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa reprehenderit
			cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius doloremque vel? Minima
			beatae culpa nobis illo.
		</div>
	</div>

	<div class="flex flex-row space-x-4">
		<div class="flex flex-col items-start p-6 !shadow-none border-t border-b rounded-none">
			<p class="font-bold text-lg">Fomento de la economía circular</p>
			<p>Fin uses all of your support knowledge to generate.</p>
		</div>
		<div class="px-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa reprehenderit
			cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius doloremque vel? Minima
			beatae culpa nobis illo.
		</div>
	</div>
</div>
