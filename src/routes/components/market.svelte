<script>
	import * as Card from '$lib/components/ui/card';
	import {
		Boxes,
		ChartColumnIncreasing,
		PackageOpen,
		Shuffle,
		TrendingDown,
		TrendingUp
	} from 'lucide-svelte';
</script>

<div class="w-full flex flex-col px-4 space-y-12 relative items-center">
	<h3 class="text-center text-4xl font-extrabold uppercase">Analisis de mercado</h3>

	<Card.Root class="shadow-none w-1/3  ">
		<Card.Content class="flex justify-between items-center">
			<div>
				<div class="text-lg font-medium flex items-center space-x-2">
					<div class="bg-[#e06e40] p-2 rounded-md">
						<ChartColumnIncreasing color="#fff" size={18} />
					</div>
					<p>Crecimiento Global</p>
				</div>
				<p class="text-muted-foreground text-sm mt-2">
					El mercado de biocombustibles alcanzará $154,000 millones USD en 2026, con crecimiento
					anual del 5.2%.
				</p>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- <TrendingDown class="absolute top-[20rem] left-[24rem] rotate-45" size={48} />
		<Shuffle class="absolute top-[14rem] right-[38rem] rotate-180" size={42} /> -->

	<Card.Root class="shadow-none w-1/3">
		<Card.Content class="flex justify-between items-center">
			<div>
				<div class="text-lg font-medium flex items-center space-x-2">
					<div class="bg-[#4ea971] p-2 rounded-md">
						<Boxes color="#fff" size={18} />
					</div>
					<p>Alianzas Estratégicas</p>
				</div>
				<p class="text-muted-foreground text-sm mt-2">
					Colaboración con Saudi Aramco y Kuwait Oil Company para procesar millones de toneladas de
					residuos.
				</p>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- <TrendingUp class="absolute top-[18rem] right-[30rem] rotate-0" size={48} /> -->

	<Card.Root class="shadow-none w-1/3">
		<Card.Content class="flex justify-between items-center">
			<div>
				<div class="text-lg font-medium flex items-center space-x-2">
					<div class="bg-[#6277fd] p-2 rounded-md">
						<PackageOpen color="#fff" size={18} />
					</div>
					<p>Volumen de Residuos</p>
				</div>
				<p class="text-muted-foreground text-sm mt-2">
					Arabia Saudita genera 2 millones de toneladas anuales, Kuwait 850,000 toneladas.
				</p>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- <Card.Root class="shadow-none w-1/3 h-[8rem]">
		<Card.Content class="flex justify-between items-center">
			<div>
				<div class="text-lg font-medium flex items-center space-x-2">
					<div class="bg-[#4ea971] p-2 rounded-md">
						<ChartColumnIncreasing color="#fff" size={12} />
					</div>
					<p>Crecimiento Global</p>
				</div>
				<p class="text-muted-foreground text-sm mt-2">
					El mercado de biocombustibles alcanzará $154,000 millones USD en 2026, con crecimiento
					anual del 5.2%.
				</p>
			</div>
		</Card.Content>
	</Card.Root> -->
</div>
