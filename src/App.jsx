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
import ApplicationFormPage from './pages/ApplicationFormPage';
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
          {/* Redirect from home route to /login-applicant */}
          <Route path="/" element={<Navigate to="/login-applicant" />} />

          {/* Public routes */}
          <Route path="/login-applicant" element={<LoginPage />} />
          <Route path="/login-hr" element={<HrLoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/job-application-form-page" element={<ApplicationFormPage />} />
          <Route path="/thankyou" element={<Thankyou />} />

          {/* Protected HR route */}
          <Route 
            path="/dashboard-hr" 
            element={
              <ProtectedRoute allowedRoles={['Hr']}> 
                <HrDashboardPage />
              </ProtectedRoute>
            } 
          />

          {/* Not found route */}
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
