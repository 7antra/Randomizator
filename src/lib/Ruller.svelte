<script lang="ts">
	interface RullerConf {
		visible: boolean;
		nb: number;
		type: number;
		width: number;
	}

	export let conf: RullerConf = {
		visible: false,
		nb: 4,
		type: 2,
		width: 10
	};

	export let count: number;
</script>

{#if conf.type == 1}
	<div class="fill" style="height: {~~count}%" />
{/if}
<div class="ruller _{conf.type}">
	{#each Array(conf.nb) as _, i}
		<div class:active={count >= (100 / conf.nb) * (i + 1)} style="top: {(100 / conf.nb) * i}%" />
	{/each}
</div>

<style lang="scss">
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
			// border: 1px solid black;
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
					background-color: var(--color2);
				}
			}
		}
	}

	.fill {
		width: 100%;
		position: absolute;
		bottom: 0;
		height: 50%;
		background-color: var(--color1);
		transition: height 0.2s ease-in-out;
	}
</style>
