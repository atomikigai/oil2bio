<script>
	import * as Card from '$lib/components/ui/card';
	import { Factory, Package, Truck, Warehouse } from 'lucide-svelte';
</script>

<div class="w-full h-screen space-x-2 flex flex-row">
	<div class="w-[40%] justify-center h-screen flex flex-col text-left px-12">
		<h3 class="text-4xl font-extrabold">Proceso de Conversión</h3>
		<p class="text-sm mt-2 text-muted-foreground">
			El proceso de conversión de residuos en biocombustible consta de tres etapas principales.
		</p>
	</div>

	<div class="w-[60%] h-screen flex flex-col space-y-6 justify-center items-center px-4">
		<Card.Root class="w-full shadow-none">
			<Card.Content class="flex justify-between items-center">
				<div class="flex flex-col">
					<div class="flex space-x-2">
						<Warehouse color="#4ea971" />
						<h3 class="font-medium">Recolección</h3>
					</div>
					<p class="text-sm text-muted-foreground">
						Recogida de residuos de refinerías en Arabia Saudita y Kuwait.
					</p>
				</div>

				<div
					class="border w-[30px] h-[30px] font-medium flex items-center justify-center text-center rounded-md bg-[#4ea971] text-white"
				>
					1
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="w-full shadow-none">
			<Card.Content class="flex flex-row items-center justify-between">
				<div class="flex flex-col">
					<div class="flex space-x-2">
						<Factory color="#6277fd" />
						<h3 class="font-medium">Tratamiento</h3>
					</div>
					<p class="text-sm text-muted-foreground">
						Hidrogenación, purificación y catalización para producir biocombustible de alta calidad.
					</p>
				</div>
				<div
					class="border w-[30px] h-[30px] font-medium flex items-center justify-center text-center rounded-md bg-[#6277fd] text-white"
				>
					2
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="w-full shadow-none">
			<Card.Content class="flex flex-row items-center justify-between">
				<div class="flex flex-col">
					<div class="flex space-x-2">
						<Package color="#e06e40" />
						<h3 class="font-medium">Distribución</h3>
					</div>
					<p class="text-sm text-muted-foreground">Envío del biocombustible al mercado global.</p>
				</div>
				<div
					class="border w-[30px] h-[30px] font-medium flex items-center justify-center text-center rounded-md bg-[#e06e40] text-white"
				>
					3
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
