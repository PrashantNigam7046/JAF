import React, { useState } from 'react';
import { FloatingLabel, Row, Col, Button, Card, Form } from "react-bootstrap";
import { IoMdAddCircleOutline, IoIosCloseCircle } from 'react-icons/io';

const WorkExperience = ({ onDataChange }) => {
    const [experience, setExperience] = useState([{ id: 1, organizationName: '', designation: '', periodStartDate: '', periodEndDate: '', grossSalaryPm: '', takeHomeSalaryPm: '', reasonForLeaving: '' }]);
    const [disableInput, setDisable] = useState(false);
    const [experienceLevel, setExperienceLevel] = useState('experienced'); // Default value

    const addWorkExperience = () => {
        setExperience([...experience, { id: experience.length + 1, organizationName: '', designation: '', periodStartDate: '', periodEndDate: '', grossSalaryPm: '', takeHomeSalaryPm: '', reasonForLeaving: '' }]);
    };

    const removeWorkExperience = (id) => {
        if (experience.length > 1 && id !== 1) {
            setExperience(experience.filter(exp => exp.id !== id));
        }
    };

    const handleExperienceChange = (value) => {
        setExperienceLevel(value);
        setDisable(value === 'fresher'); // Disable input if "Fresher" is selected
    };

    const handleInputChange = (id, name, value) => {
        const updatedExperience = experience.map(exp => {
            if (exp.id === id) {
                return { ...exp, [name]: value };
            }
            return exp;
        });
        setExperience(updatedExperience);
        onDataChange(updatedExperience); // Send updated data to parent
    };

    return (
        <>
            <h1 className="mb-3">WORK EXPERIENCE DETAILS</h1>
            <Form>
                <div className="mb-3">
                    <Form.Check
                        inline
                        label="Experienced"
                        name="group1"
                        type="radio"
                        id="experienced"
                        value="experienced"
                        checked={experienceLevel === 'experienced'}
                        onChange={() => handleExperienceChange("experienced")}
                    />
                    <Form.Check
                        inline
                        label="Fresher"
                        name="group1"
                        type="radio"
                        id="fresher"
                        value="fresher"
                        checked={experienceLevel === 'fresher'}
                        onChange={() => handleExperienceChange("fresher")}
                    />
                </div>
            </Form>

            {experience.map(exp => (
                <Card className="jaf-card mb-4 Altcard" key={exp.id}>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col md={4}>
                                    <FloatingLabel controlId={`floatingOrganization-${exp.id}`} className="mb-3"
                                        label={<><span className="label-text">Name of the Organization</span> <span className="required">*</span></>}>
                                        <Form.Control 
                                            name="organizationName" 
                                            disabled={disableInput} 
                                            type="text"  
                                            placeholder='' 
                                            value={exp.organizationName}
                                            onChange={(e) => handleInputChange(exp.id, e.target.name, e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col md={4}>
                                    <FloatingLabel controlId={`floatingDesignation-${exp.id}`} className="mb-3"
                                        label={<><span className="label-text">Designation</span> <span className="required">*</span></>}>
                                        <Form.Control 
                                            name='designation' 
                                            type="text" 
                                            disabled={disableInput}  
                                            placeholder='' 
                                            value={exp.designation}
                                            onChange={(e) => handleInputChange(exp.id, e.target.name, e.target.value)}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col md={2}>
                                    <FloatingLabel controlId={`floatingFromDate-${exp.id}`} className="mb-3" 
                                        label={<><span className="label-text">From</span> <span className="required">*</span></>}>
                                        <Form.Control
                                            type="date"
                                            name='periodStartDate'
                                            disabled={disableInput}
                                            value={exp.periodStartDate}
                                            onChange={(e) => handleInputChange(exp.id, e.target.name, e.target.value)}
                                        />
                                    </FloatingLabel>       
                                </Col>
                                <Col md={2}>
                                    <FloatingLabel controlId={`floatingToDate-${exp.id}`} className="mb-3" 
                                        label={<><span className="label-text">To</span> <span className="required">*</span></>}>
                                        <Form.Control
                                            type="date"
                                            name='periodEndDate'
                                            disabled={disableInput}
                                            value={exp.periodEndDate}
                                            onChange={(e) => handleInputChange(exp.id, e.target.name, e.target.value)}
                                        />
                                    </FloatingLabel>       
                                </Col>
                                <Col md={3}>
                                    <FloatingLabel controlId={`floatingSalary-${exp.id}`} className="mb-3"
                                        label={<><span className="label-text">Gross Salary P.M</span> <span className="required">*</span></>}>
                                        <Form.Control 
                                            name="grossSalaryPm" 
                                            type="number" 
                                            disabled={disableInput} 
                                            placeholder='' 
                                            value={exp.grossSalaryPm}
                                            onChange={(e) => handleInputChange(exp.id, e.target.name, e.target.value)}
                                        />
                                    </FloatingLabel>          
                                </Col>
                                <Col md={3}>
                                    <FloatingLabel controlId={`floatingDeduction-${exp.id}`} className="mb-3"
                                        label={<><span className="label-text">Take Home P.M (After Deduction)</span> <span className="required">*</span></>}>
                                        <Form.Control 
                                            name="takeHomeSalaryPm" 
                                            type="number" 
                                            disabled={disableInput} 
                                            placeholder='' 
                                            value={exp.takeHomeSalaryPm}
                                            onChange={(e) => handleInputChange(exp.id, e.target.name, e.target.value)}
                                        />
                                    </FloatingLabel>          
                                </Col>
                                <Col md={6}>
                                    <FloatingLabel controlId={`floatingLeaving-${exp.id}`} className="mb-3"
                                        label={<><span className="label-text">Reasons for leaving</span> <span className="required">*</span></>}>
                                        <Form.Control 
                                            name='reasonForLeaving' 
                                            as="textarea"  
                                            disabled={disableInput} 
                                            placeholder='' 
                                            value={exp.reasonForLeaving}
                                            onChange={(e) => handleInputChange(exp.id, e.target.name, e.target.value)}
                                        />
                                    </FloatingLabel>          
                                </Col>
                            </Row>
                        </Form>
                        {exp.id !== 1 && (
                            <span className='delete-card' onClick={() => removeWorkExperience(exp.id)}>
                                <IoIosCloseCircle />
                            </span>
                        )}
                    </Card.Body>
                </Card>
            ))}

           {!disableInput ? <Button variant="primary" className='AddButton' onClick={addWorkExperience} disabled={experience.length >= 4}>
                <IoMdAddCircleOutline /> Add Work Experiences
            </Button> : ""}
        </>
    );
}

export default WorkExperience;
