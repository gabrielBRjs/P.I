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

		<Button
		  type="button"
		  label="Pedidos"
		  :disabled="false"
		  :sucess="false"
		  @click="$router.push('/adm/pedidos')"
		/>

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
				        Valor R$
				      </th>
				      <th>
				      	Ações
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
				        <input
				        	type="number"
				        	:value="salgado.quantidade"
				        	@input="updateProduto(salgado.id, 'quantidade', $event.target.value)"
				        />
				      </td>
				      <td>
				        <input
				        	type="number"
				        	:value="salgado.valor"
				        	@input="updateProduto(salgado.id, 'valor', $event.target.value)"
				        />
				      </td>
				      <td>
				      	<button
				      		class="delete"
				      		@click="deleteProduto(salgado.id)"
				      	>
				      		<font-awesome-icon icon="fa-solid fa-trash" />
				      	</button>
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
				        Valor R$
				      </th>
				      <th>
				      	Ações
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
				        <input
				        	type="number"
				        	:value="doce.quantidade"
				        	@input="updateProduto(doce.id, 'quantidade', $event.target.value)"
				        />
				      </td>
				      <td>
				        <input
				        	type="number"
				        	:value="doce.valor"
				        	@input="updateProduto(doce.id, 'valor', $event.target.value)"
				        />
				      </td>
				      <td>
				      	<button
				      		class="delete"
				      		@click="deleteProduto(doce.id)"
				      	>
				      		<font-awesome-icon icon="fa-solid fa-trash" />
				      	</button>
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
				        Valor R$
				      </th>
				      <th>
				      	Ações
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
				        <input
				        	type="number"
				        	:value="bebida.quantidade"
				        	@input="updateProduto(bebida.id, 'quantidade', $event.target.value)"
				        />
				      </td>
				      <td>
				        <input
				        	type="number"
				        	:value="bebida.valor"
				        	@input="updateProduto(bebida.id, 'valor', $event.target.value)"
				        />
				      </td>
				      <td>
				      	<button
				      		class="delete"
				      		@click="deleteProduto(bebida.id)"
				      	>
				      		<font-awesome-icon icon="fa-solid fa-trash" />
				      	</button>
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
			<div class="marmitas-container container">
				<h1>Marmitas</h1>

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
				        <input
				        	type="number"
				        	:value="marmita.quantidade"
				        	@input="updateProduto(marmita.id, 'quantidade', $event.target.value)"
				        />
				      </td>
				      <td>
				        <input
				        	type="number"
				        	:value="marmita.valor"
				        	@input="updateProduto(marmita.id, 'valor', $event.target.value)"
				        />
				      </td>
				      <td>
				      	<button
				      		class="delete"
				      		@click="deleteProduto(marmita.id)"
				      	>
				      		<font-awesome-icon icon="fa-solid fa-trash" />
				      	</button>
				      </td>
				    </tr>
				  </tbody>
				</table>

				<Button
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="addShow('marmita')"
				/>
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
		</div>

		<dialog class="add-conatiner" v-show="show === 'salgado'">
			<div class="form">
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
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="add('salgado')"
				/>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="addClose"
				/>
			</div>
		</dialog>

		<dialog class="add-conatiner" v-show="show === 'doce'">
			<div class="form">
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
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="add('doce')"
				/>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="addClose"
				/>
			</div>
		</dialog>

		<dialog class="add-conatiner" v-show="show === 'bebida'">
			<div class="form">
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
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="add('bebida')"
				/>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="addClose"
				/>
			</div>
		</dialog>

		<dialog class="add-conatiner" v-show="show === 'marmita'">
			<div class="form">
				<h1>Marmita</h1>

				<hr />

				<Input
				  type="text"
				  label="Nome"
				  placeholder="Marmita P"
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
				  type="button"
				  label="Adicionar"
				  :disabled="false"
				  :sucess="false"
				  @click="add('marmita')"
				/>

				<Button
				  type="button"
				  label="Cancelar"
				  :disabled="false"
				  :sucess="false"
				  @click="addClose"
				/>
			</div>
		</dialog>
	</main>
</template>

<script>
	import Input from '../../components/Input.vue'
	import Button from '../../components/Button.vue'

	import { useLoginStore } from '@/stores/Login'
	import { supabase } from '../../supabase'

	export default {
		name: 'Adm',
		components: {
			Input,
			Button
		},
		setup() {
			const store = useLoginStore()

			return { store }
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
				marmitas: null,
				nome: null,
				msgNome: null,
				quantidade: null,
				msgQuantidade: null,
				valor: null,
				msgValor: null,
				newSenha: null,
				msgNewSenha: null
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
				this.store.login
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
			async getMarmitas() {
			  try {
			    const { data, error } = await supabase
			      .from('cardapio')
			      .select()
			      .eq('tipo', 'marmita')

			    this.marmitas = data
			  } catch (error) {
			    console.log(error)
			  }
			},
			async addShow(name) {
				this.show = name
			},
			async addClose() {
				this.show = null
				this.nome = null
				this.quantidade = null
				this.valor = null
			},
			async updateProduto(id, type, valor) {
				if (type === 'quantidade') {
					const { error } = await supabase
					  .from('cardapio')
					  .update({ quantidade: valor })
					  .eq('id', `${id}`)

					if (error) window.alert('Não foi possível atualizar a quantidade')
					return
				}

				if (type === 'valor') {
					const { error } = await supabase
					  .from('cardapio')
					  .update({ valor: valor })
					  .eq('id', `${id}`)

					console.log('Error: ', error)

					if (error) window.alert('Não foi possível atualizar o valor')
					return
				}

				this.getSalgados()
				this.getDoces()
				this.getBebidas()
				this.getMarmitas()
			},
			async deleteProduto(id) {
				const { error } = await supabase
				  .from('cardapio')
				  .delete()
				  .eq('id', id)

				if (error) window.alert('Não foi possível deletar do cardapio')

				this.getSalgados()
				this.getDoces()
				this.getBebidas()
			},
			async add(type) {
				if (!this.nome) {
					this.msgNome = 'O nome é obrigatório'
					this.msgQuantidade = null
					this.msgValor = null
					return
				}

				if (!this.quantidade) {
					this.msgQuantidade = 'A quantidade é obrigatória'
					this.msgNome = null
					this.msgValor = null
					return
				}

				if (!this.valor) {
					this.msgValor = 'O valor é obrigatório'
					this.msgNome = null
					this.msgQuantidade = null
					return
				}

				this.msgNome = null
				this.msgQuantidade = null
				this.msgValor = null

				const { error } = await supabase
				  .from('cardapio')
				  .insert({
				  	nome: `${this.nome}`,
				  	quantidade: this.quantidade,
				  	valor: this.valor,
				  	tipo: type
				  })

				if (error) window.alert('Não foi possível adicionar o produto')

				this.getSalgados()
				this.getDoces()
				this.getBebidas()
				this.getMarmitas()
				this.addClose()
			},
			async changeSenha(e) {
				e.preventDefault()

				if (!this.newSenha) {
					this.msgNewSenha = 'A senha é obrigatória'
					return
				}

				this.msgNewSenha = null

				const { error } = await supabase
				  .from('adm')
				  .update({ senha: this.newSenha })
				  .eq('id', 1)

				if (error) window.alert('Não foi possível atualizar a senha')
				
				if (!error) window.alert('Senha alterada com sucesso')
			}
		},
		mounted() {
			if (this.store.logged) {
				this.open = false
			}

			this.getSalgados()
			this.getDoces()
			this.getBebidas()
			this.getMarmitas()
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

	form,
	.form {
		display: flex;
		flex-direction: column;
		gap: 15px;

		background: var(--bg-color-s);

		padding: 15px;

		border-radius: 10px;

		text-align: center;

		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	form hr,
	.form hr {
		width: 90%;
	}

	table {
		display: block;

		border: none;

		max-height: 11rem;
		height: 100%;

		overflow-y: scroll;

		padding: 0;
	}

	tr, th {
		width: 100%;
	}

	table input {
		background: var(--bg-color-s);

		font-size: 1.2em;

		padding: 5px;

		border-radius: 5px;

		max-width: 10rem;

		outline: none;

		text-align: center;

		border: 1px solid var(--c-primary);
	}

	.cardapio {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
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

	button.delete {
		font-size: 1.1em;

		padding: 5px;

		border: 1px solid var(--c-error);
		border-radius: 10px;

		color: var(--c-error);

		background: transparent;

		width: 3rem;
		height: 3rem;

		transition: ease-in .3s;
	}
	button.delete:hover {
		cursor: pointer;

		background: var(--c-error);

		color: var(--c-text);
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