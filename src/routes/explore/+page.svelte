<script lang="ts">
	import type { Listing } from '$lib/types';
	import ListingDisplay from '../../components/ListingDisplay.svelte';
	import Searchbar from '../../components/Searchbar.svelte';

	/** @type {import('./$types').PageData} */
	export let data: { data: Listing[] };

	const listings = data.data;
</script>

<div class="container">
	<h1>Explore</h1>
	<Searchbar />
	<div class="listing-display">
		{#each listings as listing}
			<div class="item">
				<ListingDisplay props={listing} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.listing-display {
		margin-top: 1em;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
</style>
