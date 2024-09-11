import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../assets/styles/login.css";
import LoginComponent from '../component/LoginComponent';
const LoginPage = () => {
    return (
        <>
            <Container>
                <div className='Middle_screen d-flex flex-column justify-content-center align-items-center text-center'>
                    <div className='Middle_screen_inner'>  
                        <h1>Job Application Form</h1>
                            <LoginComponent/>
                        </div>
                    </div>
            </Container>
        </>
    );
}

export default LoginPage;
