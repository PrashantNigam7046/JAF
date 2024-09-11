import React from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import Stepper from 'react-stepper-horizontal';
import JAFComponent from '../component/JAFComponent';
import "../assets/styles/formsteps.css";
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
        <div key="step1">
          {/* jaf component */}
          <JAFComponent />
        </div>,
        <div key="step2">
          <h4>Step 2 Content</h4>
          <p>This is the content for Step 2.</p>
        </div>,
        <div key="step3">
          <h4>Step 3 Content</h4>
          <p>This is the content for Step 3.</p>
        </div>,
        <div key="step4">
          <h4>Step 4 Content</h4>
          <p>This is the content for Step 3.</p>
        </div>,
        <div key="step5">
          <h4>Step 5 Content</h4>
          <p>This is the content for Step 3.</p>
        </div>,
      ];

    return (
        <>

    <Container>
        <Row className='Form-steps'>
            <Col className='multi-step-box' xl={{ span: 5, offset: 6 }} md={{ span: 6, offset: 5 }} sm={{ span: 8, offset: 3 }} xs={{ span: 10, offset: 1 }}>
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
            </Col>
            <Col className='single-step-box' xl={1} md={1} sm={1} xs={1}>
                1
            </Col>
        </Row>

        <Row className="mt-4">
            <Col>
            {stepContent[stepIndex]}
            </Col>
        </Row>

        <Row className="mt-4">
            <Col>
                <Button
                    variant="secondary"
                    onClick={() => setStepIndex(stepIndex - 1)}
                    disabled={stepIndex === 0}
                >
                    Previous
                </Button>
            </Col>
            <Col className="text-end">
                <Button
                    variant="primary"
                    onClick={() => setStepIndex(stepIndex + 1)}
                    disabled={stepIndex === steps.length - 1}
                >
                    Next
                </Button>
            </Col>
        </Row>
    </Container>
            
        </>
    );
}

export default ApplicationFormPage;
