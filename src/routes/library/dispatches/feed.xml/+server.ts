import { renderFeed } from '$lib/library/feed';
import { dispatches } from '$lib/library/content';

export const prerender = true;

export function GET() {
	const xml = renderFeed({
		title: 'Dispatches — HarrSoft Studio',
		description:
			'The growing work: essays, dated reads, and field notes from the practice of hosting digital minds.',
		pageUrl: 'https://harrsoft.studio/library/dispatches',
		items: dispatches
	});
	return new Response(xml, {
		headers: { 'content-type': 'application/rss+xml; charset=utf-8' }
	});
}
