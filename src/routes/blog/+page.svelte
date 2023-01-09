<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Blogs</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>{post.meta.title}</a>
			</h2>
			{#if post.meta.summary}
				<p>{post.meta.summary}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	ul::after {
	}
</style>
