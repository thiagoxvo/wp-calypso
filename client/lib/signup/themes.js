/**
 * External dependencies
 */
import shuffle from 'lodash/shuffle';

/**
 * Internal dependencies
 */
import { themes } from 'lib/signup/themes-data';

function filterDesignType( theme ) {
	return this === theme.design;
}

function filterVerticals( theme ) {
	return ! ( -1 === theme.verticals.indexOf( this ) );
}

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
	return themes.filter( filterDesignType, designType ).filter( filterVerticals, vertical );
}
