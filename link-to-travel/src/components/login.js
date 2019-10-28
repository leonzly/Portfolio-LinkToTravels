import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    validateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    validatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = () => {
        this.props.sendLoginData(this.state.email, this.state.password, false);
    }

    closeModal = () => {
        this.props.sendData(false);
    }


    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to link to Travel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.validateEmail} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" placeholder="Password" value={this.state.password} onChange={this.validatePassword} />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={(this.handleSubmit)}>
                        Login
                    </Button>
                    {/* <Button variant="primary" onClick={this.closeModal} >
                        Save Changes
                    </Button>  */}
                </Modal.Footer>
            </div>
        )
    }
}

export default login
