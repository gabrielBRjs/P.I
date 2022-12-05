<template>
	<main>
		<h1>Pedidos</h1>

		<hr />

		<table>
			<thead>
				<tr>
					<th>
						Pedidos N°
					</th>
					<th>
						Cliente
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
					<th>
						Ações
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
						{{ pedido.nome }}
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
					<td class="btns">
						<button @click="updatePedido(pedido.id)">
							<font-awesome-icon icon="fa-solid fa-brazilian-real-sign" />
						</button>
						<button @click="deletePedido(pedido.id)">
							<font-awesome-icon icon="fa-solid fa-trash" />
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>

<script>
	import Input from '../../components/Input.vue'
	import Button from '../../components/Button.vue'

	import { useRouter, useRoute } from 'vue-router'
	import { useLoginStore } from '@/stores/Login'
	import { supabase } from '../../supabase'

	export default {
		name: 'Pedidos',
		setup() {
			const router = useRouter()
			const store = useLoginStore()

			if (!store.logged) {
				router.push('/adm')
			}
		},
		components: {
			Input,
			Button
		},
		data() {
			return {
				pedidos: null
			}
		},
		methods: {
			async getPedidos() {
				const { data, error } = await supabase
					.from('pedidos')
					.select()

				this.pedidos = data
			},
			async updatePedido(id) {
				const { error } = await supabase
				  .from('pedidos')
				  .update({ pago: true })
				  .eq('id', `${id}`)

				this.getPedidos()
			},
			async deletePedido(id) {
				const { error } = await supabase
				  .from('pedidos')
				  .delete()
				  .eq('id', id)

				this.getPedidos()
			}
		},
		mounted() {
			this.getPedidos()
		}
	}
</script>

<style scoped>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;

		min-height: 100vh;

		text-align: center;

		padding: 15px;
	}

	.btns {
		display: flex;
		gap: 5px;
	}

	.btns button {
		font-size: 1.5em;

		padding: 5px;

		border-radius: 10px;
		border: 1px solid var(--c-primary);

		background: transparent;

		transition: ease-in .2s;
	}
	.btns button:hover {
		cursor: pointer;

		background: var(--c-primary);
	}

	.btns button:last-child {
		border-color: var(--c-error);
	}
	.btns button:last-child:hover {
		background: var(--c-error);
	}
</style>