import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const FloatingInput = ({ controlId, label, type, placeholder, options, required, onChange, value, name }) => {
  return (
    <FloatingLabel
      controlId={controlId}
      className="mb-3"
      label={
        <>
          <span className="label-text">{label}</span>
          {required && <span className="required">*</span>}
        </>
      }
    >
      {type === 'select' ? (
        <Form.Select 
          aria-label={label} 
          onChange={onChange} 
          value={value} // Ensure value is controlled
          name={name} // Pass the name prop
        >
          <option value="">Select</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      ) : (
        <Form.Control 
          type={type} 
          placeholder={placeholder} 
          onChange={onChange} 
          value={value} // Ensure value is controlled
          name={name} // Pass the name prop
        />
      )}
    </FloatingLabel>
  );
};

export default FloatingInput;
