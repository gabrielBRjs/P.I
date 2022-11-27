<template>
	<main>
		<header>
			<h1>Olá <span>{{ nome }}</span></h1>
			<h2>Você está devendo <span>R${{ devendo }}</span></h2>
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
				devendo: 0
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
		padding: 15px;

		border-radius: 10px;

		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	header span {
		color: var(--c-primary);
	}
</style>