import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import OpsDashboardComponent from '../component/ops/OpsDashboardComponent';

const OpsAssessmentPage = () => {
    return (
        <>
            
        <Container>
            <div className='Dashboard-section-space'>
                <div className="mt-4 mb-5">
                    <Col>
                        <Button variant="dark" className='mb-4 backButton'><FaArrowLeft /></Button>
                        <OpsDashboardComponent />
                    </Col>
                </div>
                
            </div>
        </Container>

        </>
    );
}

export default OpsAssessmentPage;
