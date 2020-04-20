import logo from '../../logo.svg';
import React, { Component } from 'react';
import '../../App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../Header/header.css'
import Login from '../User/login';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            message: 'React-Bootstrap',
            visiable: true,
            modalIsOpen: false,
            hidden: false,
            username: '',
            user: null
        }

        this.closeModal = this.closeModal.bind(this);
        this.loginInfo = this.loginInfo.bind(this)
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

    loginInfo(email, password, closeModal) {
        this.setState({
            user:{
                email,
                password
            },
            isOpenModal: closeModal
        })
    }
    signOut() {
        // clear out user from state
        this.setState({
            user: null
        })
      }


    closeModal(){

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
                                {
                                    (this.state.user)?
                                        <div>
                                            <Navbar.Text>
                                                Signed in as: <a href="#login">{this.state.user.email}</a>
                                            </Navbar.Text>
                                            <Button className="btnSignUp" onClick={() => this.signOut()}>Sign out</Button> 
                                        </div>
                                    :
                                    <div>
                                        <Button className="btnLogin" onClick={() => this.loginContorl()}>Login</Button>
                                        <Button className="btnSignUp" onClick={() => this.changeMessage()}>Sign Up</Button> 
                                    </div> 
                                }
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.isOpenModal} >
                    <Login sendLoginData={this.loginInfo}/>
                </Modal>
            </div>
        );
    }
}
export default Header

