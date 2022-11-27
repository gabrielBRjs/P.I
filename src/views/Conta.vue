<template>
	<main>
		<header>
			<h1>Olá <span>{{ nome }}</span></h1>
			<h2>Você está devendo <span>R${{ devendo }}</span></h2>
			<button @click="logout">Sair</button>
		</header>
	</main>
</template>

<script>
	import { supabase } from '../supabase'

	export default {
		name: 'Conta',
		data() {
			return {
				nome: null,
				devendo: null
			}
		},
		methods: {
			async getUser() {
				const { data: { user } } = await supabase.auth.getUser()

				this.nome = user.user_metadata.name

				const { data } = await supabase
					.from('profiles')
					.select('devendo')
					.eq('id', user.id)
					.single()

				this.devendo = data.devendo
			},
			async logout() {
				const { error } = await supabase.auth.signOut()

				this.$router.push('/login')
			}
		},
		mounted() {
			this.getUser()
		}
	}
</script>

<style>
	main {
		display: grid;
		place-items: center;

		min-height: 100vh;
	}

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