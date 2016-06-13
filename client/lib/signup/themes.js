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

function filterDefaultThemes( theme ) {
	return theme.fallback;
}

export function getDefaultThemes() {
	return themes.filter( filterDefaultThemes );
}

export default function getThemes( vertical, designType ) {
	let themeSet = themes.filter( filterDesignType, designType ).filter( filterVerticals, vertical );
	if ( 0 === themeSet.length ) {
		themeSet = getDefaultThemes();
	}

	return shuffle( themeSet );
}
