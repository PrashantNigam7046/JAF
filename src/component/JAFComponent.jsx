import React, { useEffect, useState } from "react"
import { FormGroup, FloatingLabel, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";



const JAFComponent = () => {

    const handleChangeDate = (e) => {
        console.log(e._d)   
    }
    return (
    
    <>
        <h1 className="mb-3">JOB APPLICATION FORM</h1>
        {/* <p> (1st page Filled by Candidate only Capital Letters)</p> */}

        <Card className="jaf-card mb-4">
            <Card.Body>
                <Form>
                <Row>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Age"
                                    className="mb-3"
                                 >
                                <Datetime  timeFormat={false} onChange={e => handleChangeDate(e)} />
                            </FloatingLabel>
                          
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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
                        <FloatingLabel controlId="floatingSelect" label="Post Applied for">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Current Address"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Current Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Pin Code"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Current Address State ">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                </Form>
            </Card.Body>
        </Card>
    </>
    )

 }

 export default JAFComponent