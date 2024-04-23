import React, { useEffect, useState } from "react";
import '../Notification/Notification.css'

const Notification = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  const handleStorageChange = (e) => {
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    const storedAppointmentData = JSON.parse(
      localStorage.getItem("appointmentData")
    );
    setAppointmentData(storedAppointmentData);
  };

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("email");

    // Register an event listener to listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Clean up event listeners when components unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {isLoggedIn && appointmentData && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            <p className="appointment-card__message">
              <strong>Speciality:</strong> {doctorData?.speciality}
            </p>
            <p className="appointment-card__message">
              <strong>Name:</strong> {appointmentData?.name}
            </p>
            <p className="appointment-card__message">
              <strong>Phone Number:</strong> {appointmentData?.phoneNumber}
            </p>
            <p className="appointment-card__message">
              <strong>Date of Appointment:</strong> {appointmentData?.date}
            </p>
            <p className="appointment-card__message">
              <strong>Time Slot:</strong> {appointmentData?.selectedSlot}
            </p>
          </div>
        </div>
      )}
    </>
  )  
};

export default Notification;