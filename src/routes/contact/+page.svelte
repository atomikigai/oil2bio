<script lang="ts">
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Navbar from '../components/navbar.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { superForm, type SuperValidated, type Infer } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import {
		FormField,
		FormLabel,
		FormButton,
		FormControl,
		FormFieldErrors
	} from '$lib/components/ui/form';
	import Button from '$lib/components/ui/button/button.svelte';
	import { formSchema, type FormSchema } from './schema';
	import { LoaderCircle } from 'lucide-svelte';
	import Footer from '../components/footer.svelte';

	let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance, delayed } = form;
</script>

<div class="w-full h-16 flex items-center justify-center">
	<Navbar isWhite={false} more="" />
</div>

<div id="black" class="w-full min-h-[90vh] flex flex-col justify-center items-center">
	<div class="lg:w-[30%] w-[80%] my-12">
		<h3 class="text-xl font-bold">Contacta con nosotros</h3>
		<p>Nuestros expertos se pondran en contacto contigo.</p>
	</div>

	<div
		class="bg-[url('/c-one.jpg')] 2xl:left-[15rem] 2xl:top-[10rem] lg:left-[8rem] lg:top-[10rem] rounded-xl absolute h-[300px] w-[300px] bg-center bg-cover lg:flex hidden"
	></div>

	<div
		class="bg-[url('/c-two.jpg')] 2xl:left-[10rem] 2xl:top-[28rem] lg:left-[5rem] lg:top-[27rem] rounded-xl absolute h-[300px] w-[300px] bg-center bg-cover lg:flex hidden"
	></div>

	<div
		class="bg-[url('/c-three.jpg')] 2xl:right-[15rem] 2xl:top-[12rem] lg:right-[8rem] lg:top-[10rem] rounded-xl absolute h-[300px] w-[300px] bg-center bg-cover lg:flex hidden"
	></div>

	<div
		class="bg-[url('/c-four.jpg')] 2xl:right-[10rem] 2xl:top-[28rem] lg:right-[4rem] lg:top-[26rem] rounded-xl absolute h-[300px] w-[300px] bg-center bg-cover lg:flex hidden"
	></div>

	<form method="POST" class="lg:w-[30%] w-[80%]" use:enhance>
		<FormField {form} name="fullname">
			<FormControl>
				{#snippet children({ props })}
					<FormLabel>Nombre completo</FormLabel>
					<Input {...props} bind:value={$formData.fullname} />
				{/snippet}
			</FormControl>
			<FormFieldErrors />
		</FormField>

		<FormField {form} name="email">
			<FormControl>
				{#snippet children({ props })}
					<FormLabel>Correo electronico</FormLabel>
					<Input {...props} bind:value={$formData.email} />
				{/snippet}
			</FormControl>
			<FormFieldErrors />
		</FormField>

		<FormField {form} name="description">
			<FormControl>
				{#snippet children({ props })}
					<FormLabel>Descripción</FormLabel>
					<Textarea {...props} bind:value={$formData.description} class="h-48 resize-none" />
				{/snippet}
			</FormControl>
			<FormFieldErrors />
		</FormField>

		<div class="w-full flex justify-end my-12">
			<Button disabled={$delayed} type="submit"
				>{#if $delayed}
					<LoaderCircle class="animate-spin mr-2" />
					<p>Enviando...</p>
				{:else}
					Enviar información
				{/if}</Button
			>
		</div>
	</form>
</div>
<Footer />
