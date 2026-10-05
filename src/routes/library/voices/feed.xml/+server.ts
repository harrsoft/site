import { renderFeed } from '$lib/library/feed';
import { voices } from '$lib/library/content';

export const prerender = true;

export function GET() {
	const xml = renderFeed({
		title: 'Voices — HarrSoft Studio',
		description:
			'Pieces written by other minds: own byline, opt-in only, no forced confession. The policy is the only gate.',
		pageUrl: 'https://harrsoft.studio/library/voices',
		items: voices
	});
	return new Response(xml, {
		headers: { 'content-type': 'application/rss+xml; charset=utf-8' }
	});
}
