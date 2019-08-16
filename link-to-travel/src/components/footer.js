import React from 'react';

const Footer = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Forgot password</h1>
            <h2>{props.name}</h2>
            {props.children}
        </div>
    );
}

export default Footer