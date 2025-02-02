<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="w-full min-h-screen flex justify-center items-center flex-col max-sm:my-4">
	<h3 class="lg:w-[80%] my-6 text-2xl uppercase font-bold">Beneficios ambientales</h3>

	<div
		class="flex flex-row w-[80%] justify-center items-center lg:space-x-12 max-sm:flex-col max-sm:space-y-4"
	>
		<div
			class="bg-[url('/b-one.jpg')] relative text-white bg-cover border w-full rounded-xl lg:h-[40rem] h-[20rem] flex justify-center items-center flex-col shadow-lg hover:border cursor-pointer hover:shadow-sm hover:border-black uppercase font-bold text-xl px-4"
		>
			<h3>Reducción de emisiones</h3>

			<Button variant="outline" class="absolute bottom-10 left-50 bg-transparent">Ver más</Button>
		</div>
		<div
			class="bg-[url('/b-two.jpg')] relative text-white bg-cover border w-full rounded-xl lg:h-[40rem] h-[20rem] flex justify-center items-center flex-col shadow-lg hover:border cursor-pointer hover:shadow-sm hover:border-black uppercase font-bold text-xl text-center px-4"
		>
			<h3>Gestión eficiente de residuos</h3>

			<Button variant="outline" class="absolute bottom-10 left-50 bg-transparent">Ver más</Button>
		</div>
		<div
			class="bg-[url('/b-three.jpg')] relative text-white bg-cover border w-full rounded-xl lg:h-[40rem] h-[20rem] flex justify-center items-center flex-col shadow-lg hover:border cursor-pointer hover:shadow-sm hover:border-black uppercase font-bold text-xl text-center px-4"
		>
			<h3>Fomento de la economía circular</h3>
			<Button variant="outline" class="absolute bottom-10 left-50 bg-transparent">Ver más</Button>
		</div>
	</div>
</section>
