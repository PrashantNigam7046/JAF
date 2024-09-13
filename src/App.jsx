import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import "./App.css";
import OtpPage from './pages/OtpPage';
import ApplicationFormPage from './pages/ApplicationFormPage';


function App() {
  return (
    <Router>
      <div className='root_screen'>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/job-application-form-page" element={<ApplicationFormPage />} />
          </Routes>
          <FooterComponent></FooterComponent>

      </div>
    </Router>
  );
}

export default App;
