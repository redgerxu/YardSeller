<script lang="ts">
	import type { Listing, User } from '$lib/types';
	import ListingDisplay from '../../../components/ListingDisplay.svelte';
	import { getDoc, type DocumentData, type DocumentReference } from 'firebase/firestore';
	import { page } from '$app/stores';

	const user = $page.data as User;

	async function get(listing: DocumentReference<DocumentData, DocumentData>) {
		const stuff = (await getDoc(listing)).data() as Listing;
		return { ...stuff, uid: listing.id };
	}
</script>

<div class="container">
	<img class="pfp" src={user.photoURL} alt="avatar" />
	<h1>{user.name}</h1>
	<h2>Contact Info</h2>
	<ul class="contacts">
		<li>Email: {user.email}</li>
		{#if user.phoneNumber}
			<li>Phone number: {user.phoneNumber}</li>
		{/if}
	</ul>
	<h2>Listings</h2>
	{#if user.listings.length > 0}
		<div class="listings">
			{#each user.listings as listing}
				{#await get(listing)}
					<span class="loading">Loading...</span>
				{:then loadedListing}
					<ListingDisplay props={loadedListing} />
				{/await}
			{/each}
		</div>
	{:else}<span>Nothing here yet...</span>{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-family: Arial, Helvetica, sans-serif;
	}

	.pfp {
		width: 20em;
		height: 20em;
	}

	.listings {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
