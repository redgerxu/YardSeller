<script lang="ts">
	export let name: string;
	export let uid: string;
</script>

<a href={'/users/' + uid}>{name}</a>

<style lang="scss">
	@import '../variables.scss';

	a {
		text-decoration: none;
		color: $secondary-color;
	}

	a:hover {
		color: $secondary-dark;
	}
</style>
