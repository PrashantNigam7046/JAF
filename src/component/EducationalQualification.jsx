import React, { useEffect, useState } from 'react';
import { FloatingLabel, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';
import { IoMdAddCircleOutline, IoIosCloseCircle } from 'react-icons/io';
import { getUniversityList } from '../services/apiService';

const EducationalQualification = ({ onDataChange }) => {
  const [education, setEducation] = useState([{ id: 1, diplomaDegreeExaminationPassed: '', boardName: '', percentage: '', yearOfPassing: '' }]);
  const [universityList, setUniversityList] = useState()
  const addEducationDetail = () => {
    setEducation([...education, { id: education.length + 1, diplomaDegreeExaminationPassed: '', boardName: '', percentage: '', yearOfPassing: '' }]);
  };

  const removeQualification = (id) => {
    if (education.length > 1 && id !== 1) {
      setEducation(prev => {
        const updatedEducation = prev.filter(item => item.id !== id);
        onDataChange(updatedEducation); // Send updated data to parent
        return updatedEducation;
      });
    }
  };

  const getUniversityListData = async () => {
      try {
        const res = await getUniversityList()
          console.log("university==========", res.data)
          setUniversityList(res.data)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    getUniversityListData()
  },[])

  const handleChange = (id, name, value) => {
    setEducation(prev => {
      const updatedEducation = prev.map(item =>
        item.id === id ? { ...item, [name]: value } : item
      );
      onDataChange(updatedEducation); // Send updated data to parent
      return updatedEducation;
    });
  };


  return (
    <>
      <h1 className="mb-3">EDUCATIONAL QUALIFICATION DETAILS</h1>
      {education.map(item => (
        <Card key={item.id} className="jaf-card mb-4 Altcardd">
          <Card.Body>
            <Form>
              <Row>
                <Col md={12}>
                {/* label={<><span className="label-text">Education (Highest/Latest/pursuing)</span> <span className="required">*</span></>} */}
                <FloatingLabel controlId={`floatingQualification-${item.id}`} className='mb-3'>
                    <div>
                        <Form.Check 
                            type="radio" 
                            inline
                            name="diplomaDegreeExaminationPassed" 
                            label="12th" 
                            value="12th" 
                            checked={item.diplomaDegreeExaminationPassed === "12th"}
                            onChange={(e) => handleChange(item.id, e.target.name, e.target.value)}
                        />
                        <Form.Check 
                            type="radio" 
                            inline
                            name="diplomaDegreeExaminationPassed" 
                            label="Graduation" 
                            value="Graduation" 
                            checked={item.diplomaDegreeExaminationPassed === "Graduation"}
                            onChange={(e) => handleChange(item.id, e.target.name, e.target.value)}
                        />
                        <Form.Check 
                            type="radio"
                            inline 
                            name="diplomaDegreeExaminationPassed" 
                            label="Post Graduation" 
                            value="Post Graduation" 
                            checked={item.diplomaDegreeExaminationPassed === "Post Graduation"}
                            onChange={(e) => handleChange(item.id, e.target.name, e.target.value)}
                        />
                    </div>
                </FloatingLabel>
                </Col>
                
                <Col md={3}>
                  <FloatingLabel controlId="floatingUniversity" className='mb-3'
                    label={<><span className="label-text">University</span> <span className="required">*</span></>}>
                    <Form.Select aria-label="Floating label select example">
                      <option>select</option>
                      {universityList?.map((element)=>{
                        console.log("element name",element.name)
                        return (<>
                          <option value={element.name}>{element.name}</option>
                        </>)
                      })}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md={3}>
                  <FloatingLabel controlId={`floatingUniversity-${item.id}`} className='mb-3'
                    label={<><span className="label-text">Name of Board/University</span> <span className="required">*</span></>}>
                    <Form.Control 
                      type="text" 
                      name="boardName"
                      placeholder='' 
                      onChange={(e) => handleChange(item.id, e.target.name, e.target.value)} 
                      value={item.boardName} 
                    />
                  </FloatingLabel>
                </Col>
                <Col md={3}>
                  <FloatingLabel controlId={`floatingMarks-${item.id}`} className='mb-3'
                    label={<><span className="label-text">Division/ % of Marks</span> <span className="required">*</span></>}>
                    <Form.Control
                      name='percentage' 
                      type="text" 
                      placeholder='' 
                      onChange={(e) => handleChange(item.id, e.target.name, e.target.value)} 
                      value={item.percentage} 
                    />
                  </FloatingLabel>
                </Col>
                <Col md={3}>
                  <FloatingLabel controlId={`floatingPassingYear-${item.id}`} className='mb-3'
                    label={<><span className="label-text">Year of Passing</span> <span className="required">*</span></>}>
                    <Form.Control 
                      type="number" 
                      placeholder='' 
                      name='yearOfPassing'
                      onChange={(e) => handleChange(item.id, e.target.name, e.target.value)} 
                      value={item.yearOfPassing} 
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
            {item.id !== 1 && (
              <span className='delete-card' onClick={() => removeQualification(item.id)} title='Remove'>
                <IoIosCloseCircle />
              </span>
            )}
          </Card.Body>
        </Card>
      ))}

      {/* <Button variant="primary" className='AddButton' onClick={addEducationDetail} disabled={education.length >= 4}>
        <IoMdAddCircleOutline /> Add Qualification
      </Button> */}
      
    </>
  );
};

export default EducationalQualification;
