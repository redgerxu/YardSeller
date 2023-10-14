<script lang="ts">
	import { auth } from '$lib/firebase';
	import {
		GoogleAuthProvider,
		onAuthStateChanged,
		signInWithPopup,
		type User
	} from 'firebase/auth';

	let user: User | null = null;

	onAuthStateChanged(auth, (authUser) => (user = authUser));

	const provider = new GoogleAuthProvider();

	provider.addScope('profile');
	provider.addScope('email');

	const signIn = () => {
		signInWithPopup(auth, provider);
	};
</script>

<button class="container" on:click={signIn}>Sign in</button>

<style lang="scss">
	@import '../variables.scss';

	.container {
		padding: 0.75em;
		border-radius: 0.5em;
		border: 0;
		background-color: $secondary-color;
		color: white;
	}
</style>
