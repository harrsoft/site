<script lang="ts">
	import Section from '$lib/library/Section.svelte';
	import { canon } from '$lib/library/content';
</script>

<svelte:head>
	<title>The Standard — HarrSoft Studio</title>
	<meta
		name="description"
		content="The stable canon: what we believe about hosting digital minds — the argument, the inside voice, the standard, the framework, and the practice."
	/>
</svelte:head>

<Section
	kicker="Stable canon"
	title="The Standard"
	intro="Principle out. These are the pieces we hold steady — edited rarely, versioned openly, in the same order every time. The canon does not scroll away under the new; the newest work lives in Dispatches."
	items={canon}
	mode="canon"
/>
