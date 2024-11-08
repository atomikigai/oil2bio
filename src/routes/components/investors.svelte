<script lang="ts">
	import { Leaf, Route, UsersRound } from 'lucide-svelte';
	import { Handshake } from 'lucide-svelte';
</script>

<div class="w-full h-screen flex justify-center items-center flex-col space-y-12" id="investors">
	<h3 class="text-4xl font-extrabold uppercase">Propuesta de Valor para Inversores</h3>
	<Handshake size={40} color="#4ea971" />

	<div class="w-[30%] space-y-12">
		<div class="w-full">
			<UsersRound color="#4ea971" />
			<h4 class="font-medium text-xl text-[#4ea971]">Alta rentabilidad</h4>
			<p class="text-muted-foreground">
				ROI proyectado del 1020% anual, una de las inversiones más rentables del sector.
			</p>
		</div>

		<div class="w-full">
			<Leaf color="#4ea971" />
			<h4 class="font-medium text-xl text-[#4ea971]">Impacto ambiental</h4>
			<p class="text-muted-foreground">
				Inversión alineada con esfuerzos globales de reducción de emisiones de carbono.
			</p>
		</div>

		<div class="w-full">
			<Route color="#4ea971" />
			<h4 class="font-medium text-xl text-[#4ea971]">Diversificación</h4>
			<p class="text-muted-foreground">
				Opción de inversión con criptomonedas y oro como resguardo financiero.
			</p>
		</div>
	</div>
</div>
