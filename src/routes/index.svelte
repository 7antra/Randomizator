<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { quadOut } from 'svelte/easing';

	// let arr = [];

	let count: number = 0;
	let intro = tweened(0, {
		easing: quadOut,
		duration: 1200
	});

	$: count = $intro;
	onMount(() => {
		intro.set(100);
	});

	const randomise = () => {
		count = Math.floor(Math.random() * 100) + 1;
	};

	// const test = () => {
	// 	arr = [];
	// 	for (let i = 0; i < 1000; i++) {
	// 		randomise();
	// 		arr.push(count);
	// 	}
	// 	console.log('arr : ', arr);
	// };

	// $: arr;
</script>

<main on:click={randomise}>
	<h1 class:three={count.toString().length === 3}>{~~count}</h1>
	<!-- <button on:click={test}>test</button>
	<div class="test">
		{#each arr as x}
			<div style={`grid-column: ${x - 1}/${x};`} />
		{/each}
	</div> -->
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
			transition: all 1s;

			// @media (max-width: 600px) {
			// 	font-size: 31.2vh;
			// }

			&.three {
				font-size: 51.8vh;
			}

			@media screen and (max-aspect-ratio: 1/1) {
				font-size: 31.2vh;
			}
		}

		// .test {
		// 	display: grid;
		// 	position: fixed;
		// 	bottom: 2vh;
		// 	left: 2vh;
		// 	width: calc(100vw - 4vh);
		// 	grid-template-columns: repeat(100, 1fr);

		// 	div {
		// 		height: 2px;
		// 		background-color: red;
		// 	}
		// }
	}
</style>
