<script>
	export let i = [''];
</script>

{#each i as item}
	<p>{item}</p>
{/each}

<style lang="scss">
	p {
		margin-right: 2.4rem;
		text-align: right;
		font-size: 1.32rem;
		&::after {
			content: ' - ';
		}
	}
</style>
