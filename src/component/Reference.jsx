import React, { useState } from 'react';
import { Row, Col, Button, Card } from "react-bootstrap";
import { IoMdAddCircleOutline, IoIosCloseCircle } from "react-icons/io";
import FloatingInput from './commonComponent/FloatingInput';

const Reference = ({ onDataChange }) => {
    // Initialize with two references
    const [references, setReferences] = useState([{ id: 1 }, { id: 2 }]);

    const addReference = () => {
        setReferences([...references, { id: references.length + 1 }]);
    };

    const removeReference = (id) => {
        // Ensure at least two references
        if (references.length > 2 && id !== 1 && id !== 2) {
            setReferences(references.filter(reference => reference.id !== id));
        }
    };

    const handleInputChange = (id, field, value) => {
        const updatedReferences = references.map(reference => 
            reference.id === id ? { ...reference, [field]: value } : reference
        );
        setReferences(updatedReferences);

        // Call onDataChange with the updated references
        const payload = updatedReferences.map(ref => ({
            name: ref.name || '',
            organization: ref.organization || '',
            mobileNumber: ref.mobile || '',
            emailAddress: ref.email || '',
            designation: ref.designation || ''
        }));
        onDataChange(payload);
    };


    return (
        <>
            <h1 className="mb-3">PROFESSIONAL REFERENCES</h1>
            <p>(Minimum two colleagues)</p>

            {references.map(reference => (
                <Card key={reference.id} className="jaf-card mb-4 Altcard">
                    <Card.Body>
                        <Row>
                            <Col>
                                <FloatingInput
                                    controlId={`floatingName-${reference.id}`}
                                    label="Name"
                                    name="name"
                                    type="text"
                                    onChange={(e) => handleInputChange(reference.id, 'name', e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                <FloatingInput
                                    controlId={`floatingOrganization-${reference.id}`}
                                    label="Organization"
                                    name="organization"
                                    type="text"
                                    onChange={(e) => handleInputChange(reference.id, 'organization', e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                <FloatingInput
                                    controlId={`floatingMobile-${reference.id}`}
                                    label="Mobile No"
                                    name="mobileNumber"
                                    type="number"
                                    onChange={(e) => handleInputChange(reference.id, 'mobile', e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                <FloatingInput
                                    controlId={`floatingEmail-${reference.id}`}
                                    label="E-Mail Address"
                                    name="emailAddress"
                                    type="text"
                                    onChange={(e) => handleInputChange(reference.id, 'email', e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                <FloatingInput
                                    controlId={`floatingDesignation-${reference.id}`}
                                    label="Designation"
                                    name="designation"
                                    type="text"
                                    onChange={(e) => handleInputChange(reference.id, 'designation', e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                {/* Conditionally render the close icon for references added beyond the initial two */}
                                {reference.id > 2 && (
                                    <span className='delete-card' onClick={() => removeReference(reference.id)}>
                                        <IoIosCloseCircle />
                                    </span>
                                )}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}

            <Button variant="primary" className='AddButton' onClick={addReference} disabled={references.length >= 4}>
                <IoMdAddCircleOutline /> Add References
            </Button>
        </>
    );
}

export default Reference;
