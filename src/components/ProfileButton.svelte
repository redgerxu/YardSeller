<script lang="ts">
	import { auth } from '$lib/firebase';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import SignIn from './SignIn.svelte';

	let user: User | null = null;

	onAuthStateChanged(auth, (authUser) => (user = authUser));
</script>

<div class="container">
	{#if user}
		<img src={user.photoURL ? user.photoURL : 'static/favicon.png'} alt="avatar" />
		{user.displayName}
	{:else}
		<SignIn />
	{/if}
</div>

<style lang="scss">
</style>
