<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu, X } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let { isWhite, more }: { isWhite: boolean; more?: string } = $props();

	let mobile = $state(false);
	let styles =
		'z-20 top-10 bg-opacity-10 rounded-md px-4 py-2 transition-all duration-300 lg:block hidden ';

	function handleMobile() {
		mobile = !mobile;
	}
</script>

<nav class={isWhite ? more + styles + ' text-white ' : more + styles + ' text-black '}>
	<Button variant="ghost" class="font-bold" onclick={() => goto('/')}>Inicio</Button>
	<Button variant="ghost" class="font-bold" onclick={() => goto('/about')}>Sobre nosotros</Button>
	<Button variant="ghost" class="font-bold">Proyecto</Button>
	<Button variant="ghost" class="font-bold">Inversores</Button>
	<Button variant="ghost" class="font-bold">Noticias</Button>
	<Button variant="default" class="font-bold bg-lime-600" onclick={() => goto('/contact')}
		>Contacto</Button
	>
</nav>

<Button
	class="w-fit bg-transparent bg-opacity-50 rounded-md p-2 fixed top-5 left-5 z-20 lg:hidden block"
	onclick={() => handleMobile()}
>
	<Menu color={isWhite ? '#fff' : '#111'} />
</Button>

{#if mobile}
	<div
		class="w-[70%] bg-white bg-opacity-95 shadow-xl h-full fixed top-0 left-0 z-30 flex flex-col items-start py-6 space-y-4 px-4"
	>
		<Button
			class="w-full bg-transparent shadow-none border-none flex justify-end"
			onclick={() => handleMobile()}
		>
			<X color="#111" />
		</Button>

		<Button variant="ghost" class="font-bold" onclick={() => goto('/about')}>Sobre nosotros</Button>
		<Button variant="ghost" class="font-bold">Proyecto</Button>
		<Button variant="ghost" class="font-bold">Inversores</Button>
		<Button variant="ghost" class="font-bold">Noticias</Button>
		<Button variant="ghost" class="font-bold" onclick={() => goto('/contact')}>Contacto</Button>
	</div>
{/if}
