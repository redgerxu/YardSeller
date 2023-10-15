<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Listing, User } from '$lib/types';
	import { getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	export let props: Listing;

	let authorName = '...';

	const fetchData = async () => {
		const data = await getDoc(props.author);

		authorName = (data.data() as User).name;
	};

	onMount(() => fetchData());
</script>

<button class="container" on:click={() => goto('/listings/' + props.uid)}>
	<img src={props.photoURL} alt={props.itemName} />
	<h1>{props.itemName} - {authorName}</h1>
	<p>{props.description}</p>
</button>

<style lang="scss">
	.container {
		border-radius: 1em;
		border: 2px solid black;
		padding: 1em;
		width: 20em;
	}
	h1 {
		font-size: 1em;
	}

	img {
		width: 100%;
		height: 15em;
	}
</style>
