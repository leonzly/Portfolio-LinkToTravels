import logo from '../logo.svg';
import React from 'react';
import '../App.css';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a  className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </header>
    );
}
export default Header