<script lang="ts">
	import '../reset.css';
	import '../variables.css';
	import '../global.scss';
	import { page } from '$app/stores';
	const routes = [
		{
			path: '/',
			name: 'home'
		},
		{
			path: '/projects',
			name: 'projects'
		},
		{
			path: '/about',
			name: 'about'
		}
	];
</script>

<nav>
	{#each routes as route}
		<a href={route.path} class:disabled={route.path === $page.url.pathname}>{route.name}</a>
	{/each}
</nav>
<main>
	<slot />
</main>

<style lang="scss">
	@use '../mixins.scss';
	nav {
		display: flex;
		flex-wrap: wrap;
	}
	main {
		@include mixins.beveled-corners(1rem);
		margin: auto;
		margin-top: 1rem;
		max-width: 800px;
		background: linear-gradient(-15deg, hsl(var(--hsl-green-300)), hsl(var(--hsl-green-500)));
		padding: 1rem;
		transition: clip-path 0.2s;
	}

	@media screen and (max-width: 800px) {
		main {
			@include mixins.beveled-corners(0rem);
		}
	}
	a {
		color: hsl(var(--hsl-orange-500));
		margin: 0.5rem;
		background-color: hsla(var(--hsl-blue-300), 0.8);
		padding: 0.25rem 0.5rem;
		font-family: var(--ft-content);
		text-decoration: none;
		font-size: 1.5em;
		font-weight: 600;
		@include mixins.beveled-corners(0.375rem);
		transition: transform 0.1s;
	}

	a:hover,
	a:focus {
		color: hsl(var(--hsl-orange-500));
		background-color: hsl(var(--hsl-orange-300), 1);
		transform: scale(1.05);
	}

	a.disabled,
	a.disabled:hover,
	a.disabled:focus {
		color: hsl(var(--hsl-green-500));
		background-color: hsl(var(--hsl-orange-300));
		transform: scale(0.9);
	}
</style>
