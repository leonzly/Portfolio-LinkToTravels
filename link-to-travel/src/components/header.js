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
import Modal from 'react-bootstrap/Modal'
import '../assets/css/header.css';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            message: 'React-Bootstrap',
            visiable: true,
            modalIsOpen: false,
            hidden: false
        }
    }

    changeMessage() {
        alert(this.setState({
            message: 'sorry'
        }));
    }


    loginContorl() {
        this.setState({
            isOpenModal: !this.state.modalIsOpen
        })
    }

    closeModal() {
        this.setState({
            isOpenModal: this.state.hidden
        })
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="App-header">
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
                                <Button className="btnLogin" onClick={() => this.loginContorl()}>Login</Button>
                                {/* <Button className="btnSignUp" onClick={() => this.changeMessage()}>Sign Up</Button> */}
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.isOpenModal} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.closeModal()}>
                            Close
                        </Button>
                        <Button variant="primary" >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default Header

