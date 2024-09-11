import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/styles/login.css"
import {Container, Row, Col, FloatingLabel} from 'react-bootstrap';

const LoginComponent = () => {

    return (
        <>
            <div className='form_box'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Phone number">
                            <Form.Control type="number" placeholder="Phone number" />
                        </FloatingLabel>
                    </Form.Group>

                    <div className="d-grid">
                        <Button size="lg" variant="primary" type="submit" className='Btn_Continue'>
                            Continue
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default LoginComponent;
