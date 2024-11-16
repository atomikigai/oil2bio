<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { selectedLanguage } from './store';

	interface Languages {
		label: string;
		value: string;
	}

	const languages: Languages[] = [
		{ label: 'ES', value: 'es' },
		{ label: 'EN', value: 'en' },
		{ label: 'AR', value: 'ar' }
	];

	const triggeredValue = $derived(languages.find((x) => x.value === $selectedLanguage)?.label);
</script>

<Select.Root type="single" bind:value={$selectedLanguage}>
	<Select.Trigger class="w-[100px] right-5 absolute space-x-2"
		><img src={`/${triggeredValue?.toLowerCase()}.png`} width="20" height="20" alt="" />
		<span>{triggeredValue}</span></Select.Trigger
	>
	<Select.Content>
		{#each languages as lang}
			<Select.Item value={lang.value} class="space-x-2"
				><img src={`/${lang.value}.png`} width="20" height="20" alt="" />
				<span>{lang.label}</span></Select.Item
			>
		{/each}
	</Select.Content>
</Select.Root>
