import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../assets/styles/login.css";
import OtpComponent from '../component/OtpComponent';
const OtpPage = () => {
       const [userDetails, setUserDetails] = useState({ email: '' });

    useEffect(() => {
        const savedEmail = localStorage.getItem('email_id');
        if (savedEmail) {
            setUserDetails(prevDetails => ({
                ...prevDetails,
                email: savedEmail
            }));
        }
    }, []); // Empty dependency array means this runs once when the component mounts

    // Function to mask the email
    const maskEmail = (email) => {
        const [localPart, domain] = email.split('@');
        if (localPart.length <= 4) {
            // If the local part is short, do not mask
            return email;
        }
        const front = localPart.slice(0, 2);
        const end = localPart.slice(-2);
        const maskedLocalPart = `${front}${'*'.repeat(localPart.length - 4)}${end}`;
        return `${maskedLocalPart}@${domain}`;
    };
    
    return (
        <>
            <Container>
                <div className='Middle_screen d-flex flex-column justify-content-center align-items-center text-center'>
                    <div className='Middle_screen_inner Middle_screen_otp'>  
                        <h1>OTP Verification</h1>
                        <p className='otp_sent-to-mail'>Enter OTP sent to {userDetails.email ? maskEmail(userDetails.email) : 'loading...'}</p>

                        <OtpComponent/>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default OtpPage;
