<template>
	<main>
		<dialog v-show="open" class="login">
			<form @submit="login">
				<h1>Entrar</h1>

				<hr />

				<Input
				  type="password"
				  label="Senha"
				  placeholder="********"
				  :msg="msgSenha"
				  v-model="senha"
				/>

				<Button
				  type="submit"
				  label="Entrar"
				  :disabled="false"
				  :sucess="false"
				/>
			</form>
		</dialog>

		<h1>Administração</h1>

		<hr />

		<div class="cardapio">
			<div class="salgados-container container">
				<h1>Salgados</h1>

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
				        {{ salgado.nome }}
				      </td>
				      <td>
				        {{ salgado.quantidade }}
				      </td>
				      <td>
				        R${{ salgado.valor }}
				      </td>
				    </tr>
				  </tbody>
				</table>

				<Button
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="addShow('salgado')"
				/>
			</div>

			<div class="doces-container container">
				<h1>Doces</h1>

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
				        Valor
				      </th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr
				      v-for="doce in doces"
				      :key="doce.id"
				    >
				      <td>
				        {{ doce.nome }}
				      </td>
				      <td>
				        {{ doce.quantidade }}
				      </td>
				      <td>
				        R${{ doce.valor }}
				      </td>
				    </tr>
				  </tbody>
				</table>

				<Button
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="addShow('doce')"
				/>
			</div>

			<div class="bebidas-container container">
				<h1>Bebidas</h1>

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
				        Valor
				      </th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr
				      v-for="bebida in bebidas"
				      :key="bebida.id"
				    >
				      <td>
				        {{ bebida.nome }}
				      </td>
				      <td>
				        {{ bebida.quantidade }}
				      </td>
				      <td>
				        R${{ bebida.valor }}
				      </td>
				    </tr>
				  </tbody>
				</table>

				<Button
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="addShow('bebida')"
				/>
			</div>
		</div>

		<div class="password-conatiner">
			<form @submit="changeSenha">
				<h1>Mudar Senha</h1>

				<hr />

				<Input
				  type="password"
				  label="Senha"
				  placeholder="********"
				  :msg="msgNewSenha"
				  v-model="newSenha"
				/>

				<Button
				  type="submit"
				  label="Atualizar"
				  :disabled="false"
				  :sucess="false"
				/>
			</form>
		</div>

		<dialog class="add-conatiner" v-show="show === 'salgado'">
			<form @submit="add('salgado')">
				<h1>Salgado</h1>

				<hr />

				<Input
				  type="text"
				  label="Nome"
				  placeholder="Coxinha"
				  :msg="msgNome"
				  v-model="nome"
				/>

				<Input
				  type="number"
				  label="Quantidade"
				  placeholder="5"
				  :msg="msgQuantidade"
				  v-model="quantidade"
				/>

				<Input
				  type="text"
				  label="Valor"
				  placeholder="7.5"
				  :msg="msgValor"
				  v-model="valor"
				/>

				<Button
				  type="submit"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				/>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="addClose"
				/>
			</form>
		</dialog>

		<dialog class="add-conatiner" v-show="show === 'doce'">
			<form @submit="add('doce')">
				<h1>Doce</h1>

				<hr />

				<Input
				  type="text"
				  label="Nome"
				  placeholder="Bolo Chocolate"
				  :msg="msgNome"
				  v-model="nome"
				/>

				<Input
				  type="number"
				  label="Quantidade"
				  placeholder="5"
				  :msg="msgQuantidade"
				  v-model="quantidade"
				/>

				<Input
				  type="text"
				  label="Valor"
				  placeholder="7.5"
				  :msg="msgValor"
				  v-model="valor"
				/>

				<Button
				  type="submit"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				/>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="addClose"
				/>
			</form>
		</dialog>

		<dialog class="add-conatiner" v-show="show === 'bebida'">
			<form @submit="add('bebida')">
				<h1>Bebida</h1>

				<hr />

				<Input
				  type="text"
				  label="Nome"
				  placeholder="Coca-Cola"
				  :msg="msgNome"
				  v-model="nome"
				/>

				<Input
				  type="number"
				  label="Quantidade"
				  placeholder="5"
				  :msg="msgQuantidade"
				  v-model="quantidade"
				/>

				<Input
				  type="text"
				  label="Valor"
				  placeholder="7.5"
				  :msg="msgValor"
				  v-model="valor"
				/>

				<Button
				  type="submit"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				/>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="addClose"
				/>
			</form>
		</dialog>
	</main>
</template>

<script>
	import Input from '../components/Input.vue'
	import Button from '../components/Button.vue'

	import { supabase } from '../supabase'

	export default {
		name: 'Adm',
		components: {
			Input,
			Button
		},
		data() {
			return {
				open: true,
				show: null,
				senha: null,
				msgSenha: null,
				salgados: null,
				doces: null,
				bebidas: null,
				nome: null,
				msgNome: null,
				quantidade: null,
				msgQuantidade: null,
				valor: null,
				msgValor: null
			}
		},
		methods: {
			async login(e) {
				e.preventDefault()

				if (!this.senha) {
					this.msgSenha = 'A senha não pode ficar vazia'
					return
				}

				this.msgSenha = null

				const { data, error } = await supabase
					.from('adm')
					.select()
					.eq('senha', this.senha)
					.single()

				if (error) {
					this.msgSenha = 'Senha Incorreta'
					return
				}

				this.open = false
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
			},
			async addShow(name) {
				if (name === 'salgado') {
					this.show = 'salgado'
					return
				}

				if (name === 'doce') {
					this.show = 'doce'
					return
				}

				if (name === 'bebida') {
					this.show = 'bebida'
					return
				}
			},
			async addClose() {
				this.show = null
				this.nome = null
				this.quantidade = null
				this.valor = null
			}
		},
		mounted() {
			this.getSalgados()
			this.getDoces()
			this.getBebidas()
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

	dialog {
		position: fixed;
		top: 0;
		left: 0;

		display: grid;
		place-items: center;

		width: 100%;
		height: 100%;

		border: none;

		background: var(--bg-color-t);

		backdrop-filter: blur(10px);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 15px;

		background: var(--bg-color-s);

		padding: 15px;

		border-radius: 10px;

		text-align: center;

		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	form hr {
		width: 90%;
	}

	.cardapio {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 15px;

		margin-inline: auto;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 15px;

		padding: 15px;

		border-radius: 10px;

		background: var(--bg-color-s);
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	.container table {
		width: 100%;
	}

	@media screen and (max-width: 600px) {
		.cardapio {
			grid-template-columns: 100%;
			grid-template-rows: 1fr 1fr 1fr;
		}

		.cardapio table {
			display: block;

			overflow-x: scroll;

			max-width: 300px;
			width: 100%;
		}
	}
</style>