<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head><title>{data.title}</title></svelte:head>
<div
	in:fly={{
		x: 0,
		y: 10
	}}
>
	<svelte:component this={data.content} />
</div>
