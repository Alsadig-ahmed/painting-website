<script>
	import Servce from '../components/Servce.svelte';
	import Header from '../components/Header.svelte';
	import LittleLoop from '$lib/LittleLoop.svelte';
	let Servces = [
		{
			url: '',
			title: 'عمل خارجي',
			subWork: ['بوماستيك سلك', 'بوماستك مطفي', 'تكشر رولة ورش'],
			bg: ''
		},
		{
			url: '',
			title: 'عمل داخلي',
			subWork: [
				'ترخيم',
				'ماربل',
				'تعتيق',
				'طينة يابنية',
				'فلورا',
				'3D',
				'القطيفة',
				'تخشيب',
				'سحاب مطاطي'
			],
			bg: ''
		},
		{ url: 'المعرض', title: 'معرض ألاعمال', bg: '' },
		{ url: 'tel:+249963003102', title: 'اطلب فنين', bg: '' },
		{ url: 'فريق-العمل', title: 'فريف العمل', bg: '' }
	];
</script>

<h4 class="cta"><a href="tel:+249963003102"> 0963003102 | إتصل الأن </a></h4>
<Header />
slk
<div class="container">
	<main class="c">
		{#each Servces as s}
			<div>
				<Servce url={s.url} title={s.title} bg={s.bg} />
				<LittleLoop i={s.subWork} />
			</div>
		{/each}
	</main>
</div>

<style lang="scss">
	.cta {
		text-align: right;
		font-size: 2rem;
		margin-right: 20%;
		padding: 0.4rem 0;
		a {
			color: rgb(255, 94, 30);
			text-decoration: none;
			&:hover {
				color: rgba(255, 94, 30, 0.63);
				text-decoration: underline;
			}
		}
	}
	.c {
		width: 100%;
		padding: 0.2rem;
		div {
			background-color: rgba(154, 177, 184, 0.589);
			border-radius: 1rem;
			box-shadow: 0 0 1.3rem 0.1rem rgba(165, 143, 143, 0.664);
			margin-bottom: 0.7rem;
		}
	}
	.container {
		max-width: 460px;
		margin: auto;
	}
</style>
