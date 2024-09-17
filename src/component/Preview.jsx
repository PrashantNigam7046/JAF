import React from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";

const Preview = () => {
    return (
        <>
        <h1 className="mb-3">PREVIEW</h1>

        <Card className='jaf-card mb-4 GenralDetails'>
            <Card.Body>
                <Form>
                    <Row>
                        <Col className="mb-3">
                            <h4 className='mb-3'>Genral Details</h4>
                        </Col>
                        <Col className="text-end">
                        <Button className='editIcon' variant="primary"><FiEdit /></Button>
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Row>
                        <Col className="md-6">
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">Email address</Form.Label>
                                <Form.Control column sm="10" type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Col>
                        <Col className="md-6">asdfasdf</Col>
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
