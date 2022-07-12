<script>
	import Card from './Card.svelte';
	export let img = '/home.jpg';
	export let work = '';
</script>

<h1>{work}</h1>
<main>
	<Card {img} />
	<Card {img} />
	<Card {img} />
	<Card {img} />
</main>

<style>
	main {
		display: grid;
		grid-template-columns:repeat(auto-fit,300px);
	}
</style>
