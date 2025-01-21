<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { BadgeCheck, Boxes, Landmark, Sprout, Trash } from 'lucide-svelte';

	let items = $state({
		one: true,
		two: false,
		three: false
	});

	function handleShow(item: string) {
		if (item === 'one') {
			items = {
				one: true,
				two: false,
				three: false
			};
		}

		if (item === 'two') {
			items = {
				one: false,
				two: true,
				three: false
			};
		}

		if (item === 'three') {
			items = {
				one: false,
				two: false,
				three: true
			};
		}
	}
</script>

<div class="h-screen w-full flex justify-center items-center flex-col px-[12rem]">
	<div class="bg-white rounded-md mb-4">
		<div class="text-4xl font-bold flex items-center space-x-4">
			<div class="flex items-center space-x-4">
				<h3>Beneficios ambientales</h3>
			</div>
		</div>
		<p class="text-muted-foreground">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt quos temporibus earum
			nostrum facere consequatur, ipsum tenetur eaque eos cum voluptatum voluptatibus cupiditate
			saepe labore quasi ex ipsam ipsa.
		</p>
	</div>

	<div class="flex flex-row space-x-4">
		<div class="flex flex-col w-[30%]">
			<Button
				onclick={() => handleShow('one')}
				class="h-[8rem] hover:border-t-2 hover:border-b-2 hover:border-black bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
			>
				<div class="flex items-center space-x-4">
					<div class="p-2 bg-[#72c488] rounded-full">
						<BadgeCheck color="#fff" size={24} />
					</div>
					<div class="flex flex-col items-start">
						<p class="font-bold text-lg">Reducción de emisiones</p>
						<p>Fin uses all of your support knowledge to generate.</p>
					</div>
				</div>
			</Button>

			<Button
				onclick={() => handleShow('two')}
				class="h-[8rem] hover:border-t-2 hover:border-b-2 hover:border-black bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
			>
				<div class="flex items-center space-x-4">
					<div class="p-2 bg-[#72c488] rounded-full">
						<Boxes color="#fff" size={24} />
					</div>
					<div class="flex flex-col items-start">
						<p class="font-bold text-lg">Gestión eficiente de residuos</p>
						<p>Fin uses all of your support knowledge to generate.</p>
					</div>
				</div>
			</Button>

			<Button
				onclick={() => handleShow('three')}
				class="h-[8rem] hover:border-t-2 hover:border-b-2 hover:border-black bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
			>
				<div class="flex items-center space-x-4">
					<div class="p-2 bg-[#72c488] rounded-full">
						<Landmark color="#fff" size={24} />
					</div>
					<div class="flex flex-col items-start">
						<p class="font-bold text-lg">Fomento de la economía circular</p>
						<p>Fin uses all of your support knowledge to generate.</p>
					</div>
				</div>
			</Button>
		</div>

		<div class="w-[70%]">
			{#if items.one}
				<div class="px-4">
					One- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa
					reprehenderit cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius
					doloremque vel? Minima beatae culpa nobis illo.
				</div>
			{/if}

			{#if items.two}
				<div class="px-4">
					two - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa
					reprehenderit cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius
					doloremque vel? Minima beatae culpa nobis illo.
				</div>
			{/if}

			{#if items.three}
				<div class="px-4">
					trhee - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa
					reprehenderit cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius
					doloremque vel? Minima beatae culpa nobis illo.
				</div>
			{/if}
		</div>
	</div>
</div>
