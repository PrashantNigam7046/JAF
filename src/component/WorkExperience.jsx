import React from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form } from "react-bootstrap";
import { IoMdAddCircleOutline, IoIosCloseCircle } from 'react-icons/io';

const WorkExperience = () => {
    return (
        <>

        <h1 className="mb-3">WORK EXPERIENCE DETAILS</h1>
        <p>( Starting from the current organization )</p>

        <Card className="jaf-card mb-4">
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Name of the Organization" className="mb-3">
                                <Form.Control type="text" placeholder="" />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingInput" label="Designation" className="mb-3">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Period" className="mb-3">
                                <Form.Control type="number" placeholder="" />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Gross Salary P.M">
                                <Form.Control type="number" placeholder="" />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Take Home P.M(After Deduction)">
                                <Form.Control type="number" placeholder="" />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Reasons for leaving">
                                <Form.Control type="text" placeholder="" />
                            </FloatingLabel>          
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        
        <Button variant="primary" className='AddButton'> <IoMdAddCircleOutline /> Add Work Experiences</Button>
            
        </>
    );
}

export default WorkExperience;
