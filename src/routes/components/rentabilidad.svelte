<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Wallet } from 'lucide-svelte';
</script>

<div
	class="my-6 w-full lg:h-[60vh] max-sm:min-h-screen flex lg:flex-row flex-col lg:space-x-4 bg-[#f1f1f1]"
>
	<div
		class="lg:w-[50%] justify-center lg:items-start flex flex-col lg:px-28 max-sm:w-full max-sm:px-8 max-sm:text-center items-center"
	>
		<h3 class="lg:text-3xl text-xl font-bold lg:my-4 my-8 max-sm:text-center">
			Rentabilidad y Oportunidades Financieras
		</h3>
		<p class="max-sm:text-sm">
			Explora Oportunidades Financieras en un Proceso Seguro y Certificado: Monetiza Residuos, Obtén
			Créditos de Carbono y Aumenta tu Rentabilidad de Forma Responsable.
		</p>

		<Button class="lg:my-6 lg:text-lg lg:p-6 text-xs max-sm:p-4 max-sm:my-8 bg-lime-600"
			>Empieza a Generar Rentabilidad <Wallet class="lg:ml-4 ml-2" size={18} /></Button
		>
	</div>

	<div
		class="lg:w-[50%] w-full h-full flex justify-center max-sm:flex-wrap items-center lg:space-x-6"
	>
		<div
			class="relative lg:w-[12rem] lg:h-[12rem] w-[11rem] h-[11rem] border-2 border-t-lime-600 border-l-lime-600 p-4 text-muted-foreground bg-white shadow-md rounded-xl flex justify-center items-center max-sm:mr-4"
		>
			Alta rentabilidad

			<div
				class="absolute lg:bottom-[-1.5rem] lg:right-[-.8rem] max-sm:bottom-[-1.6rem] max-sm:left-[-1.0rem]"
			>
				<div
					class="bg-[url('/r-one.jpg')] bg-cover bg-center rounded-xl w-[100px] h-[70px] lg:w-[100px] lg:h-[80px]"
				></div>
			</div>
		</div>
		<div
			class="relative lg:w-[12rem] lg:h-[12rem] w-[11rem] h-[11rem] border-2 border-b-lime-600 border-r-lime-600 p-4 text-muted-foreground bg-white shadow-md rounded-xl flex justify-center items-center"
		>
			Monetización de residuos

			<div
				class="absolute lg:bottom-[-1.5rem] lg:right-[-.8rem] max-sm:bottom-[-1.6rem] max-sm:left-[-1.0rem]"
			>
				<div
					class="bg-[url('/r-two.jpg')] bg-cover bg-center rounded-xl w-[100px] h-[70px] lg:w-[100px] lg:h-[80px]"
				></div>
			</div>
		</div>
		<div
			class="relative lg:w-[12rem] lg:h-[12rem] w-[11rem] h-[11rem] border-2 border-b-lime-600 border-l-lime-600 p-4 text-muted-foreground bg-white shadow-md rounded-xl flex justify-center items-center max-sm:mr-4 max-sm:mt-8"
		>
			Obtención de créditos de carbono

			<div
				class="absolute lg:bottom-[-1.5rem] lg:right-[-.8rem] max-sm:bottom-[-1.6rem] max-sm:left-[-1.0rem]"
			>
				<div
					class="bg-[url('/r-three.jpg')] bg-cover bg-center rounded-xl w-[100px] h-[70px] lg:w-[100px] lg:h-[80px]"
				></div>
			</div>
		</div>
		<div
			class="relative lg:w-[12rem] lg:h-[12rem] w-[11rem] h-[11rem] border-2 border-t-lime-600 border-r-lime-600 p-4 text-muted-foreground bg-white shadow-md rounded-xl flex justify-center items-center max-sm:mt-8"
		>
			Reducción de costos operativos

			<div
				class="absolute lg:bottom-[-1.5rem] lg:right-[-.8rem] max-sm:bottom-[-1.6rem] max-sm:left-[-1.0rem]"
			>
				<div
					class="bg-[url('/r-four.jpg')] bg-cover bg-center rounded-xl w-[100px] h-[70px] lg:w-[100px] lg:h-[80px]"
				></div>
			</div>
		</div>
	</div>
</div>
