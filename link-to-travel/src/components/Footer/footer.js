import React from 'react';
import '../Footer/footer.css';

const Footer = (props) => {
    console.log(props);
    return (
        <div>
            <footer className="App-footer">
                <div>Forgot password</div>
                <div>{props.name}</div>
                {props.children}
            </footer>
        </div>
    );
}

export default Footer