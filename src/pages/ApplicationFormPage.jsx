import React from 'react';
import {Container, Row, Col, Button, Badge  } from 'react-bootstrap';
import Stepper from 'react-stepper-horizontal';
import JAFComponent from '../component/JAFComponent';
import "../assets/styles/formsteps.css";
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight, FaLongArrowAltLeft, FaCheckCircle  } from "react-icons/fa";
import FamilyDetail from'../component/FamilyDetail';
import EducationalQualification from'../component/EducationalQualification';
import WorkExperience from'../component/WorkExperience';
import Reference from'../component/Reference';
import Preview from '../component/Preview';
import { postCandidateDetails, postFamilyDetails, postEducationalDetails, postExperienceDetails, postRefernceDetails } from '../services/apiService';
import { showToast } from '../utils/ToastNotification/toastNotification';

const ApplicationFormPage = () => {


 
    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
      ];

      const [stepIndex, setStepIndex] = React.useState(0);
      const [btnShowSubmit, setBtnShowSubmit] = React.useState(false);
      const [formData, setFormData] = React.useState({}); // State to hold form data
      const [familyData, setFamilyData] = React.useState([])
      const [educationData,seteducationData] = React.useState([])
      const [refernceDetail,setReferencesDetail] = React.useState([])
      const [experienceDetail, setExperienceDetail] = React.useState([])
      const [error, setError] = React.useState('');
      const navigate = useNavigate()

      const stepContent = [
        <div key="step1" className='Application-section'>
          {/* jaf component */}
          <JAFComponent onDataChange={setFormData}  />
        </div>,
        <div key="step2" className='Application-section FamilyDetail'>
              <FamilyDetail onDataChange={setFamilyData} />
        </div>,
        <div key="step3" className='Application-section'>
          <EducationalQualification onDataChange={seteducationData}/>
        </div>,
        <div key="step4" className='Application-section'>
         <div>
                {error && <Badge pill bg="danger" className="mb-3">{error}</Badge>}
            </div>
          <WorkExperience onDataChange={setExperienceDetail} />
        </div>,
        <div key="step5" className='Application-section Reference'>
          <Reference onDataChange={setReferencesDetail} />
        </div>,
        <div key="step6" className='Application-section Reference'>
        <Preview />
      </div>,
      ];

      const handleApiCall = async (data) => {
        console.log("body-----", data)
        try {
            const response = await postCandidateDetails(data)
            console.log('API response:', response);
        } catch (error) {
            console.error('Error during API call:', error.response.data.message);
            showToast(error.response.data.message)
        }
    };

  

    const handleSubmitFamilyDetails = async (members) => {
        const payload = {
            familyDetails: members.map(member => ({
                firstName: member.firstName,
                lastName: member.lastName,
                age: member.age,
                relationship: member.relationship,
                occupation: member.occupation
            }))
        };
        console.log("Submitting family details payload:", payload);
        
        try {
            await postFamilyDetails(payload);
            showToast('Family details submitted successfully!', 'success');
            return true
        } catch (error) {
            console.warn(error)
            return false; // Indicate failure

        }
    };

    
  const handleSubmitEducationDetails = async () => {
    const payload = {
      educationDetails: educationData.map(({ diplomaDegreeExaminationPassed, boardName, percentage, yearOfPassing }) => ({
        diplomaDegreeExaminationPassed,
        boardName,
        percentage,
        yearOfPassing,
        majorSubject:"majorSubject"
      })),
    };

    console.log("payload-------------", payload);
    try {
      const response = await postEducationalDetails(payload);
      console.log('API response:', response);
      return true
    } catch (error) {
      console.error('Error during API call:', error);
      return false
    }
  }; 

  const handSubmitReferences = async () => {
    const payload = {
        professionalReferenceDetails: refernceDetail.map((element) => ({
            name: element.name,
            organization: element.organization,
            emailAddress: element.emailAddress,
            mobileNumber: element.mobileNumber,
            designation: element.designation,
        }))
    };

    console.log("payloadRef====", payload);

    try {
        const res = await postRefernceDetails(payload);
        console.log(res);
        return true;
    } catch (error) {
        console.error("Error submitting references:", error);
        return false;        
    }
};



  const validateWorkExperience = (payload) => {
    const isValid = payload.workExperienceDetails.every((experience) => {
      return Object.values(experience).every((value) => {
        if (typeof value === 'string') {
          return value.trim() !== '';
        } else {
          return value !== null && value !== undefined;
        }
      });
    });
    return isValid;
  };

  const handleSubmitExperienceDetails = async () => {
    // Assuming experienceDetail is your state holding the work experience data
    const payload = {
        workExperienceDetails: experienceDetail.map(({ 
            organizationName, designation, periodStartDate, periodEndDate, grossSalaryPm, takeHomeSalaryPm, reasonForLeaving 
        }) => ({
            organizationName,
            designation,
            periodStartDate,
            periodEndDate,
            grossSalaryPm,
            takeHomeSalaryPm,
            reasonForLeaving
        })),
    };
    console.log("Payload before validation:", payload); 
    console.log("dasdas", validateWorkExperience(payload))
    
    // if(validateWorkExperience(payload)){
    //     setError("Please fill all the Required Field")
    // }else{
        
    // }


    try {
        setError("")
        const response = await postExperienceDetails(payload);
        console.log('API response:', response);
        return true;
    } catch (error) {
        console.error('Error during API call:', error);
        return false;
    }
};

const handleSubmitOverview = async () => {
    navigate("/thankyou")
}
    const handleNext = async () => {
        console.log("stepindex===", stepIndex);
        console.log("sdaffasfs", error)
        
        // Handle the API call for the first step (if applicable)
        // if (stepIndex === 0) {
        //     const success = await handleApiCall(formData);
        //     if (!success) return; // If API call failed, do not proceed
        // }
    
        // Handle family details submission for the second step
        if (stepIndex === 1) {
            const successFamilyPost = await handleSubmitFamilyDetails(familyData);
            if (!successFamilyPost) return; // If submission failed, do not proceed
        }
   
        // if(stepIndex === 2) {
        //     const successEducationDetails = await handleSubmitEducationDetails(educationData);
        //     if(!successEducationDetails) return;
        // }
        if(stepIndex === 3) {
            const successExperienceDetails  = await handleSubmitExperienceDetails(experienceDetail)
            if(!successExperienceDetails) return;
        }
        if(stepIndex === 4) {
            // handSubmitReferences(refernceDetail)
            const successReference = await handSubmitReferences(refernceDetail)
            if(!successReference) return;
        }
        // Move to the next step
        setStepIndex(stepIndex + 1);
        if (stepIndex === 4) {
            setBtnShowSubmit(true);
        } else {
            setBtnShowSubmit(false);
        }
    };

      const handlePrevBtn = () => {
            setStepIndex(stepIndex - 1)
            if(stepIndex === 5) {
                setBtnShowSubmit(false)
             }        
       }
    return (
        <>

    <div className='Form-steps sticky-top'>
        <Container>
            <Row className='m-0  d-flex justify-content-end align-items-center'>
                <Col className='multi-step-box' xl={{ span: 4 }} md={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 10 }}>
                    <Stepper
                        steps={steps}
                        activeStep={stepIndex}
                        activeColor="#007bff"
                        activeTitleColor="#007bff"
                        completeColor="#007bff"
                        completeTitleColor="#007bff"
                        defaultColor="#e0e0e0"
                        defaultTitleColor="#6c757d"
                        circleFontSize="16px"
                    />
                    <div className='single-step-box'>
                        <span>{stepIndex+1}</span>
                    </div>
                </Col>
                {/* <Col className='single-step-box' xl={1} md={1} sm={1} xs={1}>
                
                </Col> */}
            </Row>
           
            
        </Container>
    </div>

    <Container>
        <div className='Form-section-space'>
            <Row className="mt-4 mb-4">
                <Col>
                {stepContent[stepIndex]}
                </Col>
            </Row>
        </div>
    </Container>

    <div className='Form-next-prev sticky-bottom'>
        <Container>
            <Row className="">
                <Col>
                    <Button className='btn-previous'
                        variant="secondary"
                        onClick={handlePrevBtn}
                        disabled={stepIndex === 0}
                    >
                        <FaLongArrowAltLeft /> Previous
                    </Button>
                </Col>
                <Col className="text-end d-flex justify-content-end">
                   {btnShowSubmit ?
                    <Button className='final-submit-button' variant="primary" onClick={handleSubmitOverview}>Submit<FaCheckCircle /></Button> 
                    :
                    <Button className='btn-next' variant="primary" onClick={handleNext} disabled={stepIndex === steps.length - 1} > Next <FaLongArrowAltRight /></Button>
                   }
                </Col>
            </Row>
        </Container>
    </div>
            
        </>
    );
}

export default ApplicationFormPage;
