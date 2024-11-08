<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { ChartNoAxesCombined } from 'lucide-svelte';
</script>

<div
	class="w-full h-screen justify-center py-12 flex items-center flex-col space-y-12"
	id="finance"
>
	<div class="flex flex-row items-center space-x-4">
		<h3 class="text-4xl font-extrabold uppercase">Plan financiero</h3>
		<ChartNoAxesCombined color="#4ea971" size={40} />
	</div>
	<div class="w-1/3 border rounded-lg">
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
