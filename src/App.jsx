import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import "./App.css";
import OtpPage from './pages/OtpPage';
import NotFoundPage from './pages/NotFound';
import ApplicationFormPage from './pages/ApplicationFormPage';
import Thankyou from './pages/Thankyou';
import HrLoginPage from './pages/HrLoginPage';
import HrDashboardPage from './pages/HrDashboardPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
      <div className='root_screen'>
        <ToastContainer></ToastContainer>
          <HeaderComponent></HeaderComponent>
          <Routes>

            {/* Redirect from home route to /login-applicant when someone hits on home route */}
            <Route path="/" element={<Navigate to="/login-applicant" />} />


            {/* route list */}
          
            <Route path="/login-hr" element={<HrLoginPage />} />
            <Route path="/dashboard-hr" element={<HrDashboardPage />} />
            <Route path="/login-applicant" element={<LoginPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/job-application-form-page" element={<ApplicationFormPage />} />
            <Route path="/thankyou" element={<Thankyou />} />

            {/* for undefined routes */}
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
          <FooterComponent></FooterComponent>

      </div>
    </Router>
  );
}

export default App;
