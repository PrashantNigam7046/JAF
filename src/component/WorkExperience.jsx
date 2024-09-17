import React, { useState } from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form } from "react-bootstrap";
import { IoMdAddCircleOutline, IoIosCloseCircle } from 'react-icons/io';

const WorkExperience = () => {
    const [experience, setExperience] = useState([{ id: 1 }]);
  
    const addWorkExperience = () => {
      setExperience([...experience, { id: experience.length + 1 }]);
    };
  
    const removeWorkExperience = (id) => {
      // Ensure the first member (id === 1) cannot be removed
      if (experience.length > 1 && id !== 1) {
          setExperience(experience.filter(experience => experience.id !== id));
      }
    };

    return (
        <>

        <h1 className="mb-3">WORK EXPERIENCE DETAILS</h1>
        <p>( Starting from the current organization )</p>

        {experience.map(experience => (
        <Card className="jaf-card mb-4 Altcard">
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingOrganization-${experience.id}`} label="Name of the Organization" className="mb-3">
                                <Form.Control type="text"  placeholder='' />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingDesignation-${experience.id}`} label="Designation" className="mb-3">
                                <Form.Control type="text"  placeholder='' />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingPeriod-${experience.id}`} label="Period" className="mb-3">
                                <Form.Control type="number"  placeholder='' />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingSalary-${experience.id}`} label="Gross Salary P.M">
                                <Form.Control type="number"  placeholder='' />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingDeduction-${experience.id}`} label="Take Home P.M(After Deduction)">
                                <Form.Control type="number"  placeholder='' />
                            </FloatingLabel>          
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingLeaving-${experience.id}`} label="Reasons for leaving">
                                <Form.Control type="text"  placeholder='' />
                            </FloatingLabel>          
                        </Col>
                    </Row>
                </Form>
                {experience.id !== 1 && ( // Conditionally render the close icon
                    <span className='delete-card' onClick={() => removeWorkExperience(experience.id)}>
                        <IoIosCloseCircle />
                    </span>
                )}
            </Card.Body>
        </Card>
         ))}

        <Button variant="primary" className='AddButton' onClick={addWorkExperience} disabled={experience.length >= 4} > <IoMdAddCircleOutline /> Add Work Experiences</Button>
        
            
        </>
    );
}

export default WorkExperience;
