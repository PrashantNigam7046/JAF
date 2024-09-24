import React, { useState, useContext  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FloatingLabel} from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import "../../assets/styles/hr-login.css";
import Spinner from 'react-bootstrap/Spinner';

const LoginHrComponent = () => {
    const navigate = useNavigate()
    const [showSpinner, setShowSpinner] = useState(false)
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
        
        navigate("/dashboard-hr")
        
      };


    return (
        <>
            <div className='form_box Hr_form_box'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel
                            controlId="floatingInput"
                            label={<><span className="label-text">Email</span> <span className="required">*</span></>}
                            className="mb-3"
                        >
                            <Form.Control type="email" name="name" value={userDetails.name}  onChange={e => handleChange(e)} placeholder="name@example.com" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" 
                        label={<><span className="label-text">Password</span> <span className="required">*</span></>}>
                            <Form.Control type="password"  placeholder="Password" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='declaration mb-3 d-flex justify-content-between'>
                        <span className='declaration-option'>
                            <Form.Check
                                type='radio'
                                inline
                                label='HR'
                                id='hr'
                                name="group1"
                                className='declaration-option-box d-flex justify-content-between flex-row-reverse align-items-center'
                            />
                        </span>
                        <span className='declaration-option'>
                            <Form.Check
                                type='radio'
                                inline
                                label='OPS'
                                id='ops'
                                name="group1"
                                className='declaration-option-box d-flex justify-content-between flex-row-reverse align-items-center'
                            />
                        </span>
                        <span className='declaration-option'>
                            <Form.Check
                                type='radio'
                                inline
                                label='Client'
                                id='client'
                                name="group1"
                                className='declaration-option-box d-flex justify-content-between flex-row-reverse align-items-center'
                            />
                        </span>
                    </Form.Group>

                    <div className="d-grid">
                        <Button size="lg" variant="primary" type="submit" className='Btn_Continue' onClick={handleSubmit}>
                            Continue 

                            {showSpinner ? <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner> : null}
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default LoginHrComponent;
