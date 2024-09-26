import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import DashboardHrComponent from '../component/HumanResource/DashboardHrComponent';
import { FaArrowLeft } from "react-icons/fa";

const HrDashboardPage = () => {
    return (
        <>
        
        <Container>
            <div className='Dashboard-section-space'>
                <div className="mt-4 mb-4">
                    <Col>
                        {/* <Button variant="dark" className='mb-2 backButton'><FaArrowLeft /></Button> */}
                        <DashboardHrComponent />
                    </Col>
                </div>
                
            </div>
        </Container>
            
        </>
    );
}

export default HrDashboardPage;
