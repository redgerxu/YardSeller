<script lang="ts">
	import ListingDisplay from './../components/ListingDisplay.svelte';
	import { db } from '$lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';
	import type { Listing } from '$lib/types';
	import { onMount } from 'svelte';

	let listings: Listing[] = [];

	const fetchData = async () => {
		const listingsCollec = collection(db, 'listings/');

		const queries = await getDocs(listingsCollec);

		listings = queries.docs.map((query) => {
			return query.data() as unknown as Listing;
		});
	};

	onMount(() => fetchData());
</script>

<div class="container">
	<h1>Home</h1>
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
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
</style>
