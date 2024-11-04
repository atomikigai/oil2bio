<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { ChartSpline, Microchip, Sprout } from 'lucide-svelte';
</script>

<div class="w-full h-screen px-4 flex flex-col justify-center items-center space-y-12">
	<h1 class="text-4xl font-extrabold uppercase">caracteristicas de nuestra tecnologia</h1>
	<div class="w-full flex flex-row space-x-6 justify-center items-center">
		<Card.Root class="w-1/4 h-[12rem] shadow-none">
			<Card.Header>
				<Microchip color="#e06e40" />
			</Card.Header>
			<Card.Content class="space-y-2">
				<Card.Title>Tecnología avanzada</Card.Title>
				<p class="text-muted-foreground text-sm">
					Transforma residuos petroleros en biocombustibles limpios usando tecnologías de punta.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="w-1/4 h-[12rem] shadow-none">
			<Card.Header>
				<Sprout color="#4ea971" />
			</Card.Header>
			<Card.Content class="space-y-2">
				<Card.Title>Impacto ambiental</Card.Title>
				<p class="text-muted-foreground text-sm">
					Reduce la carga ambiental y económica de las refinerías petroleras.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="w-1/4 h-[12rem] shadow-none">
			<Card.Header>
				<ChartSpline color="#6277fd" />
			</Card.Header>
			<Card.Content class="space-y-2">
				<Card.Title>Demanda Creciente</Card.Title>
				<p class="text-muted-foreground text-sm">
					Ofrece un producto de alta demanda en un mercado en transición energética.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>
