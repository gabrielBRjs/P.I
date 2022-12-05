<template>
	<button @click="$router.back()">
		<font-awesome-icon icon="fa-solid fa-arrow-left" />
	</button>
</template>

<style scoped>
	button {
		position: fixed;

		bottom: 10px;
		right: 10px;

		display: grid;
		place-items: center;

		font-size: 2em;

		width: 45px;
		height: 45px;

		border-radius: 50%;
		border: 1px solid var(--c-primary);

		background-color: var(--c-primary);

		z-index: 9999;

		transition: ease-in .2s;

		box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	}

	button:hover {
		cursor: pointer;

		background: transparent;
	}
</style>