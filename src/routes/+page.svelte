<script lang="ts">
	import ListingDisplay from './../components/ListingDisplay.svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth, db } from '$lib/firebase';
	import { redirect } from '@sveltejs/kit';
	import { collection, getDocs } from 'firebase/firestore';
	import type { Listing } from '$lib/types';

	let user = null;
	let latitude = null;
	let longitude = null;
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

	onAuthStateChanged(auth, (authUser) => {
		if (authUser) {
			// User is signed in
			user = authUser;
		} else {
			// User is signed out
			user = null;
			redirect(300, '/login');
		}
	});

	const fetchData = async () => {
		getLocation();

		const listingsCollec = collection(db, 'listings/');

		const queries = await getDocs(listingsCollec);

		listings = queries.docs.map((query) => query.data as unknown as Listing);
	};
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
