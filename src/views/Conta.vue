<template>
	<main>
		<h1>Conta</h1>

		<hr />

		<div class="pedidos">
			<h2>Pedidos</h2>
		</div>
	</main>
</template>

<script>
	import { supabase } from '../supabase'

	export default {
		name: 'Conta',
		data() {
			return {
				categories: {
					'salgados': 'active',
					'doces': 'disable',
					'bebidas': 'disable'
				},
				salgados: null,
				doces: null,
				bebidas: null,
			}
		},
		methods: {
			async changeCategory(name) {
				if (name === 'salgados') {
					this.categories.salgados = 'active'
					this.categories.doces = 'disable'
					this.categories.bebidas = 'disable'
					return
				}

				if (name === 'doces') {
					this.categories.salgados = 'disable'
					this.categories.doces = 'active'
					this.categories.bebidas = 'disable'
					return
				}

				if (name === 'bebidas') {
					this.categories.salgados = 'disable'
					this.categories.doces = 'disable'
					this.categories.bebidas = 'active'
					return
				}
			},
			async getSalgados() {
				try {
					const { data, error } = await supabase
					  .from('cardapio')
					  .select()
					  .eq('tipo', 'salgado')

					this.salgados = data
				} catch (error) {
					console.log(error)
				}
			},
			async getDoces() {
				try {
					const { data, error } = await supabase
					  .from('cardapio')
					  .select()
					  .eq('tipo', 'doce')

					this.doces = data
				} catch (error) {
					console.log(error)
				}
			},
			async getBebidas() {
				try {
					const { data, error } = await supabase
					  .from('cardapio')
					  .select()
					  .eq('tipo', 'bebida')

					this.bebidas = data
				} catch (error) {
					console.log(error)
				}
			}
		},
		mounted() {
			this.getSalgados()
			this.getDoces()
			this.getBebidas()
		}
	}
</script>

<style>
	main {
		text-align: center;

		min-height: 87vh;
	}

	h1 {
		margin-top: 15px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin: 15px;
	}

	.category-btn {
		background: transparent;

		border: none;
		border-bottom: 1px solid transparent;

		font-size: 2em;

		margin-inline: 15px;

		transition: ease-in .2s;
	}

	.category-btn:hover {
		cursor: pointer;

		color: var(--c-primary);
	}

	.category-btn.active {
		border-color: var(--c-primary);
	}
	.category-btn.active:hover {
		border-color: var(--c-secondary);
	}

	table,
	td, th {
		border-collapse: collapse;
		border: 1px solid var(--c-primary);

		font-size: 1.2em;

		padding: 5px;
	}

	thead {
		background: var(--c-primary);
	}

	tr:nth-child(even) {
		background: var(--bg-color-s);
	}
</style>