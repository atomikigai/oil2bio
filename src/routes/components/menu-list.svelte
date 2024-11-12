<script lang="ts">
	export let scrollToSection: (value: string) => void;
</script>

<ul class="flex 2xl:space-x-6 max-sm:flex-col max-sm:space-y-6 font-medium">
	<button
		onclick={() => scrollToSection('home')}
		class="hover:border-b-[2px] hover:border-[#4ea971]">Inicio</button
	>
	<button
		onclick={() => scrollToSection('tech')}
		class="hover:border-b-[2px] hover:border-[#4ea971]">Nuestra tecnologia</button
	>
	<button
		onclick={() => scrollToSection('market')}
		class="hover:border-b-[2px] hover:border-[#4ea971]">Analisis de mercado</button
	>
	<button
		onclick={() => scrollToSection('process')}
		class="hover:border-b-[2px] hover:border-[#4ea971]">Proceso de conversión</button
	>
	<button
		onclick={() => scrollToSection('finance')}
		class="hover:border-b-[2px] hover:border-[#4ea971]">Plan financiero</button
	>
	<button
		onclick={() => scrollToSection('investors')}
		class="hover:border-b-[2px] hover:border-[#4ea971]">Propuesta de valor</button
	>
</ul>
