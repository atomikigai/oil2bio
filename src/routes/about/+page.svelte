<script>
	import { Button } from '$lib/components/ui/button';
	import { Mails, Wallet } from 'lucide-svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<div class="flex justify-center h-16 items-center bg-transparent">
	<Navbar isWhite={false} more=" bg-transparent " />
</div>

<div class="lg:flex lg:flex-row flex flex-col items-center lg:px-12 lg:py-12 max-md:py-20">
	<div class="lg:w-[50%] w-full max-md:flex max-md:flex-col max-md:justify-center">
		<h3 class="text-4xl font-bold mb-2 max-md:text-center">Misión y Visión</h3>
		<p class="max-md:text-center max-md:text-xs max-md:px-8">
			Misión En Oil2Bio, nuestra misión es transformar la industria energética mediante soluciones
			sostenibles que convierten aceites usados en biocombustibles de alto rendimiento. Nos
			comprometemos a reducir la huella de carbono y promover una economía circular, ofreciendo
			alternativas limpias y eficientes para el sector energético y la movilidad. A través de la
			innovación, la responsabilidad ambiental y la colaboración con comunidades y empresas,
			trabajamos para crear un futuro más sostenible y energéticamente eficiente.
		</p>

		<Button
			class="lg:my-6 lg:text-lg lg:p-6 text-xs max-sm:p-4 max-sm:my-8 bg-lime-600 max-md:hidden"
			>Conoce a nuestro equipo <Mails class="lg:ml-4 ml-2" size={18} /></Button
		>
	</div>

	<Button class="lg:my-6 lg:text-lg lg:p-6 text-xs max-sm:p-4 max-sm:my-8 bg-lime-600 lg:hidden"
		>Conoce a nuestro equipo <Mails class="lg:ml-4 ml-2" size={18} /></Button
	>

	<div class="lg:w-[50%] max-md:w-[70%] flex justify-center">
		<img src="/team.jpg" alt="" width="650" height="600" class="rounded-xl" />
	</div>
</div>

<div class="lg:px-8 flex flex-col py-12">
	<h3 class="font-bold text-4xl text-center">Nuestro equipo</h3>

	<div
		class="w-full flex justify-center lg:space-x-8 max-md:space-y-8 max-md:flex-col items-center my-6"
	>
		<div>
			<div
				class="lg:w-[440px] lg:h-[400px] w-[360px] h-[300px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"
			></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div
				class="lg:w-[440px] lg:h-[400px] w-[360px] h-[300px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"
			></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div
				class="lg:w-[440px] lg:h-[400px] w-[360px] h-[300px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"
			></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
	</div>

	<div class="w-full flex justify-center lg:space-x-8 items-center my-6 max-md:flex-col">
		<div>
			<div
				class="lg:w-[440px] lg:h-[400px] w-[360px] h-[300px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"
			></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div
				class="lg:w-[440px] lg:h-[400px] w-[360px] h-[300px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"
			></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div
				class="lg:w-[440px] lg:h-[400px] w-[360px] h-[300px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"
			></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
	</div>
</div>

<div class="px-8 flex flex-col py-12">
	<h3 class="font-bold text-4xl text-center">Valores y Sostenibilidad</h3>
</div>
