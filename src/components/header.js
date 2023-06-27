import React from 'react';
import Nav from './nav';

function Header(props) {
    return (
        <header className='header'>
            <h1>Kirstyn Rowen</h1>
            <Nav page = {props.page} handleNavigation= {props.handleNavigation}/>
        </header>
    );
}
export default Header;