import React, { useState }  from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form  } from "react-bootstrap";
import { IoMdAddCircleOutline, IoIosCloseCircle    } from "react-icons/io";

const Reference = () => {
    const [reference, setReference] = useState([{ id: 1 }]);
  
    const addReference = () => {
      setReference([...reference, { id: reference.length + 1 }]);
    };
  
    const removeReference = (id) => {
      // Ensure the first member (id === 1) cannot be removed
      if (reference.length > 1 && id !== 1) {
          setReference(reference.filter(reference => reference.id !== id));
      }
    };

    return (
        <>

        <h1 className="mb-3">PROFESSIONAL REFERENCES</h1>
        <p>( Last two Supervisors & minimum two colleagues )</p>

        {reference.map(reference => (
        <Card className="jaf-card mb-4 Altcard">
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <FloatingLabel controlId={`floatingName-${reference.id}`} label="Name" className="mb-3">
                                <Form.Control type="text" placeholder='' />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId={`floatingOrganization-${reference.id}`} label="Organization" className="mb-3">
                                <Form.Control type="text" placeholder='' />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId={`floatingMobile-${reference.id}`} label="Mobile No " className="mb-3">
                                <Form.Control type="number" placeholder='' />
                            </FloatingLabel>          
                        </Col>
                        <Col>
                            <FloatingLabel controlId={`floatingEmail-${reference.id}`} label="E-Mail Address" className="mb-3">
                                <Form.Control type="text" placeholder='' />
                            </FloatingLabel>          
                        </Col>
                        <Col>
                            <FloatingLabel controlId={`floatingDesignation-${reference.id}`} label="Designation" className="mb-3">
                                <Form.Control type="text" placeholder='' />
                            </FloatingLabel>          
                        </Col>
                    </Row>
                </Form>
                {reference.id !== 1 && ( // Conditionally render the close icon
                    <span className='delete-card' onClick={() => removeReference(reference.id)}>
                        <IoIosCloseCircle />
                    </span>
                )}
            </Card.Body>
        </Card>
         ))}
        
        {/* <Button variant="primary" className='AddButton'> <IoMdAddCircleOutline /> Add References</Button> */}
        <Button variant="primary" className='AddButton' onClick={addReference} disabled={reference.length >= 4} > <IoMdAddCircleOutline /> Add References</Button>
            
        </>
    );
}

export default Reference;
