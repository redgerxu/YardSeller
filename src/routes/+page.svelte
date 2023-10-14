<script lang="ts">
	import ListingDisplay from './../components/ListingDisplay.svelte';
	import { db } from '$lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';
	import type { Listing } from '$lib/types';
	import { onMount } from 'svelte';

	let latitude: number | null = null;
	let longitude: number | null = null;

	let listings: Listing[] = [];

	const getLocation = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
			});
		} else {
			alert('Geolocation is not available in your browser.');
		}
	};

	const fetchData = async () => {
		getLocation();

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
		{#each listings as listing, index}
			{#if index % 2 == 0}
				<div class="row">
					<div class="item">
						<ListingDisplay props={listing} />
					</div>
					{#if listings[index + 1]}
						<div class="item">
							<ListingDisplay props={listing} />
						</div>
					{/if}
				</div>
			{/if}
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
	}

	.listing-display {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.row {
		display: flex;
	}
</style>
