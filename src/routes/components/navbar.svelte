<script>
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';

	let currentSection = 'white';

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
</script>

<nav
	class={`fixed top-10 bg-opacity-10 rounded-md px-4 py-2 transition-all duration-300 ${
		currentSection === 'white' ? 'text-white' : 'text-black'
	}`}
>
	<Button variant="ghost" class="font-bold">Sobre nosotros</Button>
	<Button variant="ghost" class="font-bold">Proyecto</Button>
	<Button variant="ghost" class="font-bold">Inversores</Button>
	<Button variant="ghost" class="font-bold">Noticias</Button>
	<Button variant="default" class="font-bold bg-lime-600">Contacto</Button>
</nav>
