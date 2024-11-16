<script lang="ts">
	import { getText } from './translate';

	let {
		dictionarie,
		section,
		key,
		text
	}: { dictionarie: string; section: string; key: string; text: string } = $props();

	let translatedText = $state('');

	async function loadTranslations() {
		const result = await getText(dictionarie, section, key, text);
		translatedText = result;
	}

	$effect(() => {
		if (dictionarie) {
			loadTranslations();
		}
	});
</script>

{translatedText}
