import React, { Component } from 'react';
require('./style.scss');

/**
 * AppHeader Class
 */
class AppHeader extends Component {
    
    /**
     * Class constructor
     */
    constructor() {
        super();
    }

    /**
     * Render component
     */
    render() {
        return (
            <div className='app-header'>
                <div className='navbar navbar-default navbar-fixed-top'>
                    <div className="navbar-header">
                        <a className="container navbar-brand" href="#">
                            <img src={require('./images/logo.svg')} alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppHeader;
