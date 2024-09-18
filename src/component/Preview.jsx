import React, {useState} from 'react';
import { FormGroup, FloatingLabel, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { FiEdit  } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle  } from "react-icons/fa";

const Preview = () => {
    const[isShowEdit, setShowEdit] = useState(false)



    const handleEditFormPreview = (str) => {
      
        switch (str) {
            case "General Details":
                setShowEdit(true)
                break;
            case "Family Details":
                setShowEdit(true)
            default:
                break;
        }
    }
    return (
        <>
        <h1 className="mb-3">PREVIEW</h1>

        <Card className='jaf-card mb-4 GeneralDetails previewCard'>
            <Card.Body>
                <Row className='d-flex align-items-center mb-2'>
                    <Col className="mb-">
                        <h4 className='mb-0'>General Details</h4>
                    </Col>
                    <Col className="text-end d-flex align-items-center flex-row-reverse">
                        {isShowEdit ? <>
                            <Button className='saveIcon' variant="primary">Save <FaCheckCircle className='ml-1'/></Button>
                            <Button className='cancelIcon' variant="primary">Cancel <MdCancel  className='ml-1'/></Button>
                        </> 
                         : 
                         <Button className='editIcon' variant="primary" onClick={() => handleEditFormPreview("General Details")}>Edit <FiEdit className='ml-1'/></Button>
                        }
                    </Col>
                </Row>
                <hr></hr>
                <Form>
                    <Row>
                        <Col md={3}>
                            <FloatingLabel controlId="floatingName" className='mb-3'
                            label={<><span className="label-text">Name</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='' defaultValue="Sahil Sangwan" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingPost" className="mb-3"
                            label={<><span className="label-text">Post Applied for</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1" selected>Sr. BDA</option>
                                    <option value="2">Designer</option>
                                    <option value="3">Developer</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingMobile"
                                className="mb-3"
                                label={<><span className="label-text">Mobile No:</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Mobile No:" defaultValue="8989898989"  />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingDob" className="mb-3" 
                            label={<><span className="label-text">DOB</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="date" aria-label="DOB" defaultValue="1999-09-12" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingSelect" className="mb-3"
                            label={<><span className="label-text">Gender</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1" selected>Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingEmail" className="mb-3"
                            label={<><span className="label-text">E-Mail ID</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="email" placeholder="E-Mail ID"  defaultValue="sahil@gmail.com" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingAadhar" className="mb-3" 
                            label={<><span className="label-text">Aadhar Card No:</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Aadhar Card No:" defaultValue="224546857854" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingPan" label="Pan Card No:" className="mb-3">
                                <Form.Control disabled type="text" placeholder="Pan Card No:" defaultValue="Atrid8963F" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={6}>
                            <FloatingLabel
                                controlId="floatingCurrentAddress"
                                className="mb-3"
                                label={<><span className="label-text">Current Address</span> <span className="required">*</span></>}>
                            
                                <Form.Control disabled as="textarea" placeholder="Address" defaultValue="368, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingPin"
                                className="mb-3"
                                label={<><span className="label-text">Pin Code</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Pin Code" defaultValue="123401"  />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingSelect" className="mb-3"
                            label={<><span className="label-text">State</span> <span className="required">*</span></>}>
                            
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1" selected>Haryana</option>
                                    <option value="2">Rajasthan</option>
                                    <option value="3">Maharashtra</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={12}><hr className='mt-0'></hr></Col>
                        
                        <Col md={6}>
                            <FloatingLabel
                                controlId="floatingAddressPermanent"
                                className="mb-3"
                                label={<><span className="label-text">Permanent Address</span> <span className="required">*</span></>}>
                            
                                <Form.Control disabled as="textarea" placeholder="Address" defaultValue="368, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingPin"
                                className="mb-3"
                                label={<><span className="label-text">Pin Code</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Pin Code" defaultValue="56325" />
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingNumber" className="mb-3" 
                            label={<><span className="label-text">Alternate Number</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder="Alternate Number" defaultValue="8988888888" />
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel controlId="floatingSource" className="mb-3"
                            label={<><span className="label-text">Job Applied Source</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                    <option>Select</option>
                                    <option value="1">Naukari</option>
                                    <option value="2">Consultant</option>
                                    <option value="3" selected>Walk In</option>
                                    <option value="3">HR</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        
                        <Col md={3}>
                            <FloatingLabel controlId="floatingSubSource" className="mb-3"
                            label={<><span className="label-text">Sub source (RM....)</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder="Sub source (RM....)" defaultValue="RM7896541" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

        <Card className='jaf-card mb-4 FamilyDetails previewCard'>
            <Card.Body>
                <Form>
                    <Row className='d-flex align-items-center mb-2'>
                        <Col className="mb-">
                            <h4 className='mb-0'>Family Details</h4>
                        </Col>
                        <Col className="text-end d-flex align-items-center flex-row-reverse">
                            {isShowEdit ? <>
                                <Button className='saveIcon' variant="primary">Save <FaCheckCircle className='ml-1'/></Button>
                            <Button className='cancelIcon' variant="primary">Cancel <MdCancel  className='ml-1'/></Button>
                            </> 
                            : 
                            <Button className='editIcon' variant="primary" onClick={() => handleEditFormPreview("Family Details")}>Edit <FiEdit className='ml-1'/></Button>
                            }
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="floatingRelationship" className='mb-3'
                            label={<><span className="label-text">Relationship</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                <option>Select</option>
                                <option value="1" selected>Father</option>
                                <option value="2">Mother</option>
                                <option value="3">Uncle</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingFirstName" className='mb-3'
                            label={<><span className="label-text">First Name</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='First Name' defaultValue="Ramesh" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingLastName" label="Last Name" className='mb-3'>
                                <Form.Control disabled type="text" placeholder='Last Name' defaultValue="Kumar" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingAge" className='mb-3'
                            label={<><span className="label-text">Age</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder='Age' defaultValue="60" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingOccupation" className='mb-3'
                            label={<><span className="label-text">Occupation</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='Occupation' defaultValue="Branch Manager" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

        <Card className='jaf-card mb-4 EducationalDetails previewCard'>
            <Card.Body>
                <Form>
                    <Row className='d-flex align-items-center mb-2'>
                        <Col className="mb-">
                            <h4 className='mb-0'>Educational Qualification Details</h4>
                        </Col>
                        <Col className="text-end d-flex align-items-center flex-row-reverse">
                        {isShowEdit ? <>
                            <Button className='saveIcon' variant="primary">Save <FaCheckCircle className='ml-1'/></Button>
                            <Button className='cancelIcon' variant="primary">Cancel <MdCancel  className='ml-1'/></Button>
                        </> 
                         : 
                         <Button className='editIcon' variant="primary" onClick={() => handleEditFormPreview("General Details")}>Edit <FiEdit className='ml-1'/></Button>
                        }
                    </Col>
                    </Row>
                    <hr></hr>
                    <Row>       
                        <Col md={3}>
                            <FloatingLabel controlId="floatingQualification" className='mb-3'
                            label={<><span className="label-text">Education (latest pursuing)</span> <span className="required">*</span></>}>
                                <Form.Select aria-label="Floating label select example" disabled>
                                <option>Select</option>
                                <option value="1">12th</option>
                                <option value="2" selected>Graduation</option>
                                <option value="3">Post Graduation</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId="floatingUniversity" className='mb-3'
                            label={<><span className="label-text">Name of Board/University</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text"  placeholder='Name of Board/University' defaultValue="M.D.U" />
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId="floatingMarks" className='mb-3'
                            label={<><span className="label-text">Division/ % of Marks</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text"  placeholder='Division/ % of Marks' defaultValue="65" />
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId="floatingPassingYear" className='mb-3'
                            label={<><span className="label-text">Year of Passing</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number"  placeholder='Year of Passing' defaultValue="2012" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

        <Card className='jaf-card mb-4 ExperienceDetails previewCard'>
            <Card.Body>
                <Form>
                    <Row className='d-flex align-items-center mb-2'>
                        <Col className="mb-">
                            <h4 className='mb-0'>Work Experience Details</h4>
                        </Col>
                        <Col className="text-end d-flex align-items-center flex-row-reverse">
                            {isShowEdit ? <>
                                <Button className='saveIcon' variant="primary">Save <FaCheckCircle className='ml-1'/></Button>
                                <Button className='cancelIcon' variant="primary">Cancel <MdCancel  className='ml-1'/></Button>
                            </> 
                            : 
                            <Button className='editIcon' variant="primary" onClick={() => handleEditFormPreview("General Details")}>Edit <FiEdit className='ml-1'/></Button>
                            }
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>       
                        <Col md={4}>
                            <FloatingLabel controlId="floatingOrganization" className="mb-3"
                            label={<><span className="label-text">Name of the Organization</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text"  placeholder='Name of the Organization' defaultValue="Abc Pvt ltd" />
                            </FloatingLabel>
                        </Col>
                        <Col md={4}>
                            <FloatingLabel controlId="floatingDesignation" className="mb-3"
                            label={<><span className="label-text">Designation</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text"  placeholder='Designation' defaultValue="Sr Manager" />
                            </FloatingLabel>
                        </Col>
                        <Col md={2}>
                            <FloatingLabel controlId="floatingFromDate" className="mb-3" 
                            label={<><span className="label-text">From</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="date" aria-label="Date from" defaultValue="2020-01-01"  />
                            </FloatingLabel>       
                        </Col>
                        <Col md={2}>
                            <FloatingLabel controlId="floatingToDate" className="mb-3" 
                            label={<><span className="label-text">TO</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="date" aria-label="Date to" defaultValue="2024-04-12"  />
                            </FloatingLabel>       
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId="floatingSalary" className="mb-3"
                            label={<><span className="label-text">Gross Salary P.M</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number"  placeholder='Gross Salary P.M' defaultValue="50000" />
                            </FloatingLabel>          
                        </Col>
                        <Col md={3}>
                            <FloatingLabel controlId="floatingDeduction" className="mb-3"
                            label={<><span className="label-text">Take Home P.M(After Deduction)</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number"  placeholder='Take Home P.M(After Deduction)' defaultValue="45000" />
                            </FloatingLabel>          
                        </Col>
                        <Col md={6}>
                            <FloatingLabel controlId="floatingLeaving" className="mb-3"
                            label={<><span className="label-text">Reasons for leaving</span> <span className="required">*</span></>}>
                                <Form.Control disabled as="textarea"  placeholder='Reasons for leaving' defaultValue="I want to take on new challenges that will help me develop my skills further." />
                            </FloatingLabel>          
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>

        <Card className='jaf-card mb-4 ExperienceDetails previewCard'>
            <Card.Body>
                <Form>
                    <Row className='d-flex align-items-center mb-2'>
                        <Col className="mb-">
                            <h4 className='mb-0'>Professional References</h4>
                        </Col>
                        <Col className="text-end d-flex align-items-center flex-row-reverse">
                            {isShowEdit ? <>
                                <Button className='saveIcon' variant="primary">Save <FaCheckCircle className='ml-1'/></Button>
                                <Button className='cancelIcon' variant="primary">Cancel <MdCancel  className='ml-1'/></Button>
                            </> 
                            : 
                            <Button className='editIcon' variant="primary" onClick={() => handleEditFormPreview("General Details")}>Edit <FiEdit className='ml-1'/></Button>
                            }
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="floatingReferenceName" className="mb-3"
                            label={<><span className="label-text">Name</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='Name' defaultValue="Shobhit Adhikari" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingReferenceOrganization" className="mb-3"
                            label={<><span className="label-text">Organization</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='Organization' defaultValue="One Cube pvt ltd" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingReferenceMobile" className="mb-3"
                            label={<><span className="label-text">Mobile No:</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="number" placeholder='Mobile No:' defaultValue="7878787878" />
                            </FloatingLabel>          
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingReferenceEmail" className="mb-3"
                            label={<><span className="label-text">E-Mail Address</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='E-Mail Address' defaultValue="shobhit@gmail.com" />
                            </FloatingLabel>          
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingReferenceDesignation" className="mb-3"
                            label={<><span className="label-text">Designation</span> <span className="required">*</span></>}>
                                <Form.Control disabled type="text" placeholder='Designation' defaultValue="React Developer" />
                            </FloatingLabel>          
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>


            
        </>
    );
}

export default Preview;
