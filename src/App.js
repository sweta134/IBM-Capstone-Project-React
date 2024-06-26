import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/LandngPage/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import BookingConsultation from './Components/BookingConsultation';
import SelfCheckup from './Components/SelfCheckup/SelfCheckup';
import Home from './Components/Home/Home';
import Healthblog from './Components/Healthblog/Healthblog';

 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/ReviewForm" element={<ReviewForm/>}/>
        <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/ProfileCard" element={<ProfileCard/>}/>
          <Route path="/ReportsLayout" element={<ReportsLayout/>}/>
          <Route path="/BookingConsultation" element={<BookingConsultation/>} />
          <Route path="/Healthblog" element={<Healthblog/>} />
                <Route path="/SelfCheckup" element={<SelfCheckup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
