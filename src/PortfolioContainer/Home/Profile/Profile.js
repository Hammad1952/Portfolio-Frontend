import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/hammad-ali-khan-317173308/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/Hammad1952">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://wa.me/923425428519" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://x.com/HammadKhanJado8">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am{" "}
              <span className="highlighted-text">Hammad Ali Khan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter
                  words={[
                    "Crafting Logic with C/C++ and Python 🛠️",
                    "Designing Stunning UIs with HTML | CSS | JS 🎨",
                    "Building Interactive Apps with React JS ⚛️",
                    "Styling Seamlessly with Bootstrap 💅",
                    "Mastering Code with Git and GitHub 🚀",
                    "Securing Systems on Linux Servers 🐧",
                    "Scaling Solutions with Amazon Web Services ☁️",
                    "Powering Backends with Django/Flask and DRF ⚙️",
                    "Querying Data with SQL, SQLite and PostgreSQL 📊",
                    "Innovating with AI and Generative AI 🤖",
                  ]}
                  loop={0} // 0 = infinite
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />



              </h1>
              </span>
              <span className="profile-role-tagline">
                Transforming visions into reality by crafting seamless BACKEND solutions<br/> with expertise in AI and Generative AI,<br/> I transform complex ideas into innovative, scalable realities.
              </span>
            
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me</button>
            <a href="HAMMAD_CV.pdf" download="Hammad CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
