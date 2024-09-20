import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../assets/styles/hr-login.css";
import LoginHrComponent from '../component/HumanResource/LoginHrComponent';

const HrLoginPage = () => {
    return (
        <>
            <Container>
                <div className='Middle_screen d-flex flex-column justify-content-center align-items-center text-center'>
                    <div className='Middle_screen_inner'>  
                        <h1>Login</h1>
                        {/* <h5>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum dolor sit amet, consectetur adipiscing elit.  </h5> */}
                            <LoginHrComponent />
                        </div>
                    </div>
            </Container>
            
        </>
    );
}

export default HrLoginPage;
