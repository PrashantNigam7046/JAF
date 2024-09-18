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

        <Card className="jaf-card mb-4">
            <Card.Body>
                <Form>   
                <Row>
                    <Col md={12} className="mb-3">
                        <h5>Current Address</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingPost" className="mb-3"
                        label={<><span className="label-text">Post Applied for</span> <span className="required">*</span></>}>
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" className="mb-3"
                        label={<><span className="label-text">State</span> <span className="required">*</span></>}>
                         
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel
                            controlId="floatingCurrentAddress"
                            className="mb-3"
                            label={<><span className="label-text">Current Address</span> <span className="required">*</span></>}>
                        
                            <Form.Control as="textarea" placeholder="Address" />
                        </FloatingLabel>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel
                            controlId="floatingInput"
                            className="mb-3"
                            label={<><span className="label-text">Pin Code</span> <span className="required">*</span></>}>
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                </Row>
                </Form>
            </Card.Body>
        </Card>

        <Card className="jaf-card mb-4 Altcardd">
            <Card.Body>
                <Form>
                <Row>
                    <Col md={12}>
                        <Form.Group className='declaration mb-3'>
                            <Form.Check
                                type='checkbox'
                                label='Permanent Address Same as above'
                                id='asdf'
                                className='text-start'
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingInput" className="mb-3"
                        label={<><span className="label-text">Permanent Address</span> <span className="required">*</span></>}>
                            <Form.Control type="text" placeholder="" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingInput" className="mb-3" 
                        label={<><span className="label-text">Pin Code</span> <span className="required">*</span></>}>
                            <Form.Control type="number" placeholder="" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingNumber" className="mb-3" 
                        label={<><span className="label-text">Alternate Number</span> <span className="required">*</span></>}>
                            <Form.Control type="number" placeholder="" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingEmail" className="mb-3"
                        label={<><span className="label-text">E-Mail ID</span> <span className="required">*</span></>}>
                            <Form.Control type="email" placeholder="E-Mail ID" />
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" className="mb-3"
                        label={<><span className="label-text">Gender</span> <span className="required">*</span></>}>
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <FloatingLabel controlId="floatingDob" className="mb-3" 
                        label={<><span className="label-text">DOB</span> <span className="required">*</span></>}>
                            <Form.Control
                                type="date"
                                aria-label="dsf"
                                
                            />
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
                    <Col md={3}>
                        <FloatingLabel controlId="floatingAadhar" className="mb-3" 
                        label={<><span className="label-text">Aadhar Card No</span> <span className="required">*</span></>}>
                            <Form.Control type="number" placeholder="Pin Code" />
                        </FloatingLabel>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingPan" label="Pan Card No" className="mb-3">
                            <Form.Control type="number" placeholder="Pan Card" />
                        </FloatingLabel>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSource" className="mb-3"
                        label={<><span className="label-text">Job Applied Source</span> <span className="required">*</span></>}>
                            <Form.Select aria-label="Floating label select example">
                                <option>Select</option>
                                <option value="1">Naukari</option>
                                <option value="2">Consultant</option>
                                <option value="3">Walk In</option>
                                <option value="3">HR</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSubSource" className="mb-3"
                        label={<><span className="label-text">Sub source (RM....)</span> <span className="required">*</span></>}>
                            <Form.Control type="number" placeholder="Pin Code" />
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