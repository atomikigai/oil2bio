<script lang="ts">
	// Supports weights 400-700
	import '@fontsource-variable/lora';
	import '@fontsource-variable/open-sans';
	import '@fontsource/poppins';
	import '@fontsource/roboto';

	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
