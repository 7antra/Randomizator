<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { quadOut } from 'svelte/easing';
	import Plant from '$lib/svg/Plant.svelte';
	import Ruller from '$lib/Ruller.svelte';

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
			visible: false,
			nb: 4,
			type: 2,
			width: 10
		},
		reverseHalf: true
	};

	$: count = $intro;
	onMount(() => {
		intro.set(100);
	});

	const randomise = () => {
		count = Math.floor(Math.random() * 100) + 1;
	};

	let style = `
		--rullerNb: ${config.ruller.nb};
		--color1: ${config.color1};
		--color2: ${config.color2};
	`;
</script>

<main on:click={randomise} {style} class:reverse={config.reverseHalf && count > 50}>
	{#if config.ruller.visible}
		<Ruller conf={config.ruller} {count} />
	{/if}
	<h1 class:three={count.toString().length === 3}>{~~count}</h1>

	<!-- <div class="config">
		<Plant />
	</div> -->
</main>

<style lang="scss">
	main {
		widows: 100%;
		height: 96vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color2);
		position: relative;
		transition: background-color 0.2s ease-in;

		&.reverse {
			background-color: var(--color1);

			h1 {
				color: var(--color2);
			}

			:global(.fill) {
				background-color: var(--color2);
			}
		}

		h1 {
			mix-blend-mode: difference;
			font-size: 61.8vh;
			-webkit-touch-callout: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			transition: all 1s;
			color: var(--color2);
			transform: translateY(-0.08ch);
			transition: background-color 0.2s ease-in;

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
	}
</style>
