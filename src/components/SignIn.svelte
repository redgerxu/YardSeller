<script lang="ts">
	import { auth, userDoc } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { getDoc, setDoc } from 'firebase/firestore';

	const provider = new GoogleAuthProvider();

	provider.addScope('profile');
	provider.addScope('email');

	const signIn = async () => {
		const creds = await signInWithPopup(auth, provider);
		const userRef = userDoc(creds.user);

		if (!(await getDoc(userRef)).exists()) {
			setDoc(userRef, {
				name: creds.user.displayName,
				email: creds.user.email,
				phoneNumber: creds.user.phoneNumber,
				listings: [],
				uid: creds.user.uid
			});
		}
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
