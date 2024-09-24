import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingInput from "./commonComponent/FloatingInput";
import { getOpenPositions, getAppliedSource } from "../services/apiService.js";

const JAFComponent = ({ onDataChange }) => {
    const [openPosition, setOpenPositions] = useState([])
    const [appliedSource, setAppliedSource] = useState([])
    const [formData, setFormData] = useState({
        openPostId: '',
        // email: '',
        dob: '',
        gender: '',
        candidateSignature: "candidate",
        aadhaarCardNumber: '',
        panCardNumber: '',
        source: '',
        subSource: '',
        currentAddressState: '',
        currentAddress: '',
        currentAddressPincode: '',
        permanentAddressState: '',
        permanentAddress: '',
        permanentAddressPincode: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedValue = name === 'dob' ? new Date(value).toISOString().split('T')[0] : value;
        
        const updatedFormData = { ...formData, [name]: updatedValue };
        // const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData); // Update local state
        onDataChange(updatedFormData); // Send updated data to parent

    };

    const getOpenPosition = async () => {
        try {
            const response = await getOpenPositions()
            setOpenPositions(response.data.data)
         } catch (error) {
            console.log(error)
         }
    }

    const getSource = async () => {
        try {
            const res = await getAppliedSource();
            console.log("res===",res.data.data)
            setAppliedSource(res.data.data)

        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(()=>{
        getOpenPosition()
        getSource()
    },[])

    console.log("formData", formData)

    const generalDetailsFields = [
        {
            controlId: "floatingPost",
            label: "Post Applied for",
            type: "select",
            options: openPosition.map(position => ({
                value: position.uuid, 
                label: position.openPostName 
            })),
            required: true,
            name: "openPostId",
            onChange: handleChange,
        },
        // {
        //     controlId: "floatingEmail",
        //     label: "E-Mail ID",
        //     type: "email",
        //     placeholder: "E-Mail ID",
        //     required: true,
        //     name: "email",
        //     onChange: handleChange,
        // },
        {
            controlId: "floatingDob",
            label: "DOB",
            type: "date",
            required: true,
            name: "dob",
            onChange: handleChange,
        },
        {
            controlId: "floatingGender",
            label: "Gender",
            type: "select",
            options: [
                { value: '1', label: 'Male' },
                { value: '2', label: 'Female' },
                { value: '3', label: 'Other' },
            ],
            required: true,
            name: "gender",
            onChange: handleChange,
        },
        {
            
            controlId: "floatingAadhar",
            label: "Aadhar Card No",
            placeholder: "Aadhar Card No",
            type: "number",
            required: true,
            name: "aadhaarCardNumber",
            onChange: handleChange,
        },
        {
            controlId: "floatingPan",
            label: "Pan Card No",
            placeholder: "Pan Card No",
            type: "text",
            name: "panCardNumber",
            onChange: handleChange,
        },
        {
            controlId: "floatingSource",
            label: "Job Applied Source",
            type: "select",
            options: appliedSource.map(position => ({
                value: position.uuid, 
                label: position.sourceName 
            })),
            required: true,
            name: "source",
            onChange: handleChange,
        },
        {
            controlId: "floatingSubSource",
            label: "Sub Source (RM....)",
            placeholder: "Sub Source (RM....)",
            type: "number",
            required: true,
            name: "subSource",
            onChange: handleChange,
        },
    ];

    const currentAddressFields = [
        {
            controlId: "floatingCurrentState",
            label: "Current State",
            type: "select",
            options: [
                { value: '1', label: 'One' },
                { value: '2', label: 'Two' },
                { value: '3', label: 'Three' },
            ],
            required: true,
            name: "currentAddressState",
            onChange: handleChange,
        },
        {
            controlId: "floatingCurrentAddress",
            label: "Current Address",
            placeholder: "Current Address",
            type: "textarea",
            required: true,
            name: "currentAddress",
            onChange: handleChange,
        },
        {
            controlId: "floatingCurrentPin",
            label: "Current Pin Code",
            placeholder: "Current Pin Code",
            type: "number",
            required: true,
            name: "currentAddressPincode",
            onChange: handleChange,
        },
    ];

    const permanentAddressFields = [
        {
            controlId: "floatingPermanentState",
            label: "Permanent State",
            type: "select",
            options: [
                { value: '1', label: 'One' },
                { value: '2', label: 'Two' },
                { value: '3', label: 'Three' },
            ],
            required: true,
            name: "permanentAddressState",
            onChange: handleChange,
        },
        {
            controlId: "floatingPermanentAddress",
            label: "Permanent Address",
            placeholder: "Permanent Address",
            type: "textarea",
            required: true,
            name: "permanentAddress",
            onChange: handleChange,
        },
        {
            controlId: "floatingPermanentPin",
            label: "Permanent Pin Code",
            placeholder: "Permanent Pin Code",
            type: "number",
            required: true,
            name: "permanentAddressPincode",
            onChange: handleChange,
        },
    ];

    return (
        <>
            <h1 className="mb-3">JOB APPLICATION FORM</h1>

            <Card className="jaf-card mb-4 Altcardd">
                <Card.Body>
                    <Form>
                        <Row className='d-flex align-items-center mb-2'>
                            <Col className="mb-">
                                <h4 className='mb-0'>General Details</h4>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            {generalDetailsFields.map((field, index) => (
                                <Col md={field.type === 'textarea' ? 4 : 3} key={index}>
                                    <FloatingInput
                                        {...field}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            <Card className="jaf-card mb-4 Altcardd">
                <Card.Body>
                    <Form>
                        <Row className='d-flex align-items-center mb-2'>
                            <Col className="mb-">
                                <h4 className='mb-0'>Current Address</h4>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            {currentAddressFields.map((field, index) => (
                                <Col md={field.type === 'textarea' ? 6 : 3} key={index}>
                                    <FloatingInput
                                        {...field}
                                    />
                                </Col>
                                
                            ))}
                        </Row>
                        
                    </Form>
                </Card.Body>
            </Card>

            <Card className="jaf-card mb-4 Altcardd">
                <Card.Body>
                    <Form>
                        <Row className='d-flex align-items-center mb-2'>
                            <Col className="mb-">
                                <h4 className='mb-0 d-inline-block'>Permanent Address</h4>
                                <Form.Group className='declaration d-inline-block mx-4 me-0'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Same as Current Address'
                                        id='permanentAddressCheck'
                                        className='text-start'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />
                    

                        <Row>
                            {permanentAddressFields.map((field, index) => (
                                <Col md={field.type === 'textarea' ? 6 : 3} key={index}>
                                <FloatingInput
                                    {...field}
                                    value={formData[field.name]} // Pass the current value from formData
                                    onChange={handleChange} // Ensure handleChange is passed down
                                />
                                </Col>
                            ))}
                        </Row>



                        {/* <Row>
                            <Col md={12}>
                                <Form.Group className='declaration mb-3'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Permanent Address Same as above'
                                        id='permanentAddressCheck'
                                        className='text-start'
                                    />
                                </Form.Group>
                            </Col>
                        </Row> */}
                    </Form>
                </Card.Body>
            </Card>

            {/* <Button>Save</Button> */}

        </>
    );
}

export default JAFComponent;
