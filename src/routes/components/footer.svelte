<script>
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';
</script>

<div class="w-full h-[40vh] bg-white lg:flex flex-row py-12 px-12 border-t hidden">
	<div class="flex flex-col w-[25%] space-y-4">
		<h3 class="font-bold">Empresa</h3>
		<p class="text-muted-foreground">Sobre nosotros</p>
		<p class="text-muted-foreground">Afiliados</p>
		<p class="text-muted-foreground">Noticias</p>
		<p class="text-muted-foreground">Documentos y presentaciones</p>
	</div>

	<div class="flex flex-col w-[25%] space-y-4">
		<h3 class="font-bold">Legal</h3>
		<p class="text-muted-foreground">Terminos y condiciones</p>
		<p class="text-muted-foreground">Privacidad</p>
		<p class="text-muted-foreground">Certificaciones</p>
	</div>

	<div class="flex flex-col w-[25%] space-y-4">
		<h3 class="font-bold">Redes sociales</h3>
		<p class="text-muted-foreground flex items-center">
			<Instagram class="mr-1" size={16} /> Instagram
		</p>
		<p class="text-muted-foreground flex items-center">
			<Facebook class="mr-1" size={16} /> Facebook
		</p>
		<p class="text-muted-foreground flex items-center">
			<Twitter class="mr-1" size={16} /> Twitter
		</p>
	</div>

	<div class="flex flex-col w-[25%] space-y-4">
		<h3 class="font-bold">Ubicación</h3>
		<p class="text-muted-foreground">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit dolorum quo quod
			temporibus, nesciunt voluptatum autem velit veritatis quos libero laudantium distinctio labore
			sit, praesentium itaque. Libero, odio molestias?
		</p>
	</div>
</div>
<div class="w-full border-t h-[5vh] flex items-center px-6 text-sm">
	<p class="text-muted-foreground">© 2025 Oil2Bio. Todos los derechos reservados.</p>
</div>
