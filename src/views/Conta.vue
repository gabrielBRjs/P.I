<template>
	<main>
		<h1>Pedidos</h1>

		<Button
		  type="button"
		  label="Fazer Pedido"
		  class="btn"
		  :disabled="false"
		  :sucess="false"
		  @click="show = true"
		/>

		<hr />

		<h1 v-if="loading">Carregando...</h1>

		<div v-else class="pedidos">
			<h1 v-if="!pedidos">Nenhum pedido realizado</h1>

			<table v-else>
				<thead>
					<tr>
						<th>
							Numero
						</th>
						<th>
							Produto
						</th>
						<th>
							Valor R$
						</th>
						<th>
							Pago ?
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="pedido in pedidos"
						:key="pedido.id"
					>
						<td>
							{{ pedido.id }}
						</td>
						<td>
							{{ pedido.produto }}
						</td>
						<td>
							{{ pedido.valor }}
						</td>
						<td>
							<span v-if="pedido.pago">
								Sim
							</span>
							<span v-else>
								Não
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>

	<dialog class="add" :open="show">
			<div class="dialog-body">
				<h1>fazer pedido</h1>

				<hr />

				<table>
					<thead>
						<tr>
							<th>
								Nome
							</th>
							<th>
								Quantidade
							</th>
							<th>
								Valor R$
							</th>
							<th>
								Ações
							</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="marmita in marmitas"
							:key="marmita.id"
						>
							<td>
								{{ marmita.nome }}
							</td>
							<td>
								{{ marmita.quantidade }}
							</td>
							<td>
								{{ marmita.valor }}
							</td>
							<td>
								<button @click="addPedido(marmita.nome, marmita.valor)">
									+
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="show = false"
				/>
			</div>
		</dialog>
</template>

<script>
	import Button from '../components/Button.vue'

	import { supabase } from '../supabase'

	export default {
		name: 'Conta',
		components: {
			Button
		},
		data() {
			return {
				loading: false,
				pedidos: null,
				nome: null,
				marmitas: null,
				show: false
			}
		},
		methods: {
			async getUser() {
				const { data: { user } } = await supabase.auth.getUser()

				this.nome = user.user_metadata.name
			},
			async getPedidos() {
				await this.getUser()

				try {
					this.loading = true

					const { data, error } = await supabase
					  .from('pedidos')
					  .select()
					  .eq('nome', this.nome)

					if (error) console.log('Error: ', error)

					if (data) this.pedidos = data
				} finally {
					this.loading = false
				}
			},
			async getMarmitas() {
				try {
					const { data, error } = await supabase
					  .from('cardapio')
					  .select()
					  .eq('tipo', 'marmita')

					if (error) console.log('Error: ', error)

					this.marmitas = data
				} catch (error) {
					console.log(error)
				}
			},
			async addPedido(nome, valor) {
				const { error } = await supabase
				  .from('pedidos')
				  .insert({
				  	produto: `${nome}`,
				  	valor: valor,
				  	nome: this.nome,
				  	pago: false
				  })

				this.getPedidos()
			}
		},
		mounted() {
			this.getPedidos()
			this.getMarmitas()
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

	.pedidos {
		display: grid;
		place-items: center;
	}

	.btn {
		width: 15%;

		margin-inline: auto;
	}

	dialog {
		position: fixed;

		top: 0;
		left: 0;

		background: var(--bg-color-t);

		border: none;

		backdrop-filter: blur(10px);

		width: 100%;
		height: 100%;
	}

	.dialog-body {
		display: grid;
		place-items: center;

		max-width: 30rem;
		width: 100%;

		padding: 15px;

		background: var(--bg-color-s);

		margin: auto;
	}

	td {
		text-align: center;
	}

	td button {
		font-size: 1.3em;

		padding: 5px;

		width: 45px;
		height: 45px;

		border: 1px solid var(--c-primary);
		border-radius: 10px;

		background: transparent;

		transition: ease-in .2s;
	}
	td button:hover {
		cursor: pointer;

		background: var(--c-primary);
	}
</style>