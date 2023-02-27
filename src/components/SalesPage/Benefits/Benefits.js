import React from "react";
import "./Benefits.css";
import checkmark from "../../../assets/checkmark.svg";

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-heading">
        The benefits of attending our classroom training
      </h2>
      <div className="benefits-inner-container">
        <div className="check-icon">
          <img className="checkmark" src={checkmark} alt="" />
        </div>
        <div className="benefits-details">
          <h3>Group Interaction Enhances Learning</h3>
          <p>
            Our classroom training sessions provide the opportunity for
            face-to-face interaction both with the trainer and with other
            attendees, and benefit those who learn best in a more social
            atmosphere.{" "}
          </p>
        </div>
      </div>
      <div className="benefits-inner-container">
        <div className="check-icon">
          <img className="checkmark" src={checkmark} alt="" />
        </div>
        <div className="benefits-details">
          <h3>Interact with fellow students </h3>
          <p>
            Studying in a class room means you can network with fellow
            like-minded professionals, exchange advice, and expand your network.{" "}
          </p>
        </div>
      </div>
      <div className="benefits-inner-container">
        <div className="check-icon">
          <img className="checkmark" src={checkmark} alt="" />
        </div>
        <div className="benefits-details">
          <h3>Focused study </h3>
          <p>
            Our classroom-based courses allow you to study in a dedicated
            training center, free from workplace distractions.{" "}
          </p>
        </div>
      </div>
      <div className="benefits-inner-container">
        <div className="check-icon">
          <img className="checkmark" src={checkmark} alt="" />
        </div>
        <div className="benefits-details">
          <h3>First-class facilities </h3>
          <p>
            Our class room training venue have parking, Wi-Fi, and good
            transportation facilities.{" "}
          </p>
        </div>
      </div>
      <div className="benefits-inner-container">
        <div className="check-icon">
          <img className="checkmark" src={checkmark} alt="" />
        </div>
        <div className="benefits-details">
          <h3>Face-to-face support from experienced tutors </h3>
          <p>
            Our expert trainers are on-hand to answer any questions you have.
            They will help you to interpret and understand the course content
            and prepare you for the interviews.{" "}
          </p>
        </div>
      </div>
      <div className="note-2">Learn to learn efficiently</div>

      <div className="benefits-details teaching">
        <h2 className=" benefits-heading">Our Teaching Methodology!</h2>
        <p>
          We take pride in our unique centric teaching methodology and lay
          special emphasis on the practical implementation of the instructional
          classroom training given to the students through.
        </p>
        <p>
          At Yodha Global Training Center Classroom Training, we provide best
          practices using a mix of discussion, presentations, and hands-on labs.
        </p>
        <div className="note">
          Learn with expert instructors who teach you in-demand skills and best
          practices.
        </div>
      </div>
    </div>
  );
};

export default Benefits;
