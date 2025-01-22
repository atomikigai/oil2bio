<script>
	import { Button } from '$lib/components/ui/button';
	import { MoveRight } from 'lucide-svelte';
</script>

<section class="w-full h-screen relative" id="white">
	<video
		class="absolute top-0 left-0 z-0 h-screen w-full object-cover brightness-50"
		autoplay
		loop
		muted
		playsinline
	>
		<source src="/230545.mp4" type="video/mp4" />
	</video>

	<div class="flex flex-col justify-center items-center absolute inset-0 z-10">
		<!-- svelte-ignore a11y_media_has_caption -->

		<div class="2xl:w-[50%] flex flex-col justify-center items-center">
			<h3
				class="leading-8 text-white bg-transparent uppercase 2xl:text-6xl text-4xl font-semibold text-center"
			>
				Transformamos residuos en energía limpia
			</h3>
			<p class="text-center my-12 2xl:text-2xl text-white">
				Convertimos residuos en biocombustibles sostenibles. Soluciones innovadoras que transforman
				industrias y promueven un futuro limpio y responsable.
			</p>
			<div class=" space-x-4 flex items-center">
				<Button class="p-6 font-bold text-lg bg-lime-600">
					Contacta con nosotros <MoveRight class="ml-2 " /></Button
				>
			</div>
		</div>
	</div>
</section>
