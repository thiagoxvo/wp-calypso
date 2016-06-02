/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';

/**
 * Internal dependencies
 */
import TermSelectorTerms from './terms';

class TermSelector extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			search: null,
			page: 1,
			selectedIds: this.getSelectedIds()
		};
	}

	getSelectedIds( selected ) {
		const selectedObjects = selected || this.props.selected;
		return selectedObjects.map( function( item ) {
			if ( ! item.ID ) {
				return item;
			}

			return item.ID;
		} );
	}

	onSearch( term ) {
		if ( term !== this.state.search ) {
			this.setState( {
				page: 1,
				search: term
			} );
		}
	}

	incrementPage() {
		this.setState( {
			page: this.state.page + 1
		} );
	}

	componentWillReceiveProps( nextProps ) {
		const nextSelectedIds = this.getSelectedIds( nextProps.selected );

		if ( nextProps.categories &&
				this.props.categories &&
				nextSelectedIds.length === ( this.state.selectedIds.length + 1 ) &&
				nextProps.categories.length === ( this.props.categories.length + 1 ) ) {
			ReactDom.findDOMNode( this.refs.wrapper ).scrollTop = 0;
		}

		if ( ! isEqual( nextSelectedIds, this.state.selectedIds ) ) {
			this.setState( { selectedIds: nextSelectedIds } );
		}
	}

	componentWillReceiveProps( nextProps ) {
		const isChangingQuery = [
			'taxonomy',
			'multiple'
		].some( ( prop ) => nextProps[ prop ] !== this.props[ prop ] );

		if ( isChangingQuery ) {
			this.setState( { page: 1 } );
		}
	}

	render() {
		const { className, taxonomy } = this.props;

		const classes = classNames( 'term-selector', className );

		return (
			<div className={ classes } ref="wrapper" onScroll={ this.checkScrollPosition }>
				<TermSelectorTerms search={ this.state.search } page={ this.state.page } taxonomy={ taxonomy } />
			</div>
		);
	}
}

TermSelector.propTypes = {
	multiple: PropTypes.bool,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	selected: PropTypes.array,
	createLink: PropTypes.string,
	analyticsPrefix: PropTypes.string,
	searchThreshold: PropTypes.number,
	taxonomy: PropTypes.string
};

TermSelector.defaultProps = {
	analyticsPrefix: 'Category Selector',
	selected: [],
	taxonomy: 'category',
	onChange: () => {}
};

export default TermSelector;

