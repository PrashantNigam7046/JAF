import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/styles/login.css";
import OtpInput from 'react-otp-input';
import {Container, Row, Col, FloatingLabel} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const OtpComponent = () => {
    const [otp, setOtp] = useState('');
   const handleOtpChange = (e) => {
    // console.log("e", e)
     setOtp(e)
   }
    return (
        
        <div className='otp_box'>
            <Form>
                <OtpInput
                    value={otp}
                    // isInputNum={tel}
                    inputType="tel"
                    onChange={e => handleOtpChange(e)}
                    numInputs={6}
                    renderInput={(props) => (<input {...props} />) }
                />

                <div className="d-grid">
                    <Button size="lg" variant="primary" type="submit" className='Btn_Continue'>
                        Continue
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default OtpComponent;
