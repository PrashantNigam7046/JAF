import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/styles/login.css";
import { FloatingLabel } from 'react-bootstrap';
import { loginUser } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const LoginComponent = () => {
    const navigate = useNavigate();
    const [showSpinner, setShowSpinner] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        mobileNumber: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowSpinner(true); // Show spinner at the beginning
        const { name, email, mobileNumber } = userDetails;

        try {
            const response = await loginUser({ name, email, mobileNumber });
            // Ensure the response data is structured as expected
            const uuid = response.data.data.uuid;
            console.log("token", response)
            localStorage.setItem('uuid', uuid); // Store token
            localStorage.setItem("email_id", email); // Store email

            console.log("response token:", token);
            navigate("/otp"); // Redirect to OTP page
        } catch (err) {
            console.error('Login error:', err);
            alert("Login failed! Please try again."); // Optional user feedback 
        } finally {
            setShowSpinner(false); // Hide spinner at the end
        }
    };

    return (
        <div className='form_box'>
            <Form onSubmit={handleSubmit}> {/* Use onSubmit on the Form instead of button */}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <FloatingLabel controlId="floatingName" label={<><span className="label-text">Name</span> <span className="required">*</span></>}>
                        <Form.Control type="text" name="name" value={userDetails.name} onChange={handleChange} placeholder="Enter your name" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingEmail" label={<><span className="label-text">Email</span> <span className="required">*</span></>}>
                        <Form.Control type="email" name="email" value={userDetails.email} onChange={handleChange} placeholder="name@example.com" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <FloatingLabel controlId="floatingPhone" label={<><span className="label-text">Mobile Number</span> <span className="required">*</span></>}>
                        <Form.Control type="tel" name="mobileNumber" value={userDetails.mobileNumber} onChange={handleChange} placeholder="Phone number" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='declaration mb-3'>
                    <Form.Check
                        type='checkbox'
                        label='Previously worked with Radical Minds'
                        id='previouslyWorked'
                        className='text-start'
                    />
                </Form.Group>

                <div className="d-grid">
                    <Button size="lg" variant="primary" type="submit" className='Btn_Continue'>
                        Continue
                        {showSpinner && <Spinner animation="border" role="status" className="ms-2">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginComponent;
