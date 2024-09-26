// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import "./App.css";
import OtpPage from './pages/OtpPage';
import NotFoundPage from './pages/NotFound';
import HrFinalStatusPage from './pages/HrFinalStatusPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import OpsAssessmentPage from './component/ops/OpsAssessmentPage';
import HrAssessmentPage from './pages/HrAssessmentPage';
import ClientAssesmentPage from './component/client/ClientAssessmentPage';
import Thankyou from './pages/Thankyou';
import HrLoginPage from './pages/HrLoginPage';
import HrDashboardPage from './pages/HrDashboardPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './function/protectedRoute';

function App() {
  return (
    <Router>
      <div className='root_screen'>    
         <ToastContainer />
        <HeaderComponent />
        <Routes>
            <Route path="/" element={<Navigate to="/login-applicant" />} />
  
            {/* Route list for candidate */}
            <Route path="/job-application-form-page" element={<ApplicationFormPage />} />
            <Route path="/login-applicant" element={<LoginPage />} />
            <Route path="/otp" element={<OtpPage />} />

            {/* Route list for HR */}
            <Route path="/login-hr" element={<HrLoginPage />} />
            <Route element={<ProtectedRoute allowedRoles={["Hr"]} />}>
              <Route path="/hr-status" element={<HrFinalStatusPage />} />
              <Route path="/dashboard-hr" element={<HrDashboardPage />} />
              <Route path="/client-assessment" element={<ClientAssesmentPage />} />
              <Route path="/hr-assessment/:id" element={<HrAssessmentPage />} />
              <Route path="/ops-assessment" element={<OpsAssessmentPage />} />
            </Route>

            {/* Thank you page */}
            <Route path="/thankyou" element={<Thankyou />} />
            {/* Not Found Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
