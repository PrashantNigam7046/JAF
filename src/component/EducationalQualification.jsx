import React, { useState } from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { IoMdAddCircleOutline, IoIosCloseCircle } from 'react-icons/io';

const EducationalQualification = () => {
  const [education, setEducation] = useState([{ id: 1 }]);

  const addEducationDetail = () => {
    setEducation([...education, { id: education.length + 1 }]);
  };

  const removeQualification = (id) => {
    // Ensure the first member (id === 1) cannot be removed
    if (education.length > 1 && id !== 1) {
        setEducation(education.filter(education => education.id !== id));
    }
  };

    return (
        <>

        <h1 className="mb-3">EDUCATIONAL QUALIFICATION DETAILS</h1>
        {education.map(education => (

        <Card key={education.id} className="jaf-card mb-4 Altcardd">
          <Card.Body>
            <Form>
            
              <Row>
                <Col md={4}>
                  <FloatingLabel controlId={`floatingQualification-${education.id}`} label="Highest Qualification" className='mb-3'>
                    <Form.Control type="text"  placeholder='' />
                  </FloatingLabel>
                </Col>
                <Col md={4}>
                  <FloatingLabel controlId={`floatingUniversity-${education.id}`} label="Name of Board/University" className='mb-3'>
                    <Form.Control type="text"  placeholder='' />
                  </FloatingLabel>
                </Col>
                <Col md={4}>
                  <FloatingLabel controlId={`floatingMarks-${education.id}`} label="Division/ % of Marks" className='mb-3'>
                    <Form.Control type="text"  placeholder='' />
                  </FloatingLabel>
                </Col>
                <Col md={4}>
                  <FloatingLabel controlId={`floatingPassingYear-${education.id}`} label="Year of Passing" className='mb-3'>
                    <Form.Control type="number"  placeholder='' />
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
            {education.id !== 1 && ( // Conditionally render the close icon
              <span className='delete-card' onClick={() => removeQualification(education.id)} title='Remove'>
                <IoIosCloseCircle />
              </span>
            )}
          </Card.Body>
        </Card>
      ))}

          <Button variant="primary" className='AddButton' onClick={addEducationDetail} disabled={education.length >= 4} > <IoMdAddCircleOutline /> Add Qualification</Button>
            
        </>
    );
}

export default EducationalQualification;
