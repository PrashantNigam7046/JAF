import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/styles/login.css"
import {Container, Row, Col, FloatingLabel} from 'react-bootstrap';
import { loginUser } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        name : "",
        email: "",
        mobileNumber: ""
    })


    const handleChange = (e) => {
        console.log("event--", e.target.value)
            
        const {name, value} = e.target

        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
          }));
      
    }


      const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, mobileNumber } = userDetails;
        try {
          const response = await loginUser({ name, email, mobileNumber });
          localStorage.setItem('authToken', response.data.data.token);
          // Optionally, redirect or handle successful login
          navigate("/otp")
        } catch (err) {
          console.error('Login error:', err);
        } 
      };


    return (
        <>
            <div className='form_box'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel
                            controlId="floatingInput"
                            label={<><span className="label-text">Name</span> <span className="required">*</span></>}
                            className="mb-3"
                        >
                            <Form.Control type="email" name="name" value={userDetails.name}  onChange={e => handleChange(e)} placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" 
                        label={<><span className="label-text">Email</span> <span className="required">*</span></>}>
                            <Form.Control type="email" name="email" value={userDetails.email} placeholder="email" onChange={e => handleChange(e)} />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <FloatingLabel controlId="floatingPassword" 
                        label={<><span className="label-text">Mobile Number</span> <span className="required">*</span></>}>
                            <Form.Control type="number" name="mobileNumber" value={userDetails.mobileNumber} placeholder="Phone number" onChange={e => handleChange(e)} />
                        </FloatingLabel>
                    </Form.Group>

                    <div className="d-grid">
                        <Button size="lg" variant="primary" type="submit" className='Btn_Continue' onClick={handleSubmit}>
                            Continue
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default LoginComponent;
