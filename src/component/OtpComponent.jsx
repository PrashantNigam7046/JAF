import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/styles/login.css";
import { showToast } from '../utils/ToastNotification/toastNotification';

const OtpComponent = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleOtpChange = (e) => {
        setOtp(e);
    };

    const handleSubmitOtp = async (e) => {
        e.preventDefault();
        try {
            const uuid = localStorage.getItem("uuid");
            const response = await axios.post(`https://demoserver.radicalminds.in:3010/api/v1/otp/verify?otpId=${uuid}`, {
                otp: otp
            });
            console.log("OTP response", response.data.data.token);
            localStorage.setItem("authToken", response.data.data.token)
            showToast("otp verified", "success")
            navigate("/job-application-form-page");
        } catch (error) {
            alert("invalid otp")
            console.log("Error during OTP verification", error);
        }
    };

    return (
        <div className='otp_box'>
            <Form onSubmit={handleSubmitOtp}>
                <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={6}
                    renderInput={(props) => (<input {...props} />)}
                />
                <div className="d-grid">
                    <Button size="lg" variant="primary" type="submit" className='Btn_Continue'>
                        Continue
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default OtpComponent;
