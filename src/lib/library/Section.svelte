<script lang="ts">
	import type { LibraryItem } from '$lib/library/content';

	interface Props {
		kicker: string;
		title: string;
		intro: string;
		items: LibraryItem[];
		mode?: 'canon' | 'dated' | 'author';
		empty?: string;
	}

	let { kicker, title, intro, items, mode = 'dated', empty }: Props = $props();

	function label(item: LibraryItem): string {
		const bits: string[] = [];
		if (mode === 'author') bits.push(item.author ?? 'The house');
		if (item.date) bits.push(item.date);
		return bits.join(' · ');
	}
</script>

<div class="text-blue font-roboto mx-auto w-full max-w-3xl px-6 py-16">
	<p class="font-capsule text-xs tracking-widest uppercase opacity-70">{kicker}</p>
	<h1 class="font-capsule mt-2 text-4xl font-black sm:text-5xl">{title}</h1>
	<p class="mt-4 max-w-2xl text-lg leading-8">{intro}</p>

	{#if items.length}
		<ol class="mt-12 space-y-8">
			{#each items as item, i}
				<li class="border-blue border-l-2 pl-5">
					<p class="font-capsule text-xs tracking-widest uppercase opacity-70">
						{mode === 'canon' ? `${i + 1}. ${item.kicker}` : label(item) || item.kicker}
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
	{:else if empty}
		<p class="border-blue mt-12 border-l-2 pl-5 text-lg leading-8 opacity-80">{empty}</p>
	{/if}

	<p class="mt-16 text-sm opacity-70">
		<a class="underline" href="/library">← The Library</a>
	</p>
</div>
