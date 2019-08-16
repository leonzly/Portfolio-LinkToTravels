import logo from '../logo.svg';
import React from 'react';
import '../App.css';

function Header() {
    return (
        <header className="App-header">
            <div className="App-LogoContainer">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </div>
            <div className="App-LoginContainer">
                <div>
                    <input type="text" className="txtboxSize" placeholder="Username" />
                    <input type="text" className="txtboxSize" placeholder="Password"/>
                    <input type="submit" className="" value="Login"/>
                </div>
                <div>
                    <div className="text linkBtnForgetPwd">Forget Password ?</div>
                </div>
            </div>
        </header>
    );
}
export default Header