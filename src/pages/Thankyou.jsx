import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Thankyou = () => {
    return (
        <>
            <Container>
                <div className='Middle_screen d-flex flex-column justify-content-center align-items-center text-center'>
                    <div className='Middle_screen_inner ThankyouPage'>  
                        <img src='thank-you.gif' alt='Thankyou' style={{mixBlendMode:"multiply", maxWidth:"310px", width:"100%"}} />
                        <h5>for your interest in joining Radical Minds Technology Pvt. Ltd. </h5>
                        <h5>Your Application Id is <span className='appId'>94569852</span>.</h5>
                        <h5>We have sent you an email on <span className='appmail'>abc@gmail.com</span> confirming your application.</h5>
                        </div>
                    </div>
            </Container>  
        </>
    );
}

export default Thankyou;
