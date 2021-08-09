<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { quadOut } from 'svelte/easing';

	// let arr = [];

	let count: number = 0;
	let intro = tweened(1, {
		easing: quadOut,
		duration: 1200
	});

	export let config = {
		color1: '#000000',
		color2: '#ebebeb',
		ruller: {
			nb: 4,
			type: 2,
			width: 10
		}
	};

	$: count = $intro;
	onMount(() => {
		intro.set(100);
	});

	const randomise = () => {
		count = Math.floor(Math.random() * 100) + 1;
	};

	$: style = `
		--rullerNb: ${config.ruller.nb};
		--color1: ${config.color1}
		--color2: ${config.color2}
	`;

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

<main on:click={randomise} {style}>
	{#if config.ruller.type == 1}
		<div class="fill" style="height: {~~count}%" />
	{/if}
	<div class="ruller _{config.ruller.type}">
		{#each Array(config.ruller.nb) as _, i}
			<div
				class:active={count >= (100 / config.ruller.nb) * (i + 1)}
				style="top: {(100 / config.ruller.nb) * i}%"
			/>
		{/each}
	</div>
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
		background-color: var(--color1);
		position: relative;

		.ruller {
			width: 100%;
			position: absolute;
			height: 100%;

			div {
				position: absolute;
				width: 10%;
				height: 1px;
				background-color: var(--color1);
				mix-blend-mode: difference;
			}

			&._2 {
				top: 82%;
				width: 61.8%;
				height: 5vh;
				border: 1px solid black;
				display: grid;
				gap: 1px;
				grid-template-columns: repeat(var(--rullerNb), 1fr);

				div {
					position: relative;
					width: 100%;
					height: 100%;
					position: relative;
					top: 0 !important;
					&.active {
						background-color: black;
					}
				}
			}
		}

		.fill {
			width: 100%;
			position: absolute;
			bottom: 0;
			height: 50%;
			background: var(--color2);
			transition: height 0.2s ease-in-out;
		}

		h1 {
			mix-blend-mode: difference;
			font-size: 61.8vh;
			-webkit-touch-callout: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			transition: all 1s;
			color: var(--color1);
			transform: translateY(-0.08ch);

			// @media (max-width: 600px) {
			// 	font-size: 31.2vh;
			// }

			&.three {
				font-size: 51.8vh;
			}

			@media screen and (max-aspect-ratio: 1/1) {
				font-size: 31.2vh;

				&.three {
					font-size: 21.8vh;
				}
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
