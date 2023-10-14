<script lang="ts">
	import Search from 'svelte-material-icons/Magnify.svelte';

	let inputValue = ''; // Initialize a variable to store the input value

	// Function to handle input changes
	function handleInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		inputValue = target.value;
	}

	const submit = () => {};
</script>

<div class="container">
	<input
		type="text"
		bind:value={inputValue}
		on:input={handleInputChange}
		placeholder="Enter some keywords"
	/>
	<button on:click={submit}>
		<Search color="white" size="auto" />
	</button>
</div>

<style lang="scss">
	@import '../variables.scss';

	.container {
		width: 40%;
		height: 3em;
		border-radius: 10em;
		border: 2px solid black;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
		overflow: hidden;
	}

	input {
		margin-top: 1em;
		margin-bottom: 1em;
		border-width: 0;
		margin-left: 1.5em;
		padding-top: 1em;
		padding-bottom: 1em;
		position: absolute;
		left: 0;
		width: auto;
		flex: 1;
		width: 85%;
	}

	button {
		background-color: $primary-color;
		height: 100%;
		padding: 0.5em;
		border: 0;
	}

	button:hover {
		background-color: $primary-dark;
	}
</style>
