<script>
	import { selectedLanguage } from '$lib/components/app/store';
	import TranslatorText from '$lib/components/app/translatorText.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Factory, Package, Warehouse } from 'lucide-svelte';
</script>

<div
	class="w-full h-screen space-x-2 flex flex-col justify-center 2xl:px-12 2xl:space-y-12 px-4"
	id="process"
>
	<div>
		<h3 class="2xl:text-4xl text-2xl font-extrabold text-center">
			<TranslatorText
				dictionarie={$selectedLanguage}
				section="process"
				key="title"
				text="Proceso de Conversión"
			/>
		</h3>
		<p class=" mt-2 text-muted-foreground text-center max-sm:mb-4">
			<TranslatorText
				dictionarie={$selectedLanguage}
				section="process"
				key="description"
				text="El proceso de conversión de residuos en biocombustible consta de tres etapas principales."
			/>
		</p>
	</div>

	<div class="flex 2xl:flex-row flex-col 2xl:space-x-4 max-sm:space-y-4 w-full justify-center">
		<Card.Root class="2xl:w-[32rem] w-full shadow-none">
			<Card.Content class="flex justify-between items-center">
				<div class="flex flex-col 2xl:w-[70%]">
					<div class="flex space-x-2">
						<Warehouse color="#4ea971" />
						<h3 class="font-medium">
							<TranslatorText
								dictionarie={$selectedLanguage}
								section="process"
								key="card-one-title"
								text="Recolección"
							/>
						</h3>
					</div>
					<p class="text-sm text-muted-foreground">
						<TranslatorText
							dictionarie={$selectedLanguage}
							section="process"
							key="card-one-description"
							text="Recogida de residuos de refinerías en Arabia Saudita y Kuwait."
						/>
					</p>
				</div>

				<div
					class="max-sm:hidden border w-[30px] h-[30px] font-medium flex items-center justify-center text-center rounded-md bg-[#4ea971] text-white"
				>
					1
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="2xl:w-[32rem] w-full shadow-none">
			<Card.Content class="flex flex-row items-center justify-between">
				<div class="flex flex-col 2xl:w-[70%]">
					<div class="flex space-x-2">
						<Factory color="#6277fd" />
						<h3 class="font-medium">
							<TranslatorText
								dictionarie={$selectedLanguage}
								section="process"
								key="card-two-title"
								text="Tratamiento"
							/>
						</h3>
					</div>
					<p class="text-sm text-muted-foreground">
						<TranslatorText
							dictionarie={$selectedLanguage}
							section="process"
							key="card-two-description"
							text="Hidrogenación, purificación y catalización para producir biocombustible de alta calidad."
						/>
					</p>
				</div>
				<div
					class="max-sm:hidden border w-[30px] h-[30px] font-medium flex items-center justify-center text-center rounded-md bg-[#6277fd] text-white"
				>
					2
				</div>
			</Card.Content>
		</Card.Root>

		<Card.Root class="w-full 2xl:hidden flex shadow-none">
			<Card.Content class="flex flex-row items-center justify-between">
				<div class="flex flex-col 2xl:w-[70%]">
					<div class="flex space-x-2">
						<Package color="#e06e40" />
						<h3 class="font-medium">
							<TranslatorText
								dictionarie={$selectedLanguage}
								section="process"
								key="card-three-title"
								text="Distribución"
							/>
						</h3>
					</div>
					<p class="text-sm text-muted-foreground">
						<TranslatorText
							dictionarie={$selectedLanguage}
							section="process"
							key="card-three-description"
							text="Envío del biocombustible al mercado global."
						/>
					</p>
				</div>
				<div
					class="max-sm:hidden text-sm border w-[30px] h-[30px] font-medium flex items-center justify-center text-center rounded-md bg-[#e06e40] text-white"
				>
					3
				</div>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="w-full justify-center 2xl:flex hidden">
		<Card.Root class="w-1/4  shadow-none">
			<Card.Content class="flex flex-row items-center justify-between">
				<div class="flex flex-col">
					<div class="flex space-x-2">
						<Package color="#e06e40" />
						<h3 class="font-medium">
							<TranslatorText
								dictionarie={$selectedLanguage}
								section="process"
								key="card-three-title"
								text="Distribución"
							/>
						</h3>
					</div>
					<p class="text-sm text-muted-foreground">
						<TranslatorText
							dictionarie={$selectedLanguage}
							section="process"
							key="card-three-description"
							text="Envío del biocombustible al mercado global."
						/>
					</p>
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
