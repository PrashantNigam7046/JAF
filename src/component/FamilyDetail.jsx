import React, { useEffect, useState } from 'react';
import { FloatingLabel, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { IoMdAddCircleOutline, IoIosCloseCircle } from 'react-icons/io';
import { getRelations } from '../services/apiService'; // Ensure postFamilyDetails is imported

const FamilyDetail = ({ onDataChange }) => {
  const [members, setMembers] = useState([{ id: 1 }]);
  const [relation, setRelation] = useState([]);
  const [formDataFamily, setFormDataFamily] = useState([]);

  const addMember = () => {
    setMembers([...members, { id: members.length + 1 }]);
  };

  const removeMember = (id) => {
    if (members.length > 1 && id !== 1) {
      setMembers(members.filter(member => member.id !== id));
    }
  };

  const getFamilyRelation = async () => {
    try {
      const res = await getRelations();
      setRelation(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (id, name, value) => {
  //   setFormDataFamily(prevData => {
  //     const updatedData = [...prevData];
  //     const memberIndex = updatedData.findIndex(member => member.id === id);
  //     if (memberIndex >= 0) {
  //       updatedData[memberIndex] = { ...updatedData[memberIndex], [name]: value };
  //     } else {
  //       updatedData.push({ id, [name]: value });
  //     }
  //     return updatedData;
  //   });
  // };

      // Handle input changes for family members
    const handleChange = (id, name, value) => {
        const updatedMembers = members.map(member => {
            if (member.id === id) {
                return { ...member, [name]: value };
            }
            return member;
        });

        setMembers(updatedMembers);
        onDataChange(updatedMembers); // Send updated members to parent
    };

  useEffect(() => {
    getFamilyRelation();
  }, []);

  return (
    <>
      <h1 className="mb-3">FAMILY DETAILS</h1>
      <p>(Maximum 4 members can be added)</p>

      {members.map(member => (
        <Card key={member.id} className="jaf-card mb-4 Altcard">
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <FloatingLabel controlId={`floatingRelationship-${member.id}`} className='mb-3'
                    label={<><span className="label-text">Relationship</span> <span className="required">*</span></>}>
                    <Form.Select 
                      onChange={(e) => handleChange(member.id, 'relationship', e.target.value)}
                      aria-label="Floating label select example">
                      {relation.map(element => (
                        <option key={element.uuid} value={element.uuid}>{element.typesOfRelation}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingFirstName-${member.id}`} className='mb-3'
                    label={<><span className="label-text">First Name</span> <span className="required">*</span></>}>
                    <Form.Control 
                      type="text" 
                      onChange={(e) => handleChange(member.id, 'firstName', e.target.value)} 
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingLastName-${member.id}`} label={<><span className="label-text">lastname</span> <span className="required">*</span> </>} className='mb-3'>
                    <Form.Control 
                      type="text" 
                      onChange={(e) => handleChange(member.id, 'lastName', e.target.value)} 
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingAge-${member.id}`} className='mb-3'
                    label={<><span className="label-text">Age</span></>}>
                    <Form.Control 
                      type="number" 
                      onChange={(e) => handleChange(member.id, 'age', e.target.value)} 
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel controlId={`floatingOccupation-${member.id}`} className='mb-3'
                    label={<><span className="label-text">Occupation</span> </>}>
                    <Form.Control 
                      type="text" 
                      onChange={(e) => handleChange(member.id, 'occupation', e.target.value)} 
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
            {member.id !== 1 && (
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
