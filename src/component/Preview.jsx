import React from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";

const Preview = () => {
    return (
        <>
        <h1 className="mb-3">PREVIEW</h1>

        <Card className='jaf-card mb-4 GeneralDetails previewCard'>
            <Card.Body>
                <Row className='d-flex align-items-center mb-2'>
                    <Col className="mb-">
                        <h4 className='mb-0'>Genral Details</h4>
                    </Col>
                    <Col className="text-end">
                    <Button className='editIcon' variant="primary"><FiEdit /></Button>
                    </Col>
                </Row>
                <hr></hr>
                <Form>
                    <Row>
                        <Col md={3}>
                            <FloatingLabel controlId="floatingName" className='mb-3'
                            label={<><span className="label-text">Name</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='' defaultValue="Name" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingPost" className="mb-3"
                            label={<><span className="label-text">Post Applied for</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1" selected>Accountant</option>
                                    <option value="2">Designer</option>
                                    <option value="3">Developer</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingMobile"
                                className="mb-3"
                                label={<><span className="label-text">Mobile No:</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Mobile No:" defaultValue="8989898989"  />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingDob" className="mb-3" 
                            label={<><span className="label-text">DOB</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="date" aria-label="DOB" defaultValue="1999-09-12" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingSelect" className="mb-3"
                            label={<><span className="label-text">Gender</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1" selected>Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingEmail" className="mb-3"
                            label={<><span className="label-text">E-Mail ID</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="email" placeholder="E-Mail ID"  defaultValue="user@gmail.com" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingAadhar" className="mb-3" 
                            label={<><span className="label-text">Aadhar Card No:</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Aadhar Card No:" defaultValue="224546857854" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingPan" label="Pan Card No:" className="mb-3">
                                <Form.Control disabled type="text" placeholder="Pan Card No:" defaultValue="Atrid8963F" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={6}>
                            <FloatingLabel
                                controlId="floatingCurrentAddress"
                                className="mb-3"
                                label={<><span className="label-text">Current Address</span> <span className="required">*</span></>}>
                            
                                <Form.Control disabled as="textarea" placeholder="Address" defaultValue="368, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingPin"
                                className="mb-3"
                                label={<><span className="label-text">Pin Code</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Pin Code" defaultValue="123401"  />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingSelect" className="mb-3"
                            label={<><span className="label-text">State</span> <span className="required">*</span></>}>
                            
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1" selected>Haryana</option>
                                    <option value="2">Rajasthan</option>
                                    <option value="3">Maharashtra</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={12}><hr className='mt-0'></hr></Col>
                        
                        <Col md={6}>
                            <FloatingLabel
                                controlId="floatingAddressPermanent"
                                className="mb-3"
                                label={<><span className="label-text">Permanent Address</span> <span className="required">*</span></>}>
                            
                                <Form.Control disabled as="textarea" placeholder="Address" defaultValue="368, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingPin"
                                className="mb-3"
                                label={<><span className="label-text">Pin Code</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Pin Code" defaultValue="56325" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingNumber" className="mb-3" 
                            label={<><span className="label-text">Alternate Number</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Alternate Number" defaultValue="8988888888" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingSource" className="mb-3"
                            label={<><span className="label-text">Job Applied Source</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1">Naukari</option>
                                    <option value="2">Consultant</option>
                                    <option value="3" selected>Walk In</option>
                                    <option value="3">HR</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingSubSource" className="mb-3"
                            label={<><span className="label-text">Sub source (RM....)</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder="Sub source (RM....)" defaultValue="RM7896541" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

<Card className='jaf-card mb-4 FamilyDetails'>
    <Card.Body>
        <Form>
            <Row>
                <Col className="mb-">
                    <h4 className='mb-3'>Family Details</h4>
                </Col>
                <Col className="text-end">
                <Button className='editIcon' variant="primary"><FiEdit /></Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <FloatingLabel controlId="asd"label="Relationship" className='mb-3'>
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
    );
}

export default Preview;
