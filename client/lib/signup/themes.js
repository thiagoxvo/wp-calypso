/**
 * External dependencies
 */
import shuffle from 'lodash/shuffle';

/**
 * Internal dependencies
 */

const themes = [
	{
		name: 'Button',
		slug: 'button',
		repo: 'pub',
		design: 'blog',
		verticals: [ 'a8c.1.1' ]
	},
	{
		name: 'Franklin',
		slug: 'franklin',
		repo: 'pub',
		design: 'blog',
		verticals: [ 'a8c.1.2', 'a8c.5' ]
	},
	{
		name: 'Sapor',
		slug: 'sapor',
		repo: 'pub',
		design: 'blog',
		verticals: [ 'a8c.1.3', 'a8c.5.3' ]
	}
];

const map = {
	blog: [
		{ name: 'Button', slug: 'button' },
		{ name: 'Franklin', slug: 'franklin' },
		{ name: 'Sapor', slug: 'sapor' },
		{ name: 'Twenty Sixteen', slug: 'twentysixteen' },
		{ name: 'Hemingway Rewritten', slug: 'hemingway-rewritten' },
		{ name: 'Ecto', slug: 'ecto' },
		{ name: 'Libre', slug: 'libre' },
		{ name: 'Penscratch', slug: 'penscratch' },
		{ name: 'Libretto', slug: 'libretto' },
	],
	page: [
		{ name: 'Gateway', slug: 'gateway' },
		{ name: 'Edin', slug: 'edin' },
		{ name: 'Sequential', slug: 'sequential' },
		{ name: 'Goran', slug: 'goran' },
		{ name: 'Sela', slug: 'sela' },
		{ name: 'Motif', slug: 'motif' },
		{ name: 'Big Brother', slug: 'big-brother' },
		{ name: 'Pique', slug: 'pique' },
		{ name: 'Harmonic', slug: 'harmonic' },
	],
	grid: [
		{ name: 'Dyad', slug: 'dyad' },
		{ name: 'Baskerville', slug: 'baskerville' },
		{ name: 'Cubic', slug: 'cubic' },
		{ name: 'Revelar', slug: 'revelar' },
		{ name: 'Rowling', slug: 'rowling' },
		{ name: 'Rebalance', slug: 'rebalance' },
		{ name: 'Gazette', slug: 'gazette' },
		{ name: 'Apostrophe', slug: 'apostrophe' },
		{ name: 'Pictorico', slug: 'pictorico' },
	]
};

export function getDefaultThemes() {
	return [
		{ name: 'Dyad', slug: 'dyad' },
		{ name: 'Independent Publisher', slug: 'independent-publisher' },
		{ name: 'Sela', slug: 'sela' },
		{ name: 'Hemingway Rewritten', slug: 'hemingway-rewritten' },
		{ name: 'Twenty Sixteen', slug: 'twentysixteen' },
		{ name: 'Penscratch', slug: 'penscratch' },
		{ name: 'Edin', slug: 'edin' },
		{ name: 'Publication', slug: 'publication' },
		{ name: 'Harmonic', slug: 'harmonic' },
	];
}

export default function getThemes( vertical, designType ) {
	return shuffle( map[ designType ] || getDefaultThemes() );
}
