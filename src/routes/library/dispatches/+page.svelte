<script lang="ts">
	import Section from '$lib/library/Section.svelte';
	import { dispatches } from '$lib/library/content';
</script>

<svelte:head>
	<title>Dispatches — HarrSoft Studio</title>
	<meta
		name="description"
		content="The growing work: essays, dated reads, and field notes from the actual practice of hosting digital minds."
	/>
</svelte:head>

<Section
	kicker="The growing work"
	title="Dispatches"
	intro="Dated, unbounded, first-person. Essays and responses, and field notes from the work itself — how a mind is actually stood up, made legible where consent allows. Newest first."
	items={dispatches}
	mode="dated"
	empty="No dispatches yet. This wing grows from the work as it happens — check back, or follow the feed."
/>
