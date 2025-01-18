<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Landmark, Sprout, UsersRound } from 'lucide-svelte';

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

<div class="p-[12rem]">
	<div class="bg-white rounded-md p-12">
		<div class="my-4">
			<div class="text-4xl font-bold flex items-center">
				<UsersRound size={50} class="mr-4" />
				<h3>Beneficios Económicos para Consumidores</h3>
			</div>
			<p class="text-muted-foreground mt-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt quos temporibus earum
				nostrum facere consequatur, ipsum tenetur eaque eos cum voluptatum voluptatibus cupiditate
				saepe labore quasi ex ipsam ipsa.
			</p>
		</div>

		<div class="flex flex-col">
			<div class="w-[70%] h-[70vh]">
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

			<div class="flex flex-row space-x-8">
				<Button
					onclick={() => handleShow('one')}
					class="w-full h-[8rem] bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
				>
					<p class="font-bold text-lg">Ahorro en gestión de residuos</p>
					<p>Fin uses all of your support knowledge to generate.</p>
				</Button>

				<Button
					onclick={() => handleShow('two')}
					class="w-full h-[8rem] bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
				>
					<p class="font-bold text-lg">Ingresos adicionales</p>
					<p>Fin uses all of your support knowledge to generate.</p>
				</Button>

				<Button
					onclick={() => handleShow('three')}
					class="w-full h-[8rem] bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
				>
					<p class="font-bold text-lg">Obtención de créditos de carbono</p>
					<p>Fin uses all of your support knowledge to generate.</p>
				</Button>

				<Button
					onclick={() => handleShow('three')}
					class="w-full h-[8rem] bg-transparent text-black  hover:bg-transparent flex flex-col items-start !shadow-none border-t rounded-none cursor-pointer"
				>
					<p class="font-bold text-lg">Mayor competitividad</p>
					<p>Fin uses all of your support knowledge to generate.</p>
				</Button>
			</div>
		</div>
	</div>
</div>
