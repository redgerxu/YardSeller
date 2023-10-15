<div class="container">
	<img src="/404sadge.svg" alt="404" />
	<h1>404 - Sorry, but we couldn't find anything here.</h1>
	<span>Return to <a href="/">home?</a></span>
</div>

<style lang="scss">
	@import '../variables.scss';

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: Arial, Helvetica, sans-serif;
		height: 100%;
	}

	h1 {
		font-size: 1em;
	}

	a {
		text-decoration: none;
		color: $primary-color;
	}

	a:hover {
		color: $primary-dark;
	}

	img {
		width: auto;
		height: 25em;
	}
</style>
