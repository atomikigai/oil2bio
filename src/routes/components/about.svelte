<script lang="ts">
	import { selectedLanguage } from '$lib/components/app/store';
	import TranslatorText from '$lib/components/app/translatorText.svelte';
	import * as Card from '$lib/components/ui/card';
	import { ChartSpline, Microchip, Sprout } from 'lucide-svelte';
</script>

<div class="w-full h-screen px-4 flex flex-col justify-center items-center space-y-12" id="tech">
	<div class="text-center flex justify-center items-center flex-col space-y-2 w-full">
		<h1 class="text-2xl font-extrabold uppercase">
			<TranslatorText
				dictionarie={$selectedLanguage}
				section="about"
				key="title"
				text="caracteristicas de nuestra tecnologia"
			/>
		</h1>
		<p class="2xl:w-[50rem] text-sm text-muted-foreground">
			<TranslatorText dictionarie={$selectedLanguage} section="about" key="title" text="En" />
			<span class="text-[#4ea971] font-medium"
				><TranslatorText
					dictionarie={$selectedLanguage}
					section="about"
					key="title"
					text="Oil2Bio"
				/></span
			>
			<TranslatorText
				dictionarie={$selectedLanguage}
				section="about"
				key="title"
				text=", nuestro principal objetivo es proteger el medio ambiente, aprovechando herramientas y
			tecnologías que nos permitan hacerlo de manera efectiva y sostenible."
			/>
		</p>
	</div>
	<div
		class="w-full flex 2xl:flex-row flex-col 2xl:space-x-6 max-sm:space-y-4 justify-center items-center"
	>
		<Card.Root class="2xl:w-1/4 w-full h-[12rem] shadow-none">
			<Card.Header>
				<Microchip color="#e06e40" />
			</Card.Header>
			<Card.Content class="space-y-2">
				<Card.Title
					><TranslatorText
						dictionarie={$selectedLanguage}
						section="about"
						key="card-one-title"
						text="Tecnología avanzada"
					/></Card.Title
				>
				<p class="text-muted-foreground text-sm">
					<TranslatorText
						dictionarie={$selectedLanguage}
						section="about"
						key="card-one-description"
						text="Transforma residuos petroleros en biocombustibles limpios usando tecnologías de punta."
					/>
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="2xl:w-1/4 w-full h-[12rem] shadow-none">
			<Card.Header>
				<Sprout color="#4ea971" />
			</Card.Header>
			<Card.Content class="space-y-2">
				<Card.Title
					><TranslatorText
						dictionarie={$selectedLanguage}
						section="about"
						key="card-two-title"
						text="Impacto ambiental"
					/></Card.Title
				>
				<p class="text-muted-foreground text-sm">
					<TranslatorText
						dictionarie={$selectedLanguage}
						section="about"
						key="card-two-description"
						text="Reduce la carga ambiental y económica de las refinerías petroleras."
					/>
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="2xl:w-1/4 w-full h-[12rem] shadow-none">
			<Card.Header>
				<ChartSpline color="#6277fd" />
			</Card.Header>
			<Card.Content class="space-y-2">
				<Card.Title
					><TranslatorText
						dictionarie={$selectedLanguage}
						section="about"
						key="card-two-title"
						text="Demanda Creciente"
					/></Card.Title
				>
				<p class="text-muted-foreground text-sm">
					<TranslatorText
						dictionarie={$selectedLanguage}
						section="about"
						key="card-three-description"
						text="Ofrece un producto de alta demanda en un mercado en transición energética."
					/>
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>
