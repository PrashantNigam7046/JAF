import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import "./App.css";
import OtpPage from './pages/OtpPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import Thankyou from './pages/Thankyou';
import LoginHrComponent from './component/HumanResource/LoginHrComponent';

function App() {
  return (
    <Router>
      <div className='root_screen'>
          <HeaderComponent></HeaderComponent>
          <Routes>
          
          <Route path="/login-hr" element={<LoginHrComponent />} />
            <Route path="/login-applicant" element={<LoginPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/job-application-form-page" element={<ApplicationFormPage />} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
          <FooterComponent></FooterComponent>

      </div>
    </Router>
  );
}

export default App;
