import React from 'react';

const Footer = (props) => {
    console.log(props);
    return (
        <footer className="App-footer">
            <div>Forgot password</div>
            <div>{props.name}</div>
            {props.children}
        </footer>
    );
}

export default Footer