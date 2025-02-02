<script>
	import { Button } from '$lib/components/ui/button';
	import { Mails, Wallet } from 'lucide-svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<div class="w-full flex justify-center bg-white h-[12vh]">
	<Navbar isWhite={false} />
</div>

<div class="flex flex-row items-center px-8 bg-[#f1f1f1] py-12">
	<div class="w-[50%]">
		<h3 class="text-4xl font-bold mb-2">Misión y Visión</h3>
		<p>
			Misión En Oil2Bio, nuestra misión es transformar la industria energética mediante soluciones
			sostenibles que convierten aceites usados en biocombustibles de alto rendimiento. Nos
			comprometemos a reducir la huella de carbono y promover una economía circular, ofreciendo
			alternativas limpias y eficientes para el sector energético y la movilidad. A través de la
			innovación, la responsabilidad ambiental y la colaboración con comunidades y empresas,
			trabajamos para crear un futuro más sostenible y energéticamente eficiente.
		</p>

		<Button class="lg:my-6 lg:text-lg lg:p-6 text-xs max-sm:p-4 max-sm:my-8 bg-lime-600"
			>Conoce a nuestro equipo <Mails class="lg:ml-4 ml-2" size={18} /></Button
		>
	</div>

	<div class="w-[50%] flex justify-center">
		<img src="/team.jpg" alt="" width="650" height="600" class="rounded-xl" />
	</div>
</div>

<div class="px-8 flex flex-col py-12">
	<h3 class="font-bold text-4xl text-center">Nuestro equipo</h3>

	<div class="w-full flex justify-center space-x-8 items-center my-6">
		<div>
			<div class="w-[440px] h-[400px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div class="w-[440px] h-[400px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div class="w-[440px] h-[400px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
	</div>

	<div class="w-full flex justify-center space-x-8 items-center my-6">
		<div>
			<div class="w-[440px] h-[400px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div class="w-[440px] h-[400px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
		<div>
			<div class="w-[440px] h-[400px] rounded-xl bg-[url('/t.jpg')] bg-cover bg-center"></div>
			<h3 class="font-bold mt-1">Brian Chesky</h3>
			<p class="text-muted-foreground">Co-founder and Chief Executive Officer</p>
		</div>
	</div>
</div>

<div class="px-8 flex flex-col py-12">
	<h3 class="font-bold text-4xl text-center">Valores y Sostenibilidad</h3>
</div>
