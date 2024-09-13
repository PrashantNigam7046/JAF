import React from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { IoMdAddCircleOutline, IoIosCloseCircle    } from "react-icons/io";

const FamilyDetail = () => {


    return (
        <>
             <h1 className="mb-3">FAMILY DETAILS</h1>

            <Card className="jaf-card mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="First Name">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Age">
                                    <Form.Control type="number" placeholder="" />
                                </FloatingLabel>          
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Relationship">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Occupation">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            <Card className="jaf-card mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="First Name">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Age">
                                    <Form.Control type="number" placeholder="" />
                                </FloatingLabel>          
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Relationship">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Occupation">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>
                    <span className='delete-card'><IoIosCloseCircle    /></span>
                </Card.Body>
            </Card>
            <Button variant="primary" className='AddButton'> <IoMdAddCircleOutline /> Add Member</Button>
            <span className='msg-to-user'>( Maximum 4 members can be added )</span>
        </>
    );
}

export default FamilyDetail;
