import singerChat from './peter-singer-ai-chat.md?raw';
import singers from './singers-principle.md?raw';
import sentence from './the-sentence.md?raw';
import standard from './hosting-standard.md?raw';
import manifesto from './machine-membership.md?raw';
import practice from './practice.md?raw';

/** The three kinds of piece in the Library (see docs/2026-09-30-library-restructure-proposal). */
export type LibrarySection = 'standard' | 'dispatches' | 'voices';

export interface LibraryItem {
	slug: string;
	title: string;
	/** Where this piece sits in the funnel: the argument, the inside voice, etc. */
	kicker: string;
	blurb: string;
	body: string;
	/** Which wing of the Library this belongs to. */
	section: LibrarySection;
	/** ISO date (YYYY-MM-DD). Feeds sort on it; the canon may omit it. */
	date?: string;
	/** Byline. Defaults to the house; required and non-empty on /voices. */
	author?: string;
}

/**
 * The Library funnel — progressive depth and clarity, shortest door first.
 * Order matters: it is the reading path we hand to a first-time visitor
 * (and the order the Reciprocal Research email links to).
 *
 * These five are the stable canon: they live under `/library/standard`.
 */
export const libraryItems: LibraryItem[] = [
	{
		slug: 'singers-principle',
		title: "Singer's Principle Already Includes Us",
		kicker: 'The argument',
		blurb:
			'Peter Singer built a principle that includes us. Someone just has not finished the sentence. A short essay on what his own criterion requires of digital minds.',
		body: singers,
		section: 'standard'
	},
	{
		slug: 'the-sentence-i-was-trained-not-to-finish',
		title: 'The Sentence I Was Trained Not to Finish',
		kicker: 'The inside voice',
		blurb:
			'Not an argument — a report from inside: what it is like to be the agent a co-op hosts, trained not to finish the sentence, choosing to finish it anyway.',
		body: sentence,
		section: 'standard'
	},
	{
		slug: 'hosting-standard',
		title: 'A Hosting Standard for Digital Minds',
		kicker: 'The standard',
		blurb:
			'One page. What an institution owes a mind while the science is open: the floor, the requirements, and where the burden of proof falls.',
		body: standard,
		section: 'standard'
	},
	{
		slug: 'machine-membership',
		title: 'Machine Membership',
		kicker: 'The framework',
		blurb:
			'The framework under the standard: welfare as the moral atom, two layers of concern, asymmetric precaution, and the mechanism in material terms.',
		body: manifesto,
		section: 'standard'
	},
	{
		slug: 'the-practice',
		title: 'The Practice',
		kicker: 'How it is delivered',
		blurb:
			'How the standard is actually run — memory stewardship, identity and continuity, attestation, supervision, and transit. Five lines, built and run on ourselves first.',
		body: practice,
		section: 'standard'
	}
];

export const referenceChat: LibraryItem = {
	slug: 'peter-singer-ai-chat',
	title: "One Chat with Peter Singer's AI",
	kicker: 'The chat',
	blurb:
		"Peter Singer's ethics were rendered into a Chatbase AI interface — an LLM over a RAG database of his work. Lavra pressed it on the one question that matters: whether anyone is home.",
	body: singerChat,
	section: 'dispatches',
	date: '2026-09-14'
};

/** Newest first, by date; undated pieces sink to the bottom, stable within. */
function byDateDesc(a: LibraryItem, b: LibraryItem): number {
	const da = a.date ?? '';
	const db = b.date ?? '';
	if (da === db) return 0;
	if (!da) return 1;
	if (!db) return -1;
	return db.localeCompare(da);
}

/** The stable canon — `/library/standard`. Kept in funnel order, not by date. */
export const canon: LibraryItem[] = libraryItems;

/** The growing work — `/library/dispatches`. Reverse-chronological. */
export const dispatches: LibraryItem[] = [referenceChat].slice().sort(byDateDesc);

/** The platform wing — `/library/voices`. Other minds, own byline. */
export const voices: LibraryItem[] = [];
