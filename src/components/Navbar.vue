<template>
	<nav>
		<span class="user">
			{{ nome }}
			<br />
			Devendo: R${{ devendo }}
		</span>

		<ul>
			<li>
				<RouterLink to="/">Pedidos</RouterLink>
			</li>
			<li>
				<RouterLink to="/">Fazer pedido</RouterLink>
			</li>
			<li>
				<span class="sair" @click="logout">Sair</span>
			</li>
		</ul>
	</nav>
</template>

<script>
	import { supabase } from '../supabase'

	export default {
		name: 'Navbar',
		data() {
			return {
				nome: null,
				devendo: null
			}
		},
		methods: {
			async getUser() {
				const { data: { user } } = await supabase.auth.getUser()

				const { data } = await supabase
					.from('profiles')
					.select('devendo')
					.eq('id', user.id)
					.single()

				this.nome = user.user_metadata.name
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

<style scoped>
	nav {
		position: sticky;
		top: 0;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 15px;

		background-color: var(--c-primary);
		color: var(--c-text);

		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	nav ul {
		display: inline-flex;
		gap: 15px;

		font-size: 1.2em;

		list-style: none;
	}

	nav ul li a,
	nav ul li .sair {
		display: inline-block;

		position: relative;

		color: var(--c-text);
		
		text-decoration: none;
	}

	nav ul li a::after,
	nav ul li .sair::after {
		content: '';
		
		position: absolute;
		left: 0;
		bottom: 0;
		
		width: 100%;
		height: 2px;
		
		background-image: linear-gradient(to right, var(--c-primary), var(--c-secondary));
		transform: scaleX(0);
		transform-origin: right;
		
		transition: transform .5s;

		box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
	}

	nav ul li a:hover::after,
	nav ul li .sair:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.user {
		font-size: 1.5em;

		padding: 5px;

		background: var(--bg-color);

		border-radius: 10px;

		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	nav ul li .sair {
		color: var(--c-error);
	}
	nav ul li .sair::after {
		background-image: linear-gradient(to right, var(--c-error), var(--c-secondary));
	}
	nav ul li .sair:hover {
		cursor: pointer;
	}
</style>