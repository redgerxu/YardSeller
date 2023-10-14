<script>
	import Header from '../components/Header.svelte';
</script>

<svelte:head />

<div class="header">
	<Header />
</div>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		margin: 0;
		padding: 0;
	}
</style>
