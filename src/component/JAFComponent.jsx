import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingInput from "./commonComponent/FloatingInput";
import { getOpenPositions, getAppliedSource } from "../services/apiService.js";
import axios from "axios";

const JAFComponent = ({ onDataChange }) => {
    const [openPosition, setOpenPositions] = useState([]);
    const [appliedSource, setAppliedSource] = useState([]);
    const [states, setStates] = useState([]);
    const [formData, setFormData] = useState({
        openPostId: '',
        dob: '',
        gender: '',
        candidateSignature: "candidate",
        source: '',
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
        setFormData(updatedFormData);
        onDataChange(updatedFormData);
    };

    const handleCurrentAddress = (e) => {
        if (e.target.checked) {
            // Copy current address to permanent address fields
            const updatedFormData = {
                ...formData,
                permanentAddressState: formData.currentAddressState,
                permanentAddress: formData.currentAddress,
                permanentAddressPincode: formData.currentAddressPincode,
            };
            setFormData(updatedFormData);
            onDataChange(updatedFormData); // Send updated data to parent
        }
        else {
            // If unchecked, clear the permanent address fields
            const updatedFormData = {
                ...formData,
                permanentAddressState: '',
                permanentAddress: '',
                permanentAddressPincode: '',
            };
            setFormData(updatedFormData);
            onDataChange(updatedFormData); // Send updated data to parent
        }
    };

    const getOpenPosition = async () => {
        try {
            const response = await getOpenPositions();
            setOpenPositions(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getSource = async () => {
        try {
            const res = await getAppliedSource();
            setAppliedSource(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getStateList = async () => {
        try {
            const res = await axios.get("./state.json");
            setStates(res.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getOpenPosition();
        getSource();
        getStateList();
    }, []);

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
            controlId: "floatingSource",
            label: "Job Applied Source",
            type: "select",
            options: appliedSource.map(position => ({
                value: position.uuid, 
                label: position.sourceName 
            })),
            required: false,
            name: "source",
            onChange: handleChange,
        },
    ];

    const currentAddressFields = [
        {
            controlId: "floatingCurrentState",
            label: "Current State",
            type: "select",
            options: states.map((element) => ({
                value: element.value,
                label: element.label
            })),
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
            options: states.map((element) => ({
                value: element.value,
                label: element.label
            })),
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
                                        onChange={e => handleCurrentAddress(e)}
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
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default JAFComponent;
