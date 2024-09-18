import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const FloatingInput = ({ controlId, label, type, placeholder, options, required }) => {
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
        <Form.Select aria-label={label}>
          <option>Select</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      ) : (
        <Form.Control type={type} placeholder={placeholder} />
      )}
    </FloatingLabel>
  );
};

export default FloatingInput;
