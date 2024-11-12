<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { ChartNoAxesCombined } from 'lucide-svelte';
</script>

<div
	class="w-full h-screen justify-center 2xl:py-12 flex items-center flex-col 2xl:space-y-12 px-4"
	id="finance"
>
	<div class="flex 2xl:flex-row flex-col items-center space-x-4 max-sm:space-y-4">
		<h3 class="2xl:text-4xl text-2xl font-extrabold uppercase">Plan financiero</h3>
		<ChartNoAxesCombined color="#4ea971" size={40} />
	</div>
	<div class="2xl:w-1/3 max-sm:mt-4 border rounded-lg">
		<div class="w-full flex flex-row border p-4">
			<div class="w-1/2 px-4 font-medium">Inversión Inicial</div>
			<Separator orientation="vertical" />
			<div class="w-1/2 px-4">345-675 millones <span class="text-[#4ea971]">USD</span></div>
		</div>

		<div class="w-full flex flex-row border p-4">
			<div class="w-1/2 px-4 font-medium">Costos Operativos Anuales</div>
			<Separator orientation="vertical" />
			<div class="w-1/2 px-4">1,085-1,540 millones <span class="text-[#4ea971]">USD</span></div>
		</div>

		<div class="w-full flex flex-row border p-4">
			<div class="w-1/2 px-4 font-medium">Ingresos Anuales Estimados</div>
			<Separator orientation="vertical" />
			<div class="w-1/2 px-4">6,400 millones <span class="text-[#4ea971]">USD</span></div>
		</div>

		<div class="w-full flex flex-row border p-4">
			<div class="w-1/2 px-4 font-medium">Ganancias Netas Anuales</div>
			<Separator orientation="vertical" />
			<div class="w-1/2 px-4">5,100 millones <span class="text-[#4ea971]">USD</span></div>
		</div>

		<div class="w-full flex flex-row border p-4">
			<div class="w-1/2 px-4 font-medium">ROI Anual</div>
			<Separator orientation="vertical" />
			<div class="w-1/2 px-4">1020 <span class="text-[#4ea971]">%</span></div>
		</div>
	</div>
</div>
