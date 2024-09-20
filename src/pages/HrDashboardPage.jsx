import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import DashboardHrComponent from '../component/HumanResource/DashboardHrComponent';

const HrDashboardPage = () => {
    return (
        <>
        
        <Container>
            <div className='Dashboard-section-space'>
                <Row className="mt-4 mb-4">
                    <Col>
                        <DashboardHrComponent />
                    </Col>
                </Row>
                
            </div>
        </Container>
            
        </>
    );
}

export default HrDashboardPage;
