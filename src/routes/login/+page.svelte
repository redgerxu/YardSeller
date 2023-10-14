<script lang="ts">
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/firebase';
	import { redirect } from '@sveltejs/kit';

	let user = null;

	onAuthStateChanged(auth, (authUser) => {
		if (authUser) {
			redirect(300, '/');
		} else {
			user = null;
		}
	});
</script>

<div class="container">
	<div class="form">Form</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.form {
		width: 50%;
		height: 25%;
		border: 2px solid black;
	}
</style>
