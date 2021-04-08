<script lang="ts">
	let count: number = 100;

	const randomise = () => {
		count = Math.random() * 100;
	};
</script>

<main on:click={randomise}>
	<h1>{~~count}</h1>
</main>

<style lang="scss">
	main {
		widows: 100%;
		height: 96vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ebebeb;

		h1 {
			font-size: 61.8vh;
			-webkit-touch-callout: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}
	}
</style>
