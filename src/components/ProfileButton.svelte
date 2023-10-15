<script lang="ts">
	import { auth, userDoc } from '$lib/firebase';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import SignIn from './SignIn.svelte';
	import { getDoc, updateDoc } from 'firebase/firestore';

	let user: User | null = null;

	onAuthStateChanged(auth, async (authUser) => {
		user = authUser;
		if (authUser) {
			const doc = userDoc(authUser);

			updateDoc(doc, { photoURL: authUser.photoURL ?? '' });
		}
	});
</script>

<div class="container">
	{#if user}
		<img
			src={user.photoURL ? user.photoURL : 'static/favicon.png'}
			alt="avatar"
			width="auto"
			height="40px"
		/>
		<span>{user.displayName}</span>
	{:else}
		<SignIn />
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		border-radius: 100em;
		margin-right: 0.25em;
	}
</style>
