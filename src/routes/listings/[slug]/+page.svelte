<script lang="ts">
	import AuthorLink from './../../../components/AuthorLink.svelte';
	import type { Listing, User } from '$lib/types';
	import { getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data: Listing;

	let author: User | null;

	const getAuthor = async () => {
		const stuff = await getDoc(data.author);
		author = stuff.data() as User;
	};

	onMount(getAuthor);
</script>

<div class="container">
	<div class="grid">
		<img src={data.photoURL} alt={data.itemName} />
		<div class="text">
			<h1>{data.itemName}</h1>
			<span
				>Posted by
				{#if author}
					<AuthorLink name={author.name} uid={author.uid} />
				{:else}
					...
				{/if} on {new Date(data.createdAt.seconds * 1000).toDateString()}</span
			>
			<hr />
			<span>{@html data.description}</span>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: Arial, Helvetica, sans-serif;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	img {
		width: auto;
		height: 40em;
	}

	.text {
		padding: 2em;
	}
</style>
