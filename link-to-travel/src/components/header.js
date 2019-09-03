import logo from '../logo.svg';
import React, { Component } from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Header extends Component {
    constructor (){
        super()
        this.state={message : 'React-Bootstrap'}


    }

    changeMessage(){
      alert(this.setState({
        message:'sorry'
    }));
    }


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar.Brand href="#home">{this.state.message}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                            <FormControl type="password" placeholder="Password" className="mr-sm-2" />
                            <Button variant="outline-success">Login</Button>
                            <Button variant="outline-success" onClick={() => this.changeMessage()}>Sign Up</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header