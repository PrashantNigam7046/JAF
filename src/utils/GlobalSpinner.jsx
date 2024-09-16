// src/components/GlobalSpinner.js
import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { SpinnerContext } from '../context/SpinnerContext';
import './spinner.css'; // Ensure this file exists and contains the correct styles

const GlobalSpinner = () => {
    const { showSpinner } = useContext(SpinnerContext);

    return (
        showSpinner && (
            <div className="spinner-overlay">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    );
};

export default GlobalSpinner;
