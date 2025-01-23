<script>
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Menu, X } from 'lucide-svelte';

	let currentSection = $state('white');

	// Función para detectar la sección visible
	function handleScroll() {
		const sections = document.querySelectorAll('section');
		const scrollPosition = window.scrollY + window.innerHeight / 2; // Posición actual del scroll

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				currentSection = section.id;
			}
		});
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	let mobile = $state(false);

	function handleMobile() {
		mobile = !mobile;
	}
</script>

<nav
	class={`fixed top-10 bg-opacity-10 rounded-md px-4 py-2 transition-all duration-300 lg:block hidden ${
		currentSection === 'white' ? 'text-white' : 'text-black'
	}`}
>
	<Button variant="ghost" class="font-bold">Sobre nosotros</Button>
	<Button variant="ghost" class="font-bold">Proyecto</Button>
	<Button variant="ghost" class="font-bold">Inversores</Button>
	<Button variant="ghost" class="font-bold">Noticias</Button>
	<Button variant="default" class="font-bold bg-lime-600">Contacto</Button>
</nav>

<Button
	class={mobile ? 'hidden' : 'w-fit bg-white bg-opacity-50 rounded-md p-2 fixed top-5 left-5 z-20'}
	onclick={() => handleMobile()}
>
	<Menu color={currentSection === 'white' ? '#fff' : '#111'} />
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

		<Button variant="ghost" class="font-bold">Sobre nosotros</Button>
		<Button variant="ghost" class="font-bold">Proyecto</Button>
		<Button variant="ghost" class="font-bold">Inversores</Button>
		<Button variant="ghost" class="font-bold">Noticias</Button>
		<Button variant="ghost" class="font-bold">Contacto</Button>
	</div>
{/if}
