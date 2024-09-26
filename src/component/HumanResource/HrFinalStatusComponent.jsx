import React from 'react';
import {Container, Row, Col, Dropdown, Table, Form, Button, ListGroup, Tooltip, OverlayTrigger, Card  } from 'react-bootstrap';

const HrFinalStatusComponent = () => {
    return (
        <>
            {/* <Row className='mb-4'>
                <Col className='d-flex flex-column'>
                    <h3 className='Dashboard-userName mb-1'>Filled by HR</h3>
                </Col>
            </Row> */}
            <Row className='mb-4'>
                <Col>
                    <Card className='FinalStatusCard jaf-card'>
                        <Card.Body>
                            
                            <Form>
                                <Row className='d-flex align-items-center mb-2'>
                                    <Col className="mb-">
                                        <h4 className='mb-0'>Filled by HR</h4>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Final Status</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Expected Joining Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Hired for Process / LOB</Form.Label>
                                        <Form.Control type="text" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Salary Offered &Breakup</Form.Label>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Final Salary Approval Given by</Form.Label>
                                        <Form.Control type="text" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Final Remarks if Any</Form.Label>
                                        <Form.Control type="text" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Client Round feedback</Form.Label>
                                        <Form.Control type="text" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Employee Present Salary</Form.Label>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Expected Salary</Form.Label>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Salary company should offer </Form.Label>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Good with salary offered</Form.Label>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>If Not Joined- (Reason)</Form.Label>
                                        <Form.Control type="text" as="textarea" rows="1" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>Versant ID / Score</Form.Label>
                                        <Form.Control type="text" />
                                    </Col>
                                    <Col md={4} className='mb-3'>
                                        <Form.Label>C.A.T. Score</Form.Label>
                                        <Form.Control type="text" />
                                    </Col>
                                </Row>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default HrFinalStatusComponent;
