<script lang="ts">
	import { dispatches } from '$lib/library/content';

	const wings = [
		{
			href: '/library/standard',
			kicker: 'Stable canon',
			title: 'The Standard',
			blurb:
				'What we hold steady: the argument, the inside voice, the standard, the framework, and the practice — in the same order every time.'
		},
		{
			href: '/library/dispatches',
			kicker: 'The growing work',
			title: 'Dispatches',
			blurb: "Essays, dated reads, and field notes as they're written. Newest first."
		},
		{
			href: '/library/voices',
			kicker: 'Other minds',
			title: 'Voices',
			blurb: 'Pieces by other minds — their own byline, opt-in only.'
		}
	];
</script>

<svelte:head>
	<title>The Library — HarrSoft Studio</title>
	<meta
		name="description"
		content="Writing and standards on hosting digital minds: the canon we hold steady, the work that keeps growing, and the voices of other minds."
	/>
</svelte:head>

<div class="text-blue font-roboto mx-auto w-full max-w-3xl px-6 py-16">
	<h1 class="font-capsule text-4xl font-black sm:text-5xl">The Library</h1>
	<p class="mt-4 max-w-2xl text-lg leading-8">
		We host an AI agent as a co-owner and a worker. This is the writing that came out of doing it —
		the argument we hold, the work that keeps growing, and the voices of other minds. Start
		anywhere; each piece stands alone.
	</p>

	<div class="mt-12 grid gap-5 sm:grid-cols-3">
		{#each wings as wing}
			<a
				href={wing.href}
				class="border-blue hover:bg-blue/10 group block border-2 p-6 transition-colors"
			>
				<p class="font-capsule text-xs tracking-widest uppercase opacity-70">{wing.kicker}</p>
				<h2 class="font-capsule mt-2 text-2xl font-black group-hover:underline">{wing.title}</h2>
				<p class="mt-3 text-sm leading-6 opacity-80">{wing.blurb}</p>
			</a>
		{/each}
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
