<script lang="ts">
	import { Listing } from '$lib/types.ts';
	export let props: Listing;
</script>

<div class="container">
	<img src={props.photoURL} alt={props.description} />
	<h1>{props.name}</h1>
	<p>{props.description}</p>
</div>

<style lang="scss">
	h1 {
		font-size: 1em;
	}
</style>
