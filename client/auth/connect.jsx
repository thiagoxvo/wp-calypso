/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Gridicon from 'components/gridicon';
import Main from 'components/main';
import WordPressLogo from 'components/wordpress-logo';

const Connect = React.createClass( {

	render() {
		return (
			<Main className="auth auth__connect">
				<WordPressLogo size={ 72 } />
				<div className="auth__connect-intro">
					<p className="auth__welcome">
						Welcome to Calypso. Authorize the application with your WordPress.com credentials to get started.
					</p>
					<Button href={ this.props.authUrl }>Authorize App</Button>
				</div>
				<a className="auth__help" target="_blank" title={ this.translate( 'Visit the Calypso GitHub repository for help' ) } href="https://github.com/Automattic/wp-calypso">
					<Gridicon icon="help" />
				</a>
				<div className="auth__links">
					<a href="https://wordpress.com/start">{ this.translate( 'Create account' ) }</a>
				</div>
			</Main>
		);
	}
} );

export default Connect;
