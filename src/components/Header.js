import React from 'react';

import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="logo" src={logo} alt="Air logo" />
            </header>
        );
    }
}

export default Header;