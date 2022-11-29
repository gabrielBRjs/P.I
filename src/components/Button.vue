<template>
	<div class="button-container">
		<button
			:type="type"
			:class="className"
			:disabled="disabled"
		>
			<span v-if="!disabled && !sucess">
				{{ lb }}
			</span>

			<font-awesome-icon
				v-if="label === 'Entrar' && !disabled && !sucess"
				icon="fa-solid fa-arrow-right-to-bracket"
			/>
			<font-awesome-icon
				v-if="label === 'Adicionar' && !disabled && !sucess"
				icon="fa-solid fa-plus"
			/>
			<font-awesome-icon
				v-if="label === 'Registrar' && !disabled && !sucess"
				icon="fa-solid fa-user-plus"
			/>
		</button>
	</div>
</template>

<script>
	export default {
		name: 'Button',
		data() {
			return {
				lb: this.label,
				className: this.label
			}
		},
		props: {
			type: String,
			label: String,
			disabled: Boolean,
			sucess: Boolean
		},
		mounted() {
			if (this.sucess) {
				this.className = 'sucess'
			}

			if (this.label === 'Registrar') {
				this.className = 'register'
			}
		}
	}
</script>

<style scoped>
	button {
	  font-size: 1.5em;

	  background-color: transparent;
	  background-image: linear-gradient(to right, var(--c-primary), var(--c-secondary));

	  color: var(--c-text);

	  border-radius: 10px;
	  border: 1px solid transparent;

	  width: 100%;

	  transition: ease-in .3s;
	}
	button:hover {
	  cursor: pointer;

	  border-color: var(--c-primary);
	  color: var(--c-primary);

	  background: none;
	}

	button span {
		margin-inline: 10px;
	}

	.Sair {
		background-image: linear-gradient(to right, #E32C58, #FFB199);
	}
	.Sair:hover {
		border-color: #E32C58;
		color: #E32C58;
	}

	.loading {
		animation: spin 2s infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	button:disabled,
	.sucess {
		background-image: linear-gradient(to right, #E32C58, #FFB199);

		border-radius: 50%;

		font-size: 1.2em;

		width: 45px;
		height: 45px;
	}
	button:disabled:hover {
		cursor: auto;
		background-image: none;

		color: #E32C58;
		border-color: #E32C58;
	}

	.sucess {
		background-image: linear-gradient(to right, #06BEB6, #48B1BF);
	}
	.sucess:hover {
		background-image: none;

		color: #06BEB6;
		border-color: #06BEB6;
	}

	.register {
		background-image: none;
		background-color: transparent;
	}
</style>