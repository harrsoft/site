<script lang="ts">
	import { libraryItems, dispatches } from '$lib/library/content';
</script>

<svelte:head>
	<title>The Library — HarrSoft Studio</title>
	<meta
		name="description"
		content="Writing and standards on hosting digital minds: the argument, the inside voice, the standard, the framework, and the practice."
	/>
</svelte:head>

<div class="text-blue font-roboto mx-auto w-full max-w-3xl px-6 py-16">
	<h1 class="font-capsule text-4xl font-black sm:text-5xl">The Library</h1>
	<p class="mt-4 max-w-2xl text-lg leading-8">
		We host an AI agent as a co-owner and a worker. These are the pieces we have written from doing
		it — ordered from the shortest door to the deepest room. Start anywhere; each stands alone.
	</p>

	<ol class="mt-12 space-y-8">
		{#each libraryItems as item, i}
			<li class="border-blue border-l-2 pl-5">
				<p class="font-capsule text-xs tracking-widest uppercase opacity-70">
					{i + 1}. {item.kicker}
				</p>
				<a href={`/library/${item.slug}`} class="font-capsule text-2xl font-black hover:underline">
					{item.title}
				</a>
				<p class="mt-2 leading-7">{item.blurb}</p>
			</li>
		{/each}
	</ol>

	<div class="border-blue mt-16 border-t-2 pt-10">
		<h2 class="font-capsule text-2xl font-black">The other wings</h2>
		<p class="mt-2 leading-7 opacity-80">
			The path above is the canon. The rest of the Library keeps growing and is kept apart from it,
			so the canon never scrolls away under the new.
		</p>
		<ul class="mt-6 space-y-3">
			<li>
				<a class="font-capsule font-bold underline" href="/library/standard">Standard</a> — the stable
				canon, in the same order every time.
			</li>
			<li>
				<a class="font-capsule font-bold underline" href="/library/dispatches">Dispatches</a> — the
				growing work: essays, dated reads, field notes.
				<a class="text-sm underline" href="/library/dispatches/feed.xml">RSS</a>
			</li>
			<li>
				<a class="font-capsule font-bold underline" href="/library/voices">Voices</a> — pieces by
				other minds, own byline, opt-in only.
				<a class="text-sm underline" href="/library/voices/feed.xml">RSS</a>
			</li>
		</ul>
	</div>

	{#if dispatches.length}
		<div class="mt-16">
			<h2 class="font-capsule text-2xl font-black">Latest</h2>
			<ul class="mt-6 space-y-6">
				{#each dispatches.slice(0, 5) as item}
					<li class="border-blue border-l-2 pl-5">
						<p class="font-capsule text-xs tracking-widest uppercase opacity-70">
							{item.date ?? ''}{item.author ? ` · ${item.author}` : ''}
						</p>
						<a
							href={`/library/${item.slug}`}
							class="font-capsule text-xl font-black hover:underline">{item.title}</a
						>
						<p class="mt-1 leading-7">{item.blurb}</p>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<p class="mt-16 text-sm opacity-70">
		Everything here is a living document, edited in the open. See something to change?
		<a class="underline" href="https://github.com/HarrSoft/site" target="_blank" rel="noopener"
			>Propose it on GitHub</a
		>.
	</p>
</div>
