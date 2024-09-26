import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { FaArrowLeft, FaLongArrowAltRight } from "react-icons/fa";
import OpsDashboardComponent from '../ops/OpsDashboardComponent';
import ClientAssessmentComponent from './ClientAssessmentComponent';
const ClientAssesmentPage = () => {
    return (
        <>
            
        <Container>
            <div className='Dashboard-section-space'>
                <div className="mt-4 mb-5">
                    <Col>
                        <Button variant="dark" className='mb-4 backButton'><FaArrowLeft /></Button>
                            <ClientAssessmentComponent />
                        <Row>
                            <Col className='p-0'>
                                <Button variant="dark" className='mt-3 nextButton'>Next <FaLongArrowAltRight /></Button>
                            </Col>
                        </Row>
                    </Col>
                </div>
                
            </div>
        </Container>

        </>
    );
}

export default ClientAssesmentPage;
