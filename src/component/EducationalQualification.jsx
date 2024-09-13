import React from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { IoMdAddCircleOutline, IoIosCloseCircle    } from "react-icons/io";

const EducationalQualification = () => {
    // const [eduaction, seteducation] = React.useState([{ id: 1 }]);

    // const addQualification = () => {
    //     seteducation([...eduaction, { id: eduaction.length + 1 }]);
    // }

    // onClick={() => removeMember(member.id)}

    return (
        <>

            <h1 className="mb-3">EDUCATIONAL QUALIFICATION DETAILS</h1>

            <Card className="jaf-card mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Highest Qualification" className="mb-3">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingInput" label="Name of Board/University" className="mb-3">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Division/ % of Marks " className="mb-3">
                                    <Form.Control type="text" placeholder="" />
                                </FloatingLabel>          
                            </Col>
                            <Col md={4}>
                                <FloatingLabel controlId="floatingSelect" label="Year of Passing">
                                    <Form.Control type="number" placeholder="" />
                                </FloatingLabel>          
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            
            <Button variant="primary" onClick={addQualification} className='AddButton'> <IoMdAddCircleOutline /> Add Qualification</Button>
            
        </>
    );
}

export default EducationalQualification;
