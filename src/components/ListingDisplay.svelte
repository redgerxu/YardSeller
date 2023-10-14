<script lang="ts">
	import type { Listing } from '$lib/types';
	export let props: Listing;
</script>

<div class="container">
	<img src={props.photoURL} alt={props.description} />
	<h1>{props.itemName}</h1>
	<p>{props.description}</p>
</div>

<style lang="scss">
	h1 {
		font-size: 1em;
	}
</style>
