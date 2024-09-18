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
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const handleStartDateChange = (event) => {
      setStartDate(event.target.value);
    };
  
    const handleEndDateChange = (event) => {
      setEndDate(event.target.value);
    };
    return (
        <>

        <h1 className="mb-3">WORK EXPERIENCE DETAILS</h1>
        {/* <p>( Starting from the current organization )</p> */}
        <Form>
        <div className="mb-3">
          <Form.Check
            inline
            label="Fresher"
            name="group1"
            type="radio"
            id="sd"
          />
          <Form.Check
            inline
            label="Experienced"
            name="group1"
            type="radio"
            id="ssd"
          />
        </div>
    </Form>

        {experience.map(experience => (
        <Card className="jaf-card mb-4 Altcard">
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingOrganization-${experience.id}`} className="mb-3"
                            label={<><span className="label-text">Name of the Organization</span> <span className="required">*</span></>}>
                                <Form.Control type="text"  placeholder='' />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId={`floatingDesignation-${experience.id}`} className="mb-3"
                            label={<><span className="label-text">Designation</span> <span className="required">*</span></>}>
                                <Form.Control type="text"  placeholder='' />
                            </FloatingLabel>
                        </Col>
                        <Col md={2}>
                            <FloatingLabel controlId="floatingFromDate" className="mb-3" 
                            label={<><span className="label-text">From</span> <span className="required">*</span></>}>
                                <Form.Control
                                    type="date"
                                    aria-label="dsf"
                                    
                                />
                            </FloatingLabel>       
                        </Col>
                        <Col md={2}>
                            <FloatingLabel controlId="floatingToDate" className="mb-3" 
                            label={<><span className="label-text">TO</span> <span className="required">*</span></>}>
                                <Form.Control
                                    type="date"
                                    aria-label="dsf"
                                    
                                />
                            </FloatingLabel>       
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId={`floatingSalary-${experience.id}`} className="mb-3"
                            label={<><span className="label-text">Gross Salary P.M</span> <span className="required">*</span></>}>
                                <Form.Control type="number"  placeholder='' />
                            </FloatingLabel>          
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId={`floatingDeduction-${experience.id}`} className="mb-3"
                            label={<><span className="label-text">Take Home P.M(After Deduction)</span> <span className="required">*</span></>}>
                                <Form.Control type="number"  placeholder='' />
                            </FloatingLabel>          
                        </Col>
                        <Col md={6}>
                            <FloatingLabel controlId={`floatingLeaving-${experience.id}`} className="mb-3"
                            label={<><span className="label-text">Reasons for leaving</span> <span className="required">*</span></>}>
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
