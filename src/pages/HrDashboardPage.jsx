import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import DashboardHrComponent from '../component/HumanResource/DashboardHrComponent';

const HrDashboardPage = () => {
    return (
        <>
        
        <Container>
            <div className='Dashboard-section-space'>
                <div className="mt-4 mb-4">
                    <DashboardHrComponent />
                </div>
                
            </div>
        </Container>
            
        </>
    );
}

export default HrDashboardPage;
