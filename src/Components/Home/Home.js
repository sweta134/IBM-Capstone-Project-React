import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const Healthblog = () => {
  return (
    <section className="hero-section">
    <div style={{margin: "auto", maxWidth: "1200px"}}>
      <Link to="../InstantConsultation">
            <button type="button"  class="btn btn-primary btn-lg" className="button">
              Instant Consultation
            </button>
      </Link>
      <Link to="../BookingConsultation">
            <button type="button"  class="btn btn-primary btn-lg" className="button">
              Book an Appointment
            </button>
      </Link>
      <Link to="../SelfCheckup">
            <button type="button"  class="btn btn-primary btn-lg" className="button">
              Self Checkup
            </button>
      </Link>
      <Link to="../Healthblog">
            <button type="button"  class="btn btn-primary btn-lg" className="button">
              Health Tips and Guidance
            </button>
      </Link>
    </div>
  </section>
  
  );
};

export default Healthblog;