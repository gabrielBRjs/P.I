<template>
	<main>
		<h1>Cardapio</h1>

		<hr />

		<header>
			<button
				class="category-btn"
				:class="categories.salgados"
				@click="changeCategory('salgados')"
			>
				Salgados
			</button>
			<button
				class="category-btn"
				:class="categories.doces"
				@click="changeCategory('doces')"
			>
				Doces
			</button>
			<button
				class="category-btn"
				:class="categories.bebidas"
				@click="changeCategory('bebidas')"
			>
				Bebidas
			</button>
		</header>

		<section>
			<table
				v-show="categories.salgados === 'active'"
			>
				<thead>
					<tr>
						<th>
							Nome
						</th>
						<th>
							Quantidade
						</th>
						<th>
							Valor
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="salgado in salgados"
						:key="salgado.id"
					>
						<td>
							{{ salgado.nome_produto }}
						</td>
						<td>
							{{ salgado.quantidade_produto }}
						</td>
						<td>
							R${{ salgado.preco }}
						</td>
					</tr>
				</tbody>
			</table>

			<table
				v-show="categories.doces === 'active'"
			>
				<thead>
					<tr>
						<th>
							Nome
						</th>
						<th>
							Quantidade
						</th>
						<th>
							Valor
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Bolo Chocolate
						</td>
						<td>
							9
						</td>
						<td>
							R$3,50
						</td>
					</tr>
					<tr>
						<td>
							Brigadeiro
						</td>
						<td>
							8
						</td>
						<td>
							R$2,50
						</td>
					</tr>
				</tbody>
			</table>

			<table
				v-show="categories.bebidas === 'active'"
			>
				<thead>
					<tr>
						<th>
							Nome
						</th>
						<th>
							Quantidade
						</th>
						<th>
							Valor
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							Coca-Cola 2L
						</td>
						<td>
							100
						</td>
						<td>
							R$10,00
						</td>
					</tr>
					<tr>
						<td>
							Achocolatado
						</td>
						<td>
							9
						</td>
						<td>
							R$3,50
						</td>
					</tr>
				</tbody>
			</table>
		</section>
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
					  .from('produtos')
					  .select()

					console.log('Data: ', data)

					this.salgados = data
				} catch (error) {
					console.log(error)
				}
			}
		},
		mounted() {
			this.getSalgados()
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