<script>
	import { selectedLanguage } from '$lib/components/app/store';
	import TranslatorText from '$lib/components/app/translatorText.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Boxes, ChartColumnIncreasing, PackageOpen } from 'lucide-svelte';
</script>

<div
	class="w-full min-h-screen justify-center flex flex-col px-4 space-y-12 relative items-center"
	id="market"
>
	<h3 class="text-center 2xl:text-4xl text-2xl font-extrabold uppercase w-full">
		<TranslatorText
			dictionarie={$selectedLanguage}
			section="market"
			key="title"
			text="Analisis de mercado"
		/>
	</h3>

	<Card.Root class="shadow-none 2xl:w-1/3  ">
		<Card.Content class="flex justify-between items-center">
			<div>
				<div class="text-lg font-medium flex items-center space-x-2">
					<div class="bg-[#e06e40] p-2 rounded-md">
						<ChartColumnIncreasing color="#fff" size={18} />
					</div>
					<p>
						<TranslatorText
							dictionarie={$selectedLanguage}
							section="market"
							key="card-one-title"
							text="Crecimiento Global "
						/>
					</p>
				</div>
				<p class="text-muted-foreground text-sm mt-2">
					<TranslatorText
						dictionarie={$selectedLanguage}
						section="market"
						key="card-one-description"
						text="El mercado de biocombustibles alcanzará $154,000 millones USD en 2026, con crecimiento
					anual del 5.2%."
					/>
				</p>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- <TrendingDown class="absolute top-[20rem] left-[24rem] rotate-45" size={48} />
		<Shuffle class="absolute top-[14rem] right-[38rem] rotate-180" size={42} /> -->

	<Card.Root class="shadow-none 2xl:w-1/3">
		<Card.Content class="flex justify-between items-center">
			<div>
				<div class="text-lg font-medium flex items-center space-x-2">
					<div class="bg-[#4ea971] p-2 rounded-md">
						<Boxes color="#fff" size={18} />
					</div>
					<p>
						<TranslatorText
							dictionarie={$selectedLanguage}
							section="market"
							key="card-two-title"
							text="Alianzas Estratégicas"
						/>
					</p>
				</div>
				<p class="text-muted-foreground text-sm mt-2">
					<TranslatorText
						dictionarie={$selectedLanguage}
						section="market"
						key="card-two-description"
						text="Colaboración con Saudi Aramco y Kuwait Oil Company para procesar millones de toneladas de
					residuos."
					/>
				</p>
			</div>
		</Card.Content>
	</Card.Root>

	<!-- <TrendingUp class="absolute top-[18rem] right-[30rem] rotate-0" size={48} /> -->

	<Card.Root class="shadow-none 2xl:w-1/3">
		<Card.Content class="flex justify-between items-center">
			<div>
				<div class="text-lg font-medium flex items-center space-x-2">
					<div class="bg-[#6277fd] p-2 rounded-md">
						<PackageOpen color="#fff" size={18} />
					</div>
					<p>
						<TranslatorText
							dictionarie={$selectedLanguage}
							section="market"
							key="card-three-title"
							text="Volumen de Residuos"
						/>
					</p>
				</div>
				<p class="text-muted-foreground text-sm mt-2">
					<TranslatorText
						dictionarie={$selectedLanguage}
						section="market"
						key="card-three-description"
						text="Arabia Saudita genera 2 millones de toneladas anuales, Kuwait 850,000 toneladas."
					/>
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
