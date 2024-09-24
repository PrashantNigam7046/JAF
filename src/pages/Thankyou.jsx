import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Thankyou = () => {

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
                    <div className='Middle_screen_inner ThankyouPage'>  
                        <img src='thank-you.gif' alt='Thankyou' style={{mixBlendMode:"multiply", maxWidth:"310px", width:"100%"}} />
                        <h5>for your interest in joining Radical Minds Technology Pvt. Ltd. </h5>
                        <h5>Your Application Id is <span className='appId'>{localStorage.getItem("uuid")}</span>.</h5>
                        <h5>We have sent you an email on <span className='appmail'>{userDetails.email ? maskEmail(userDetails.email) : 'loading...'}</span> confirming your application.</h5>
                        </div>
                    </div>
            </Container>  
        </>
    );
}

export default Thankyou;
