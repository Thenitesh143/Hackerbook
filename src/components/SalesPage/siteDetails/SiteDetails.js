import React from "react";
import "./SiteDetails.css";

import topsideImg from "../../../assets/1-2.jpg";
import bottomsideImg from "../../../assets/2-4.jpg";

const siteDetails = () => {
  return (
    <div className="detail-container">
      <div className="top-container">
        <div className="top-container-text">
          <div className="heading">LEARN FROM THE EXPERT</div>
          <p>
            Do you benefit from learning in a traditional classroom training
            environment? Our experienced staff will guide you through your
            course and help you sky-rocket your career.
          </p>
          <p>
            One of YGTC’s greatest strengths is our trainers, who consistently
            deliver a best-practice learning experience, sharing their knowledge
            gained from many years working on real-time projects.
          </p>
          <div className="note">
            Every part of the classroom has been specially designed to enhance
            your studies and help you reach your dream goals.
          </div>
        </div>
        <div className="top-container-img">
          <img src={topsideImg} alt="" />
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-container-text">
          <div className="heading">
            Enhance your skills and accelerate your career
          </div>
          <p>
            You’ll follow a set timetable and attend convenient weekday, weekend
            or evening sessions to progress your course and help you get
            prepared for your interviews/career.
          </p>
          <p>
            For a practical approach to learning, you can try our unrivalled
            portfolio of classroom training courses. Delivered by subject
            experts, our courses cover a wide range of topics including Software
            Development, Web Development, Mobile Development, App Development,
            and QA Testing.
          </p>
        </div>
        <div className="bottom-container-img">
          <img className="bottom-img" src={bottomsideImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default siteDetails;
