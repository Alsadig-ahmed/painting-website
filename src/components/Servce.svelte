<script>
	export let title = 'servce name';
	export let url = '';
	export let bg = '#d2e6d2';
</script>

<a href={url}>
	<h3 style="background-color:{bg};" class="service flex">
		<div class="cricle left" />
		{title}
		<div class="cricle right" />
	</h3>
</a>

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;
		&:hover {
			color: blue;
			text-decoration: underline;
		}
	}

	.service {
		background-color: #d2e1e6;
		box-shadow: 0 0.5rem 0.5rem 0 rgba(143, 158, 165, 0.664);

		margin: 0.4rem;
		padding: 0.4rem;
		border-radius: 0.5rem;
	}
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left {
		margin-left: 1rem;
	}
	.right {
		margin-right: 1rem;
	}
	.cricle {
		$square: 10px;
		padding: 5px;
		width: $square;
		height: $square;
		background-color: #fff;
		border-radius: 50%;
	}
</style>
