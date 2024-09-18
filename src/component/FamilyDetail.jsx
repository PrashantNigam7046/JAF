import React, { useState } from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { IoMdAddCircleOutline, IoIosCloseCircle } from 'react-icons/io';

const FamilyDetail = () => {
  const [members, setMembers] = useState([{ id: 1 }]);

  const addMember = () => {
    setMembers([...members, { id: members.length + 1 }]);
  };

  const removeMember = (id) => {
    // Ensure the first member (id === 1) cannot be removed
    if (members.length > 1 && id !== 1) {
        setMembers(members.filter(member => member.id !== id));
    }
  };

  return (
    <>
      <h1 className="mb-3">FAMILY DETAILS</h1>
      <p className=''>( Maximum 4 members can be added )</p>

      {members.map(member => (
        <Card key={member.id} className="jaf-card mb-4 Altcard">
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <FloatingLabel controlId={`floatingRelationship-${member.id}`} className='mb-3'
                  label={<><span className="label-text">Relationship</span> <span className="required">*</span></>}>
                    <Form.Select aria-label="Floating label select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingFirstName-${member.id}`} className='mb-3'
                  label={<><span className="label-text">First Name</span> <span className="required">*</span></>}>
                    <Form.Control type="text" placeholder='' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingLastName-${member.id}`} label="Last Name" className='mb-3'>
                    <Form.Control type="text" placeholder='' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingAge-${member.id}`} className='mb-3'
                  label={<><span className="label-text">Age</span> <span className="required">*</span></>}>
                    <Form.Control type="number" placeholder='' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingOccupation-${member.id}`} className='mb-3'
                  label={<><span className="label-text">Occupation</span> <span className="required">*</span></>}>
                    <Form.Control type="text" placeholder=''/>
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
            {member.id !== 1 && ( // Conditionally render the close icon
              <span className='delete-card' onClick={() => removeMember(member.id)}>
                <IoIosCloseCircle />
              </span>
            )}
          </Card.Body>
        </Card>
      ))}

      <Button
        variant="primary"
        className='AddButton'
        onClick={addMember}
        disabled={members.length >= 4}
      >
        <IoMdAddCircleOutline /> Add Member
      </Button>
      
    </>
  );
};

export default FamilyDetail;
