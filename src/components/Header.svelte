<script>
	import ProfileButton from './ProfileButton.svelte';
	import Home from 'svelte-material-icons/Home.svelte';
	import Search from 'svelte-material-icons/Magnify.svelte';
</script>

<div class="container">
	<ul>
		<div class="item">
			<a href="/">
				<Home color="white" />
				<span>YardSeller</span>
			</a>
		</div>
		<div class="item">
			<a href="/explore">
				<Search color="white" />
				<span>Explore</span>
			</a>
		</div>
	</ul>
	<ul class="right">
		<div class="item">
			<ProfileButton />
		</div>
	</ul>
</div>

<style lang="scss">
	@import '../variables.scss';
	.container {
		width: 100%;
		display: flex;
		background-color: $primary-color;
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		justify-content: space-between;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.item {
		display: flex;
		align-items: center;

		font-size: 1.25em;
		font-weight: bolder;

		:hover {
			color: gray;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
		margin: 1em;
	}

	.right {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0.5em;
	}
</style>
