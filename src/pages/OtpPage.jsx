import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../assets/styles/login.css";
import OtpComponent from '../component/OtpComponent';
const OtpPage = () => {
    return (
        <>
            <Container>
                <div className='Middle_screen d-flex flex-column justify-content-center align-items-center text-center'>
                    <div className='Middle_screen_inner Middle_screen_otp'>  
                        <h1>OTP Verification</h1>
                        <p className='otp_sent-to-mail'>Enter OTP sent to bill*****s@example.com</p>
                        <OtpComponent/>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default OtpPage;
