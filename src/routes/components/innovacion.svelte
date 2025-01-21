<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { BadgeCheck, Boxes, Landmark, Sprout, UsersRound } from 'lucide-svelte';

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

<div class="w-full flex flex-col justify-center items-center px-[12rem]">
	<div class="w-full flex flex-col">
		<div class="flex flex-row space-x-4">
			<h3 class="text-4xl font-bold">Innovación</h3>
		</div>
		<p class="text-muted-foreground mt-2">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt quos temporibus earum
			nostrum facere consequatur, ipsum tenetur eaque eos cum voluptatum voluptatibus cupiditate
			saepe labore quasi ex ipsam ipsa.
		</p>
	</div>

	<div class="flex flex-col w-full mt-6">
		<div class="min-h-[100vh]">
			{#if items.one}
				<div>
					One- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa
					reprehenderit cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius
					doloremque vel? Minima beatae culpa nobis illo.
				</div>
			{/if}

			{#if items.two}
				<div>
					two - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa
					reprehenderit cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius
					doloremque vel? Minima beatae culpa nobis illo.
				</div>
			{/if}

			{#if items.three}
				<div>
					trhee - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ullam error ipsa
					reprehenderit cum dolores amet dolore, numquam ut sapiente voluptatem explicabo eius
					doloremque vel? Minima beatae culpa nobis illo.
				</div>
			{/if}
		</div>

		<div class="flex flex-row justify-between">
			<Button
				onclick={() => handleShow('one')}
				class="w-[32%] h-[6rem] hover:border-t-2 hover:border-black bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
			>
				<p class="font-bold text-lg">Combustibles más económicos</p>
				<p class="text-xs">Fin uses all of your support knowledge to generate.</p>
			</Button>

			<Button
				onclick={() => handleShow('two')}
				class="w-[32%] h-[6rem] hover:border-t-2 hover:border-black bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
			>
				<p class="font-bold text-lg">Acceso a energías limpias</p>
				<p class="text-xs">Fin uses all of your support knowledge to generate.</p>
			</Button>

			<Button
				onclick={() => handleShow('three')}
				class="w-[32%] h-[6rem] hover:border-t-2 hover:border-black bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
			>
				<p class="font-bold text-lg">Estimación del mercado local</p>
				<p class="text-xs">Fin uses all of your support knowledge to generate.</p>
			</Button>
		</div>
	</div>
</div>
