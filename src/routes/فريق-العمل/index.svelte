<script>
	import Servce from '../../components/Servce.svelte';
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
	let img = '/home.jpg';
	let supervisors = [
		{ name: 'الصادق أحمد', number: 'tel:+249963003102' },
		{ name: 'احمد', number: 'tel:+24991000000' }
	];
</script>

<Header title="فريق العمل" />

<div class="container">
	<main class="c">
		{#each supervisors as supervisor}
			<Card {img} text={supervisor.name} url={supervisor.number} />
		{/each}
		<!-- <Card {img} url="tel:+249127871021" text="عبدالعزيز عصام - أدارة" />
		<Card {img} url="tel:+249127871021" text="السيد - منسق ترحال" />
		<Card {img} url="tel:+249127871021" text="ابوعبيدة منسق دليفري" />
		<Card {img} url="tel:+249127871021" text="النزير - منسق رقشات" />
		<Card {img} url="tel:+249127871021" text="عمران - منسق فنيين" />
		<Card {img} url="tel:+249" text="الهادي منسق ولاية الخرطوم" /> -->
	</main>
</div>

<style>
	.c {
		width: 100%;
		height: 1000vh;
		padding: 0.2rem;
	}
	.container {
		max-width: 460px;
		margin: auto;
	}
</style>
