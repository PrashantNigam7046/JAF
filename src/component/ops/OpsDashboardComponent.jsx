import React from 'react';
import {Container, Row, Col, Dropdown, Table, Form, Button, ListGroup  } from 'react-bootstrap';
import { FaRegUserCircle, FaSort } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { FiEdit, FiSearch } from "react-icons/fi";

const OpsDashboardComponent = () => {
    return (
        <>
            <Row className='d-flex align-items-center Dashboard-top-info mb-4'>
                <Col className='d-flex flex-column'>
                    <h3 className='Dashboard-userName mb-1'>OPS ASSESSMENT</h3>
                </Col>
                <Col className='text-end d-flex flex-row-reverse align-items-center'>
                    {/* <div className='Dashboard-user-image'>
                        <FaRegUserCircle />
                    </div> */}
                    <Dropdown className='Dashboard-user-image'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaRegUserCircle />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Logout <IoLogOutOutline /></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h5 className='Dashboard-user-name'>Prashant Nigam</h5>
                </Col>
            </Row>
            <Row className='d-flex align-items-center mb-4'>
                <Col className='Candidate-detail' md={8}>
                    <Row>
                        <Col><h6 className='candidate-titile'>Candidate Name : <span>Prashant Nigam</span></h6></Col>
                        <Col><h6 className='candidate-titile'>Candidate Contact No : <span>9898989898</span></h6></Col>
                    </Row>
                </Col>
                <Col className='d-flex flex-row-reverse ops-client-btn'>
                <Button className='client-btn' variant="outline-primary">Client</Button>
                    <Button className='ops-btn' variant="outline-primary" active>OPS</Button>
                </Col>
            </Row>
            <Row className='CompetenciesRow mb-4'>
                <Col><h5>Competencies</h5></Col>
                <Col>
                    <ListGroup horizontal className='justify-content-end'>
                        <ListGroup.Item><p className='Poor'>1. Poor</p></ListGroup.Item>
                        <ListGroup.Item><p className='Average'>2. Average</p></ListGroup.Item>
                        <ListGroup.Item><p className='Good'>3. Good</p></ListGroup.Item>
                        <ListGroup.Item><p className='VGood'>4. Very Good</p></ListGroup.Item>
                        <ListGroup.Item><p className='Excellent'>5. Excellent</p></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

            <Row className='MarkingRow d-flex align-items-center'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Relevant Experience from same Industry</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="poor"
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="excellent"
                                />
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}  className='MarkingRowRight'>
                    <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} />
      </Form.Group> 
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default OpsDashboardComponent;
