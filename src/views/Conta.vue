<template>
	<main>
		<h1>Conta</h1>
	</main>
</template>

<script>
	import { supabase } from '../supabase'

	export default {
		name: 'Conta',
	}
</script>

<style>
	header {
		display: grid;
		place-items: center;
		gap: 15px;

		padding: 15px;

		border-radius: 10px;

		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	header span {
		color: var(--c-primary);
	}

	button {
		font-size: 1.5em;

		padding: 5px;

		border: 1px solid red;
		border-radius: 10px;

		background: transparent;

		color: red;

		transition: ease-in .3s;
	}
	button:hover {
		cursor: pointer;

		background: red;
		color: var(--c-text);
	}
</style>