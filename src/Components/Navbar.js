import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NFTLogo from './NFTLogo.png';

import './Navbar.css';

export default class NavbarC extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className='NavbarName'>
                <img src={NFTLogo} alt="Logo" width="390" />
                
            </div>
        )
    }
}
