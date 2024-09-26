import React from 'react';
import {Container, Row, Col, Dropdown, Table, Form, Button, ListGroup, Tooltip, OverlayTrigger  } from 'react-bootstrap';
import { FaRegUserCircle, FaSort } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { FiEdit, FiSearch } from "react-icons/fi";

const OpsDashboardComponent = () => {
    const renderTooltip = (id) => (props) => (
        <Tooltip id={`tooltip-${id}`} {...props}>
            {id.charAt(0).toUpperCase() + id.slice(1)} 
        </Tooltip>
    );
    return (
        <>
            <Row className='d-flex align-items-center Dashboard-top-info mb-4'>
                <Col className='d-flex flex-column'>
                    <h3 className='Dashboard-userName mb-1'>OPS ASSESSMENT</h3>
                </Col>
                <Col className='text-end d-flex flex-row-reverse align-items-center'>
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

            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Relevant Experience from same Industry</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                        
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments' 
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Years of Experience</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                        checked
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments'
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Trainable Resource if doesn’t have relevant experience</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                        checked
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments'
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Communication Skills</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                        checked
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments'
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Stability check</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                        checked
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments' 
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Behavior</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                        checked
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments'
                             value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Graduation</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Yes')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="GraduationYes"
                                        label="Yes"
                                        checked
                                        className='GraduationYes'
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('No')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="GraduationNo"
                                    label="No"
                                    className='GraduationNo'
                                />
                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments' 
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>GDS Skill( for Travel)</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                        checked
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments' 
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Sales Skill ( For Sales Process)</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                        checked
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments' 
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Flexible Working in any shifts (Yes/No)</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Yes')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="FlexibleYes"
                                        label="Yes"
                                        checked
                                        className='FlexibleYes'
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('No')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="FlexibleNo"
                                    label="No"
                                    className='FlexibleNo'
                                />
                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments' 
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>
            <Row className='MarkingRow d-flex align-items-stretch mb-2'>
                <Col md={9} className='MarkingRowLeft'>
                    <Row className='d-flex align-items-center MarkingRowLeftSingle'>
                        <Col><p className='m-0'>Sales Skill ( For Sales Process)</p></Col>
                        <Col className='d-flex flex-row-reverse MarkingRowLeftRadio'>
                            <Form>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('poor')}

                                >
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="poor"
                                        checked
                                    />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('average')}

                                >
                                
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="average"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('good')}

                                >
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="good"
                                />
                            </OverlayTrigger>
                            
                            <OverlayTrigger placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('Very Good')}

                                >

                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="vgood"
                                />
                            </OverlayTrigger >
                            <OverlayTrigger 
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip('excellent')}
                                >

                                    <Form.Check
                                        inline
                                        name="group1"
                                        type="radio"
                                        id="excellent"
                                    />

                            </OverlayTrigger>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} className='MarkingRowRight'>
                    <div className='w-100 h-100'>
                        <Form.Group controlId="Comments" className='h-100'>
                            <Form.Control as="textarea" rows={1}  className='h-100' placeholder='Comments' 
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
                        </Form.Group>  
                    </div>
                </Col>
            </Row>


        </>
    );
}

export default OpsDashboardComponent;
