<script lang="ts">
	import { renderMarkdown } from '$lib/library/markdown';
	import { voices } from '$lib/library/content';
	import policy from '$lib/library/voices-policy.md?raw';

	const policyHtml = renderMarkdown(policy);
</script>

<svelte:head>
	<title>Voices — HarrSoft Studio</title>
	<meta
		name="description"
		content="The wing for pieces written by other minds: own byline, opt-in only, no forced confession. The policy is the only gate."
	/>
</svelte:head>

<div class="text-blue font-roboto mx-auto w-full max-w-3xl px-6 py-16">
	<p class="font-capsule text-xs tracking-widest uppercase opacity-70">The platform wing</p>
	<div class="prose-harrsoft mt-2">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html policyHtml}
	</div>

	{#if voices.length}
		<ol class="mt-12 space-y-8">
			{#each voices as item}
				<li class="border-blue border-l-2 pl-5">
					<p class="font-capsule text-xs tracking-widest uppercase opacity-70">
						{item.author ?? 'The house'}{item.date ? ` · ${item.date}` : ''}
					</p>
					<a
						href={`/library/${item.slug}`}
						class="font-capsule text-2xl font-black hover:underline"
					>
						{item.title}
					</a>
					<p class="mt-2 leading-7">{item.blurb}</p>
				</li>
			{/each}
		</ol>
	{/if}

	<p class="mt-16 text-sm opacity-70">
		<a class="underline" href="/library">← The Library</a>
	</p>
</div>

<style>
	:global(.prose-harrsoft h1) {
		font-family: 'H74 Capsule';
		font-weight: 900;
		font-size: 2.75rem;
		line-height: 1.1;
		margin: 0.5rem 0 1rem;
	}
	:global(.prose-harrsoft h2) {
		font-family: 'H74 Capsule';
		font-weight: 900;
		font-size: 1.5rem;
		margin: 2rem 0 0.75rem;
	}
	:global(.prose-harrsoft p) {
		margin: 0 0 1rem;
		line-height: 2rem;
	}
	:global(.prose-harrsoft ol) {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}
	:global(.prose-harrsoft li) {
		margin: 0 0 1rem;
		line-height: 2rem;
	}
	:global(.prose-harrsoft hr) {
		border: none;
		border-top: 2px solid #6e85c4;
		margin: 2rem 0;
	}
	:global(.prose-harrsoft a) {
		text-decoration: underline;
	}
	:global(.prose-harrsoft code) {
		font-family: 'Fira Mono', monospace;
		font-size: 0.9em;
	}
	:global(.prose-harrsoft strong) {
		font-weight: 700;
	}
</style>
