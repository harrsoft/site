import type { LibraryItem } from './content';

const SITE = 'https://harrsoft.studio';

function esc(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/** Escape a CDATA section: a literal `]]>` would close it early. */
function cdata(value: string): string {
	return value.replace(/]]>/g, ']]]]><![CDATA[>');
}

interface FeedOptions {
	/** Channel title, e.g. "Dispatches — HarrSoft Studio". */
	title: string;
	description: string;
	/** Absolute URL of the section page (used as the channel link). */
	pageUrl: string;
	/** Items, already ordered newest-first. */
	items: LibraryItem[];
}

/**
 * Render a small, dependency-free RSS 2.0 feed with full content.
 *
 * House habit: findable, not sticky — full-content, no tracking, no email
 * capture. The raw `.md` in git stays the source of truth; this is a view.
 */
export function renderFeed({ title, description, pageUrl, items }: FeedOptions): string {
	const selfUrl = `${pageUrl}/feed.xml`;
	const now = new Date().toUTCString();

	const entries = items
		.map((item) => {
			const link = `${SITE}/library/${item.slug}`;
			const pub = item.date ? new Date(`${item.date}T00:00:00Z`).toUTCString() : now;
			const author = item.author ? `\n\t\t<author>${esc(item.author)}</author>` : '';
			return `\t\t<item>
\t\t\t<title>${esc(item.title)}</title>
\t\t\t<link>${link}</link>
\t\t\t<guid isPermaLink="true">${link}</guid>
\t\t\t<pubDate>${pub}</pubDate>${author}
\t\t\t<description>${esc(item.blurb)}</description>
\t\t\t<content:encoded><![CDATA[${cdata(item.body)}]]></content:encoded>
\t\t</item>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
\t<channel>
\t\t<title>${esc(title)}</title>
\t\t<link>${pageUrl}</link>
\t\t<atom:link href="${selfUrl}" rel="self" type="application/rss+xml"/>
\t\t<description>${esc(description)}</description>
\t\t<language>en</language>
\t\t<lastBuildDate>${now}</lastBuildDate>
${entries}
\t</channel>
</rss>
`;
}
