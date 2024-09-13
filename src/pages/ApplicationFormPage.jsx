import React from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import Stepper from 'react-stepper-horizontal';
import JAFComponent from '../component/JAFComponent';
import "../assets/styles/formsteps.css";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import FamilyDetail from'../component/FamilyDetail';
import EducationalQualification from'../component/EducationalQualification';
import WorkExperience from'../component/WorkExperience';
import Reference from'../component/Reference';

const ApplicationFormPage = () => {


    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ];

      const [stepIndex, setStepIndex] = React.useState(0);

      const stepContent = [
        <div key="step1" className='Application-section'>
          {/* jaf component */}
          <JAFComponent />
        </div>,
        <div key="step2">
          <FamilyDetail />
        </div>,
        <div key="step3">
          <EducationalQualification />
        </div>,
        <div key="step4">
          <WorkExperience />
        </div>,
        <div key="step5">
          <Reference />
        </div>,
      ];

    return (
        <>

    <div className='Form-steps sticky-top'>
        <Container>
            <Row className='m-0  d-flex justify-content-end align-items-center'>
                <Col className='multi-step-box' xl={{ span: 4 }} md={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 10 }}>
                    <Stepper
                        steps={steps}
                        activeStep={stepIndex}
                        activeColor="#007bff"
                        activeTitleColor="#007bff"
                        completeColor="#007bff"
                        completeTitleColor="#007bff"
                        defaultColor="#e0e0e0"
                        defaultTitleColor="#6c757d"
                        circleFontSize="16px"
                    />
                    <div className='single-step-box'>
                        <span>1</span>
                    </div>
                </Col>
                {/* <Col className='single-step-box' xl={1} md={1} sm={1} xs={1}>
                
                </Col> */}
            </Row>
            
        </Container>
    </div>

    <Container>
        <div className='Form-section-space'>
            <Row className="mt-4 mb-4">
                <Col>
                {stepContent[stepIndex]}
                </Col>
            </Row>
        </div>
    </Container>

    <div className='Form-next-prev sticky-bottom'>
        <Container>
            <Row className="">
                <Col>
                    <Button className='btn-previous'
                        variant="secondary"
                        onClick={() => setStepIndex(stepIndex - 1)}
                        disabled={stepIndex === 0}
                    >
                        <FaLongArrowAltLeft /> Previous
                    </Button>
                </Col>
                <Col className="text-end d-flex justify-content-end">
                    <Button className='btn-next'
                        variant="primary"
                        onClick={() => setStepIndex(stepIndex + 1)}
                        disabled={stepIndex === steps.length - 1}
                    >
                        Next <FaLongArrowAltRight />
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
            
        </>
    );
}

export default ApplicationFormPage;
