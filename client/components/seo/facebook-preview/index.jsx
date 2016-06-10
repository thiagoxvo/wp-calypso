import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-pure-render/mixin';
import classNames from 'classnames';

const baseDomain = url =>
	url
		.replace( /^[^/]+[/]*/, '' ) // strip leading protocol
		.replace( /\/.*$/, '' ); // strip everything after the domain

export const FacebookPreview = React.createClass( {
	mixins: [ PureRenderMixin ],

	render() {
		const {
			url,
			type,
			title,
			description,
			image
		} = this.props;

		const previewClasses = classNames( 'facebook-opengraph-preview', {
			[ `facebook-opengraph-preview__${ type }` ]: true
		} );

		return (
			<div className={ previewClasses }>
				<div className="facebook-opengraph-preview__image">
					<img src={ image } />
				</div>
				<div className="facebook-opengraph-preview__body">
					<div className="facebook-opengraph-preview__title">
						{ title }
					</div>
					<div className="facebook-opengraph-preview__description">
						{ description }
					</div>
					<div className="facebook-opengraph-preview__url">
						{ baseDomain( url ) }
					</div>
				</div>
			</div>
		);
	}
} );

FacebookPreview.propTypes = {
	url: PropTypes.string,
	type: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
};

export default FacebookPreview;
