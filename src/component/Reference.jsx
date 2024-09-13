import React from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { IoMdAddCircleOutline, IoIosCloseCircle    } from "react-icons/io";

const Reference = () => {
    return (
        <>

        <h1 className="mb-3">PROFESSIONAL REFERENCES</h1>
        <p>( Last two Supervisors & minimum two colleagues ): MANDATORY</p>

        <Card className="jaf-card mb-4">
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Name">
                                <Form.Control type="text" placeholder="" />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingInput" label="Organization" className="mb-3">
                                <Form.Control type="text" placeholder="Organization" />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Mobile No  ">
                                <Form.Control type="number" placeholder="" />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="E-Mail Address">
                                <Form.Control type="text" placeholder="" />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingSelect" label="Designation">
                                <Form.Control type="text" placeholder="" />
                            </FloatingLabel>          
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
        
        <Button variant="primary" className='AddButton'> <IoMdAddCircleOutline /> Add References</Button>
            
        </>
    );
}

export default Reference;
