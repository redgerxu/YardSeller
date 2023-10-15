<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, db, userDoc } from '$lib/firebase';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import { addDoc, collection, GeoPoint, Timestamp } from 'firebase/firestore';

	let user: User | null;

	let itemName = '';
	let description = '';
	let photoURL = '';

	onAuthStateChanged(auth, (authUser) => (user = authUser));

	async function handleSubmit() {
		console.log('asdf');

		const millis = Date.now();

		if (!user) {
			goto('/login');
			return;
		}

		const doc = await addDoc(collection(db, 'listings'), {
			itemName: itemName,
			description: description,
			createdAt: new Timestamp(millis / 1000, 0),
			location: new GeoPoint(0, 0),
			photoURL: photoURL,
			author: userDoc(user)
		});

		console.log(doc.id);

		goto('listings/' + doc.id);
	}
</script>

<div class="container">
	<h1>Create a listing</h1>

	<form on:submit={handleSubmit}>
		<label for="itemName">Item Name:</label>
		<input type="text" id="itemName" bind:value={itemName} required />

		<label for="description">Description:</label>
		<textarea id="description" bind:value={description} rows={8} cols={50} />

		<label for="photoURL">Photo URL:</label>
		<input type="text" id="photoURL" bind:value={photoURL} required />

		<button type="submit">Submit</button>
	</form>
</div>

<style lang="scss">
	@import '../../../variables.scss';

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: Arial, Helvetica, sans-serif;
	}

	form {
		display: flex;
		flex-direction: column;
		border-radius: 2em;
		border: 2px solid black;
		padding: 2em;
	}

	input,
	textarea {
		margin-top: 0.25em;
		margin-bottom: 1em;
	}

	input {
		border: none;
		border-bottom: 2px solid #333;
		outline: none;
	}

	button {
		padding: 1em;
		background-color: $primary-color;
		color: white;
		font-weight: bold;
		border: none;
		border-radius: 10em;
	}

	button:hover {
		background-color: $primary-dark;
	}
</style>
