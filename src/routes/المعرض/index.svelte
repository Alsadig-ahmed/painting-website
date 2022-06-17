<script>
	import Servce from '../../components/Servce.svelte';
	import Header from '../../components/Header.svelte';
	import Card from '../../components/Card.svelte';
import Gallery from '../../components/Gallery.svelte';
    let img= "/home.jpg";

</script>

<Header title="فريق العمل" />

<div class="container">
	<main class="c">
			<Gallery work="اعمال الشاشات" />
			<Gallery work="اعمال التعتيق" />
			<Gallery work="أعمال الفلور " />
		
	</main>
</div>

<style lang="scss">
	.c {
		width: 100%;
		height: 1000vh;
		padding: 0.2rem;
	}
	.container {
		// max-width: 460px;
		padding: 0 15%;
		margin: auto;
	}
</style>
