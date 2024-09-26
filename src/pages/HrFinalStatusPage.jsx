import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { FaArrowLeft, FaLongArrowAltRight, FaCheckCircle  } from "react-icons/fa";
import HrFinalStatusComponent from '../component/HumanResource/HrFinalStatusComponent';

const HrFinalStatulPage = () => {
    return (
        <>

        <Container>
            <div className='Dashboard-section-space'>
                <div className="mt-4 mb-5">
                    <Col>
                        <Button variant="dark" className='mb-4 backButton'><FaArrowLeft /></Button>
                        <HrFinalStatusComponent />
                        <Row>
                            <Col className='p-0'>
                                <Button variant="dark" className='mt-3 final-submit-button'>Submit <FaCheckCircle /></Button>
                            </Col>
                        </Row>
                    </Col>
                </div>
                
            </div>
        </Container>
            
            
        </>
    );
}

export default HrFinalStatulPage;
